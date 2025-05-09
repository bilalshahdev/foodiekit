import { mailerConfig, secretApiKey } from "@/config/constants";
import validate from "@/utils/validateData";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get("X-API-KEY");
    if (apiKey !== secretApiKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const data: Data = await request.json();
    const errors = validate(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const message = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">🤝 New Partner Request</h2>
      <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Name:</td>
          <td style="padding: 8px 0;">${data.name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Role:</td>
          <td style="padding: 8px 0;">${data.role}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Email:</td>
          <td style="padding: 8px 0;">${data.email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Phone:</td>
          <td style="padding: 8px 0;">${data.phone}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">About:</td>
          <td style="padding: 8px 0;">${data.about}</td>
        </tr>
      </table>
      <p style="margin-top: 30px; font-size: 14px; color: #777;">This message was sent from the FoodieKit NG partner request form.</p>
    </div>
  `;

    const transporter = nodemailer.createTransport(mailerConfig);

    // Message
    const info = await transporter.sendMail({
      from: '"FoodieKit NG" <info@dcodax.net>',
      // to: "info@foodiekitng.com",
      to: "bilalshah.dev@gmail.com",
      subject: `New Partner Request from ${data.name}`,
      text: message,
      html: message,
    });
    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// mailer name : foodiekit
// host : dcodax.net
// driver : smtp
// port : 465
// auth : {
//   user: info@dcodax.net,
// emailId: info@dcodax.net
// enc : ssl
// }
//send to email => info@foodiekitng.com
