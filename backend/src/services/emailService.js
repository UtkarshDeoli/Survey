const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another service
    auth: {
        user: 'shiva.today2023@gmail.com',
        pass: 'rbut pytn ejif azdt'
    },
});

exports.sendPasswordResetEmail = async (email, resetLink) => {
    try {
        const mailOptions = {
            from: '"Survey Support" <support@suvey.com>',
            to: email,
            subject: "Password Reset Request - Survey",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2>Password Reset Request</h2>
                    <p>Hello,</p>
                    <p>You requested to reset your password for yourSurvey account. Click the button below to reset your password. This link will expire in 10 minutes.</p>
                    <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; margin: 20px 0; background-color: #008CBA; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
                    <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                    <p>Thank you,<br/>The Survey Team</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Password reset email sent to ${email}`);
    } catch (err) {
        console.error(`Error sending password reset email to ${email}:`, err);
        throw new Error("Failed to send the password reset email");
    }
};
