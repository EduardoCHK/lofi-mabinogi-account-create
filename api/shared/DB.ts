import * as sql from 'mssql';

export async function initAsync(): Promise<void> {
    await sql.connect(process.env["connStr"]);
}
