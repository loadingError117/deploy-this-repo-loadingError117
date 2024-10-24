
import postgres from 'postgres'

// see env variables in .env
import {PGCONNECT} from '$env/static/private';

const sql = postgres(PGCONNECT, {} )
const pgConnection = import.meta.env.VITE_PGCONNECT;

export default sql;
