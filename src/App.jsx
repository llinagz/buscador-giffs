import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import Detail from "./pages/Detail/Detail";
import "./styles/App.css";

function App() {
  return (
    <StaticContext.Provider
      value={{
        nameContext: "javi",
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1 className="tituloPrincipal">Buscador de gifs</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
