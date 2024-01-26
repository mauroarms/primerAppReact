import { useState } from "react";

const Contador = () => {
  //let anioActual = 2024;
  const [anioActual, setAnio] = useState(2024);

  return (
    <article className="container my-5 d-flex align-items-center flex-column">
      <h2>Contador de Años</h2>
      <strong className="my-4">{anioActual}</strong>
      <div className="d-flex w-50 justify-content-evenly">
        <button
            className="btn btn-primary"
            onClick={() => setAnio(anioActual + 1)}
        >
            Aumentar
        </button> 
        <button
            className="btn btn-primary"
            onClick={() => setAnio(anioActual - 1)}
        >
            Decrementar
        </button> 
      </div>

    </article>
  );
};

export default Contador;
