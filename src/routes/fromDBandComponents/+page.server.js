/*
import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;

    console.log({rows});

    return { containers: rows };
}
*/
import { sql } from "@vercel/postgres";

export async function load({ locals }) {
  return {
    cart: await sql`SELECT * from CARTS where user_id='${locals.user}'`
  }
}