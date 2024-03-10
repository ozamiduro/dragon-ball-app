import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const DetallePlanet = () => {
    const [planet, setPlanet] = useState({});
    const { name } = useParams();

    const getData = async () => {
        const res = await fetch(
            `https://dragonball-api.com/api/planets/${name}`
        );
        const data = await res.json();
        setPlanet(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <NavLink
                className="bg-gray-200 text-gray-700 p-3 shadow-lg rounded-md font-bold"
                to="/"
            >
                {"<"} Regresar
            </NavLink>

            <div className="text-center grid grid-cols-2 gap-3">
                <div>
                    <img
                        style={{
                            maxHeight: "400px",
                            margin: "0 auto",
                        }}
                        src={planet.image}
                        alt={planet.name}
                    />
                </div>
                <div>
                    <table className="table-auto border-collapse border">
                        <thead>
                            <tr>
                                <th className="border p-2">Campo</th>
                                <th className="border p-2">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border p-2">Nombre</th>
                                <td className="border p-2">{planet.name}</td>
                            </tr>

                            <tr>
                                <th className="border p-2">Destruido</th>
                                <td className="border p-2">{planet.isDestroyed ? "Si": "No"}</td>
                            </tr>
                            <tr>
                                <th className="border p-2">Descripcion</th>
                                <td className="border p-2">{planet.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetallePlanet;
