import Image from "next/image";

export default function Card({ titulo, src, precio, alt }) {
  return (
    <>
      <div className="card">
        <div className="text-center">
          <h5>{titulo}</h5>
        </div>
        <div className="img">
          <Image
            src={src}
            className="rounded-md"
            width={180}
            height={200}
            alt="Imagen de producto"
            priority
          />
        </div>
        <div className="text-center">
          <p>${precio}</p>
        </div>
      </div>
    </>
  );
}
