import React, { useEffect, useState } from "react";

const PersonajesList = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getPersonajes = async () => {
      const res = await fetch("https://dragonball-api.com/api/planets");
      const data = await res.json();
      setPersonajes(data.items);
    };

    getPersonajes();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {personajes.map((personaje) => (
              <div key={personaje.id}>
                <a href={`/planet/${personaje.id}`}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={personaje.image}
                      alt={personaje.name}
                      height="150"
                      className="w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Nombre Planeta: {personaje.affiliation}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {personaje.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonajesList;
