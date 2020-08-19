import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavLeft from "./component/NavLeft";
import NavTop from "./component/NavTop";

function App() {
  return (
    <div className="App">
      {/*Menú top*/}
      <div className="container main_content">
        <NavTop />
        <div className="row">
          <Router>
            <div className="col-lg-3 col-12 d-lg-block d-none ">
              <NavLeft />
            </div>
            <div className="col-lg-9 col-12 principal">
              <Switch>
                <Route path="/meme/:id">
                  {/*Meme por id con todos sus detalles*/}
                </Route>
                <Route path="/category/:id">
                  {/*Listado categoría por id*/}
                </Route>
                <Route path="/register">
                  {/*Meme por id con todos sus detalles*/}
                </Route>
                <Route path="/">{/*Página principal*/}</Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
