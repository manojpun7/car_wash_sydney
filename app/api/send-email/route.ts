import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { fullName, phone, movingFrom, movingTo, message } = await req.json();

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for port 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Sydney Car Removal" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Quote Request from ${fullName}`,
            text: `
Name: ${fullName}
Phone: ${phone}
Moving From: ${movingFrom}
Moving To: ${movingTo}
Message: ${message}
      `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);

        return Response.json({ success: true });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return Response.json(
            { success: false, error: (error as Error).message },
            { status: 500 }
        );
    }
}
