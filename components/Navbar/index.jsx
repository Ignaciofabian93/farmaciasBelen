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
                  src={"/images/logos/logobelen (1).gif"}
                  width={120}
                  height={30}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mr-4 hidden sm:flex items-center">
            <ul className="flex">
              <li className="btn-nav">
                <Link href={"#"}>Correo interno</Link>
              </li>
              <li className="btn-nav">
                <Link href={"#"}>Intranet</Link>
              </li>
            </ul>
          </div>
          <div
            className="sidebar transition duration-500 ease-in-out"
            style={
              ({ display: open ? "flex" : "none" },
              { transform: open ? "translateX(-180px)" : "none" })
            }
          >
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <Link href={"#"}>Inicio</Link>
              </li>
              <li className="sidebar-item">
                <Link href={"#"}>Catálogo</Link>
              </li>
              <li className="sidebar-item">
                <Link href={"#"}>Sucursales</Link>
              </li>
              <li className="sidebar-item">
                <Link href={"#"}>Contacto</Link>
              </li>
              <li className="sidebar-item">
                <Link href={"#"}>Correo interno</Link>
              </li>
              <li className="sidebar-item">
                <Link href={"#"}>Intranet</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
