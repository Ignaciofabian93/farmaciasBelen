import Image from "next/image";

export default function Card({ src }) {
  return (
    <>
      <div className="card">
        <div className="text-center">
          <h4>Producto</h4>
        </div>
        <div className="img">
          <Image
            src={src}
            className="rounded-md"
            width={180}
            height={200}
            alt="carousel-image"
          />
        </div>
        <div className="text-center">
          <p>$9.990</p>
        </div>
      </div>
    </>
  );
}
