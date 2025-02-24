import nodemailer from "nodemailer";

import { EMAIL, EMAIL_PASSWORD, SERVICE } from "./env.js";

const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
