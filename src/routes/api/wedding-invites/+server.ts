import type { RequestHandler } from "./$types";
import { SENDGRID_KEY, DB_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";
import mysql from "mysql2";
import sendgrid, { type MailDataRequired } from "@sendgrid/mail";

enum GroomRelations {
  Sibling = 1,
  ExtendedFamily = 2,
  Friend = 3,
  FriendSpouse = 4,
  SiblingFamily = 5,
}

type Guest = {
  firstName: string;
  lastName: string;
  relation: GroomRelations;
  email?: string;
};

type WeddingInviteRequest = {
  guests: Guest[];
};

sendgrid.setApiKey(SENDGRID_KEY);

function generateEmailHtml(guests: Guest[]): string {
  const guestSnippet = guests
    .map((guest) => `<li>${guest.firstName} ${guest.lastName}`)
    .join("");
  return `<!doctypehtml><meta charset=utf-8><title>Email Template</title><meta content="Webpage for xxxx"name=description><link href=https://fonts.googleapis.com rel=preconnect><link href=https://fonts.gstatic.com rel=preconnect crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap"rel=stylesheet><main><h1>Thank You For Registering</h1><ul>${guestSnippet}</ul><p>Please save this email as your ticket.<p>The ceremony begins at 4:00pm, with a reception at 5:00pm.<p>The venue is near Shumoku in Nagoya, Japan</p><a href=https://maps.app.goo.gl/sBKcU3j5MmYY5pkt6>Click Here For Directions on Google Maps</a></main><style>*{padding:0;margin:0;box-sizing:border-box;font-family:Quicksand,sans-serif}body{background:#0c0a09;color:#fff;padding:.75rem 1rem .75rem 1rem}main{background-image:linear-gradient(to left,#292524,#1c1917);border-radius:.5rem;padding:1.5rem 2rem 1.5rem 2rem;display:grid;gap:1rem}h1{font-family:"Playfair Display",serif}ul{padding:.5rem 0 .5rem 1rem;display:grid;gap:.25rem}li{font-weight:500}a{color:#f59e0b}</style>`;
}

export const POST: RequestHandler = async ({ request }) => {
  const body: WeddingInviteRequest | null = await request
    .json()
    .catch(() => null);
  if (!body) throw error(400, "Bad Request");
  const { guests } = body;

  const destinationEmails = guests.reduce<string[]>(
    (emails, guest) => (!guest.email ? emails : [...emails, guest.email]),
    [],
  );
  if (destinationEmails.length < 1) throw error(400, "Email required");

  const conn = mysql.createConnection(DB_URL);
  const ok = await Promise.all([
    guests.map(
      ({ firstName, lastName, relation, email }) =>
        new Promise<void>((res, rej) =>
          conn.query(
            `INSERT INTO guests (first_name, last_name, relationId, email) VALUES (?, ?, ?, ?)`,
            [firstName, lastName, relation, email],
            (err) => {
              if (err) rej();
              else res();
            },
          ),
        ),
    ),
  ])
    .then(() => true)
    .catch(() => false)
    .finally(() => conn.end());

  if (!ok) {
    throw error(409, "Guest Already Exists");
  }

  const message: MailDataRequired[] = destinationEmails.map(
    (destinationEmail) => ({
      to: destinationEmail,
      from: "ian@shakespeare.dev",
      subject: "Shakespeare Wedding Invitation",
      html: generateEmailHtml(guests),
    }),
  );

  sendgrid.send(message);

  console.log(SENDGRID_KEY);
  return new Response("Created");
};
