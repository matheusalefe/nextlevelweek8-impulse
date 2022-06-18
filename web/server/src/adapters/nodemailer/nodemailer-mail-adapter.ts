import nodemailer from 'nodemailer';
import { brotliDecompressSync } from 'zlib';
import { MailAdapter, SendMailData} from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "dd0dcf267caeb5",
        pass: "2d7d8de75e217a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Fernanda Gastal <fernanda.gastal.figueiredo@usp.br',
            subject,
            html: body,
        });
    }
}