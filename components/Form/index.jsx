import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [rut, setRut] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando...");

    let data = {
      names,
      lastNames,
      email,
      telephone,
      rut,
      message,
    };

    fetch("/api/contacto", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Recibido");
      if (res.status === 200) {
        console.log("Envio exitoso");
        setSubmitted(true);
        setNames("");
        setLastNames("");
        setEmail("");
        setTelephone(0);
        setRut(0);
        setMessage("");
        router.push("/");
      }
    });
  };

  console.log(
    "nombres: " + names,
    "apellidos: " + lastNames,
    "correo: " + email,
    "numero: " + telephone,
    "rut: " + rut,
    "mensaje: " + message
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col text-center items-center">
          <h1>Envíanos un mensaje</h1>
          <p className="p">
            Ante cualquier duda, cotización o sugerencia no dudes en escribir
          </p>
        </div>
        <form>
          <input
            className="text"
            id="names"
            name="names"
            type="text"
            placeholder="Nombres"
            onChange={(e) => setNames(e.target.value)}
            required
          />
          <input
            className="text"
            id="lastnames"
            name="lastnames"
            type="text"
            placeholder="Apellidos"
            onChange={(e) => setLastNames(e.target.value)}
            required
          />
          <input
            className="text"
            id="email"
            name="email"
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="number"
            id="rut"
            name="rut"
            type="number"
            placeholder="RUT (Sin puntos ni guión)"
            onChange={(e) => setRut(e.target.value)}
            required
          />
          <div className="flex items-center w-full">
            <div className="area-box flex items-center justify-center">
              <p>+56</p>
            </div>

            <input
              className="number"
              id="telephone"
              name="telephone"
              type="number"
              placeholder="Teléfono"
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <textarea
            className="area"
            placeholder="Mensaje"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            className="btn-primary w-fit shadow"
            type="submit"
            value="Enviar"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </>
  );
}
