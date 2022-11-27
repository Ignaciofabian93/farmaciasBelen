import Head from "next/head";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { destacados } from "../components/destacados";
import { catalogo } from "../components/catalogo";
import Image from "next/image";

export default function Home() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const images = [
    {
      title: "Belleza y cuidado",
      img: "/images/gallery/bellezaycuidado.jpeg",
    },
    { title: "Bioequivalentes", img: "/images/gallery/bioequivalentes.jpeg" },
    {
      title: "Productos naturales",
      img: "/images/gallery/prodcutosnaturales.jpeg",
    },
    {
      title: "Productos veterinarios",
      img: "/images/gallery/productosveterinarios.jpeg",
    },
    {
      title: "Suplementos deportivos",
      img: "/images/gallery/suplementosdeportivos.jpeg",
    },
  ];

  return (
    <div>
      <Head>
        <title>Farmacias Belén</title>
        <meta
          name="description"
          content="Los mejores precios y una gran variedad en medicamentos"
        />
        <link rel="icon" href="/images/logos/logo.png" />
      </Head>
      <main className="content">
        <section className="section-hero mx-auto">
          <Hero />
        </section>
        <section className="section-2 mx-auto">
          <div className="grid grid-cols-1 mx-auto mt-4 sm:grid-cols-3 md:grid-cols-5">
            {images.map((item, index) => (
              <div className="product-box mx-auto" key={index}>
                <p className="text-center">{item.title}</p>
                <div className="classimage">
                  <Image
                    src={item.img}
                    width={250}
                    height={80}
                    alt="grupo-producto"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section-3 mx-auto">
          <div id="destacados">
            <div>
              <h2 className="text-center">Productos destacados</h2>
            </div>

            <div className="flex mx-auto justify-center items-center w-full">
              <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="carousel mx-auto"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="flex"
                >
                  {destacados.map((image, index) => (
                    <Carousel
                      key={index}
                      item={index}
                      titulo={image.titulo}
                      precio={image.precio}
                      alt={image.alt}
                      src={image.src}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="section-2 mx-auto">
          <div>
            <div>
              <h2 className="text-center">Catálogo</h2>
            </div>
            <div className="flex mx-auto justify-center items-center w-full">
              <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="carousel mx-auto"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="flex"
                >
                  {catalogo.map((image, index) => (
                    <Carousel
                      key={index}
                      item={index}
                      titulo={image.titulo}
                      precio={image.precio}
                      alt={image.alt}
                      src={image.src}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <div className="flex w-full items-center justify-center mt-6">
              <Button href={"/catalogo"} text="Ver catálogo" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
