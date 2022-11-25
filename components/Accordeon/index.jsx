import { direcciones } from "../direcciones";
import { AiOutlineArrowDown } from "react-icons/ai";
import Map from "../Map";
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

direcciones.sort(function (a, b) {
  if (a.comuna < b.comuna) {
    return -1;
  }
  if (a.comuna > b.comuna) {
    return 1;
  }
  return 0;
});

export default function Accordeon() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <div className="w-fit grid grid-cols-1 mx-auto sm:grid-cols-2 gap-6 md:grid-cols-3">
        {direcciones.map((item, index) => (
          <div className="" onClick={() => toggle(index)} key={index}>
            <div className="accordeon">
              <small>{item.comuna}</small>
              <div>
                <AiOutlineArrowDown size={16} />
              </div>
            </div>
            <div
              className={
                selected === index ? "box-content show" : "box-content"
              }
            >
              <small>{item.direccion}</small>
              <small>{item.telefono}</small>
              <Map src={item.mapa} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
