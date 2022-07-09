import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Luan", email: "ipsluan@icloud.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: "Luan Argolo", 
        email: "ipsluan@icloud.com" 
      },
      message: { 
        subject: "Bem-vindo", 
        body: "Seja bem-vindo ao sistema" 
      },
    });

    return res.send();
  },
};
