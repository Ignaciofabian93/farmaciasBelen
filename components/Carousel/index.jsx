import Card from "../Card";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel({ item, src, titulo, precio, alt }) {
  // const [width, setWidth] = useState(0);

  // const carousel = useRef();

  // useEffect(() => {
  //   // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <>
      <div className="mx-auto">
        {/* <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel mx-auto"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          > */}
        <div key={item}>
          <Card titulo={titulo} precio={precio} alt={alt} src={src} />
        </div>
        {/* </motion.div>
        </motion.div> */}
      </div>
    </>
  );
}
