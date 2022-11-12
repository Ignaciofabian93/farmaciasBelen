import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="text-center">
          <h3>Síguenos en redes sociales</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="logo flex items-center">
            <Image
              src={"/images/logos/logobelen (1).gif"}
              width={150}
              height={75}
              alt="Logo"
              priority
            />
          </div>
          <div className="icons">
            <Link
              href={"https://www.facebook.com/profile.php?id=100057198140711"}
              target="_blank"
            >
              <BsFacebook size={24} />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100057198140711"}
              target="_blank"
            >
              <BsInstagram size={24} />
            </Link>

            <Link
              href={
                "https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.farmaciasbelen.cl%2F&text=Farmacias%20Belen%3A"
              }
              target="_blank"
            >
              <BsTwitter size={24} />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h4>Contacto</h4>
          <p>
            Teléfono: <br />
            (+56) 227345233
          </p>
          <p>
            Email: <br />
            contacto@farmaciasbelen.cl
          </p>
        </div>
      </footer>
    </>
  );
}
