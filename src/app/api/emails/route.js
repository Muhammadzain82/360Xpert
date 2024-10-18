import { mailOptions, transporter } from "@/app/helpers/nodemailer";


// export async function POST(request) {
//     try {
//         // Parse the request body to get additional data (optional)
//         const { subject, message } = await request.json();

//         // Update mailOptions to include subject and message
//         const options = {
//             ...mailOptions,
//             subject: subject || "Default Subject",
//             text: message || "Default message content", // Plain text
//             html: `<p>${message || "Default message content"}</p>`, // HTML content
//         };

//         // Send the email
//         const result = await transporter.sendMail(options);

//         return new Response(JSON.stringify({
//             success: true,
//             message: "Email sent successfully",
//             result,
//         }), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return new Response(JSON.stringify({
//             success: false,
//             message: "Error sending email",
//         }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }


export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        // Update mailOptions to include subject and message
        const options = {
            ...mailOptions,
            subject: subject || "Contact Form Submission",
            html: message, // HTML content
        };

        // Send the email
        const result = await transporter.sendMail(options);

        return new Response(JSON.stringify({
            success: true,
            message: "Email sent successfully",
            result,
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Error sending email",
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}