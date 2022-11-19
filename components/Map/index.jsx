import { direcciones } from "../direcciones";

export default function Map() {
  return (
    <div className="map_container">
      <iframe
        src={direcciones.mapa}
        className=""
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
