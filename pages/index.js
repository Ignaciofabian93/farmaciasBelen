import Head from "next/head";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { destacados } from "../components/destacados";
import { catalogo } from "../components/catalogo";

export default function Home() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
        <section className="section-3 mx-auto">
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
              <Button href={"/catalogue"} text="Ver catálogo" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
