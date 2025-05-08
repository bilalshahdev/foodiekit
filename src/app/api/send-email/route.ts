import { emailApiKey, secretApiKey } from "@/config/constants";
import validate from "@/utils/validateData";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get("X-API-KEY");
    if (apiKey !== secretApiKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    console.log(apiKey)
    if (!emailApiKey) {
      return NextResponse.json(
        { error: "Email API key is not set" },
        { status: 500 }
      );
    }
    const data: Data = await request.json();

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const resend = new Resend(emailApiKey);

    const message = `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        About: ${data.about}
        Role: ${data.role}
      `;

    const { data: emailData, error } = await resend.emails.send({
      from: "noreply@resend.com",
      to: "Info@foodiekitng.com",
      subject: `New Partner Request from ${data.name}`,
      text: message,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: emailData }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
