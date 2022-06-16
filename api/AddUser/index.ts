import type { Context, HttpRequest } from '@azure/functions';
import * as DB from '../shared/DB';
import * as sql from 'mssql';

export default async function httpTrigger(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    await DB.initAsync();

    if (req.body['name'] === undefined) throw new Error();
    if (req.body['password'] === undefined) throw new Error();

    await sql.query(`
    DECLARE @password NVARCHAR(50);

    SELECT @password =
    Substring(sys.FN_SQLVARBASETOSTR(HASHBYTES('MD5', '${req.body['password']}')), 3, 32);
    
    INSERT INTO account
                (id,
                 password,
                 NAME,
                 serialnumber,
                 email,
                 flag,
                 blocking_date,
                 blocking_duration,
                 authority,
                 provider_code,
                 machineids)
    VALUES     ('${req.body['name']}',
                @password,
                'player',
                '111111-1111111',
                '123456@qq.com',
                '-1',
                Getdate(),
                '0',
                0,
                NULL,
                '');
    
    UPDATE account
    SET    password = Upper(password)
    WHERE  password = @password; 
    `);

    await sql.query(`
    USE [mabi_shop]
    INSERT INTO Shop_premiumpack (id, checked, premiumvip) VALUES ('${req.body['name']}', '2022-06-17', '2099-05-24');
    `);

    context.res = {};
}
