import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Email service provider
  auth: {
    user: "shahid.hassan007@gmail.com",
    pass: "elej hkjo wpgw cszg",
  },
});

// Email sending function
export async function sendContactUserEmail(name, email, message) {
  const mailOptions = {
    from: email, // sender address
    to: `shahid.hassan007@gmail.com`,
    subject: `${email} sent you a message`, // Subject line
    text: `Hello Adlick Healthcare,\n\nYou have received a message from ${name}.`, // plain text body
    // Design tokens are inlined as literal hex — mail clients support neither
    // CSS custom properties nor webfonts.
    //   surface.muted #121028 · text.primary #ede8e8 · accent #d946ef
    //   border.subtle #241e44 · text.muted #a5a0b8
    html: `
       <div style="background-color: #121028; color:#EDE8E8; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #241E44; border-radius: 16px;">
                            <div
                  style="width: 100%; display: flex; justify-content: center; align-items: center; text-align: center; margin-bottom: 10px;"

                  >
                    <div style="color: #D946EF; font-size: 22px; font-weight: 600; letter-spacing: 0.04em; width: 100%;" >
                      <span style="color: #A5A0B8; font-size: 22px; font-weight: 400;">
                        <
                      </span>
                      SahidHossain
                      <span  style="color: #A5A0B8; font-size: 22px; font-weight: 400;">
                         />
                      </span>
                    </div>
                  </div>
           <h2 style="color: #EDE8E8; text-align: center; font-weight: 600;">Hello, Sahid Hossain!</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #EDE8E8;">
            You have received a message from <a href="mailto:${email}" style="color: #F0ABFC; text-decoration: none;">${name}</a>.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #EDE8E8; margin-bottom: 20px;">
            <strong style="color: #F0ABFC;">Dear Sahid Hossain,</strong>
            <br/>
            ${message}
          </p>

          <hr style="border: 0; border-top: 1px solid #241E44;" />
          <p style="font-size: 14px; line-height: 1.6; color: #EDE8E8;">
            Best Regards,<br/>
            <span style="color: #F0ABFC;">${name}</span>
          </p>
          <p style="font-size: 12px; color: #A5A0B8; text-align: center;">
            You are receiving this email because <span style="color: #F0ABFC;">${name}</span> contacted you via your protfolio website from <span
            style="color: #F0ABFC;">${email}</span>.
          </p>
        </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    return info;
  } catch (error) {
    throw error;
  }
}
