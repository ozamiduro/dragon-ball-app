import React from "react";

import { Error } from "../components/Error";
import Planet from "mf_planet/Planet";

const HomePage = () => {
  return (
    <div className="text-center">
      <Error>
        <Planet/>
      </Error>
    </div>
  );
};

export default HomePage;
