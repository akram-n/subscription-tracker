import nodemailer from "nodemailer";

import { EMAIL, EMAIL_PASSWORD, SERVICE } from "./env.js";

export const accountEmail = EMAIL;

const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
