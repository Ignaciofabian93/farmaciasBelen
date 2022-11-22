import { direcciones } from "../direcciones";
import { AiOutlineArrowDown } from "react-icons/ai";
import Map from "../Map";
import { useState } from "react";

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
  // const [extended, setExtended] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <>
      <div className="w-fit grid grid-cols-1 mx-auto sm:grid-cols-2 gap-6 md:grid-cols-3">
        {direcciones.map((item, index) => (
          <div
            className="flex flex-col"
            onClick={() => toggle(index)}
            key={index}
          >
            <div className="accordeon">
              <small>{item.comuna}</small>
              <div>
                <AiOutlineArrowDown size={16} />
              </div>
            </div>
            {selected == index ? (
              <div
                className="box-hidden transition-all duration-500 ease-in-out"
                // style={{
                //   display: selected ? "flex" : "none",
                // }}
              >
                <small>{item.direccion}</small>
                <small>{item.telefono}</small>
                <Map src={item.mapa} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
