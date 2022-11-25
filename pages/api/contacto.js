// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.app,
    },
    secure: true,
  });

  const mailData = {
    from: "enviodecorreosnode@gmail.com",
    to: "contacto@farmaciasbelen.cl",
    subject: `Mensaje de ${req.body.names} ${req.body.lastNames}`,
    // text: req.body.message + " | Enviado por: " + req.body.email,
    html: `<div>${req.body.message}</div>
			<p>Enviado por: <br/>
			Nombre: 
			${req.body.names}
			${req.body.lastNames}<br/>
			Email: 
			${req.body.email}<br/>
			Número: 
			${req.body.telephone}<br/>
			RUT: 
			${req.body.rut}
			</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
