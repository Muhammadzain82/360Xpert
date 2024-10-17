import nodemailer from 'nodemailer'

const email = "bassamnaeem11@gmail.com"
const password = "csmk wfca eift xpha"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: password
    }
})

export const mailOptions = {
    from: email,
    to: "360xpertsolutions@gmail.com"
}


