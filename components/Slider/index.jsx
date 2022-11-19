import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const sliderImages = [
  "/images/slider/image-1.jpeg",
  "/images/slider/image-2.jpeg",
  "/images/slider/image-3.jpeg",
  "/images/slider/image-4.jpeg",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  function loop(count) {
    if (count == sliderImages.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = sliderImages.length - 1);
    }
    return count;
  }

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((count) => loop(count + 1)),
      4000
    );
    return () => clearInterval(interval);
  });

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <>
      <div className="slider mx-auto">
        <div className="w-fit h-fit flex items-center justify-center">
          <div className="icon-left">
            <AiOutlineLeft
              size={24}
              onClick={() => setIndex((count) => loop(count - 1))}
            />
          </div>
          <div className="w-full h-full">
            <motion.div
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              key={sliderImages[index]}
            >
              <Image
                className="rounded mx-auto"
                src={sliderImages[index]}
                width={1100}
                height={500}
                alt="slideimage"
                priority
              />
            </motion.div>
          </div>
          <div className="icon-right">
            <AiOutlineRight
              size={24}
              onClick={() => setIndex((count) => loop(count + 1))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
