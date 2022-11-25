import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
    if (open) {
      console.log("Nav opened");
    }
  };
  return (
    <>
      <div>
        <nav className="flex w-screen justify-between">
          <div className="flex items-center justify-around">
            <div className="menu-icon ml-4 mr-4">
              <BiMenuAltLeft size={24} onClick={toggle} />
            </div>
            <div className="ml-4">
              <Link href={"/"}>
                <Image
                  className="logo-img"
                  src={"/images/logos/logo-nav.gif"}
                  width={120}
                  height={30}
                  style={{ height: "auto" }}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mr-4 hidden sm:flex items-center">
            <ul className="flex">
              <li className="btn-nav">
                <Link
                  href={"http://www.farmaciasbelen.cl/webmail/?_task=login"}
                  target="_blank"
                >
                  Correo interno
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="sidebar transition duration-500 ease-in-out"
            style={
              ({ display: open ? "flex" : "none" },
              { transform: open ? "translateX(-186px)" : "none" })
            }
          >
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <Link href={"/"} onClick={() => setOpen(true)}>
                  Inicio
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href={"/catalogo"} onClick={() => setOpen(true)}>
                  Catálogo
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href={"/sucursales"} onClick={() => setOpen(true)}>
                  Sucursales
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href={"/contacto"} onClick={() => setOpen(true)}>
                  Contacto
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  href={"http://www.farmaciasbelen.cl/webmail/?_task=login"}
                  target="_blank"
                  onClick={() => setOpen(true)}
                >
                  Correo interno
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
