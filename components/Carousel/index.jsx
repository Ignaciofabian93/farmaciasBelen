import Card from "../Card";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { destacados } from "../destacados";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div className="mx-auto">
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
              <div key={index}>
                <Card src={image.src} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
