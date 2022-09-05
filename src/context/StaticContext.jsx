import React from "react";

//cremos un "objeto mágico" con unos valores iniciales y lo exportamos
const Context = React.createContext({
  nameContext: "estoEsSinProvider",
  suscribeteAlCanal: true,
});

export default Context;
