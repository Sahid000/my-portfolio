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
    html: `
       <div style="background-color: #09101A; color:#F2F3F5; font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #55E6A5; border-radius: 10px;">
                            <div
                  style="width: 100%; display: flex; justify-content: center; align-items: center; text-align: center; margin-bottom: 10px;"
                   
                  >
                    <div style="color: #55E6A5; font-size: 24px; font-weight: 600; width: 100%;" >
                      <span style="color: #F2F3F5; font-size: 24px; font-weight: 800; font-style: italic">
                        < 
                      </span>
                      SahidHossain
                      <span  style="color: #F2F3F5; font-size: 24px; font-weight: 800; font-style: italic">
                         />
                      </span>
                    </div>
                  </div>
           <h2 style="color: #55E6A5; text-align: center;">Hello, Sahid Hossain!</h2>
          <p style="font-size: 16px; line-height: 1.5; color: #FFFFFF;">
            You have received a message from <a href="mailto:${email}" style="color: #55E6A5; text-decoration: none;">${name}</a>.
          </p>
         
          <p style="font-size: 16px; line-height: 1.5; color: #55E6A5; margin-bottom: 20px;">
            <strong>Dear Sahid Hossain,</strong> 
            <br/>
            <br/>
            <div style="color: #FFFFFF>${message}</div>
          </p>

          <hr style="border-top: 1px solid #55E6A5; background-color: #55E6A5; color: #55E6A5;" />
          <p style="font-size: 14px; line-height: 1.5; color: #FFFFFF;">
            Best Regards,<br/>
            <span style="color: #55E6A5;">${name}</span>
          </p>
          <p style="font-size: 12px; color: ##FFFFFF88; text-align: center;">
            You are receiving this email because <span style="color: #55E6A5;">${name}</span> contacted you via your protfolio website from <span 
            style="color: #55E6A5;">${email}</span>.
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
