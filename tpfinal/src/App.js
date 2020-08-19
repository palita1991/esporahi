import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meme from "./component/Meme";
import MemeList from "./component/MemeList";

function App() {
  return (
    <div className="App">
      {/*Menú top*/}
      <div className="container">
        <div className="row">
          <Router>
            <div className="col-lg-3 col-12 d-lg-block d-none navLeft">
              {/*Menú lateral*/}
            </div>
            <div className="col-lg-9 col-12 principal overflow-auto">
              <Switch>
                <Route path="/meme/:id" component={MemeList}>
                  <Meme />
                </Route>
                <Route path="/category/:id">
                  {/*Listado categoría por id*/}
                </Route>
                <Route path="/register">
                  {/*Meme por id con todos sus detalles*/}
                </Route>
                <Route path="/">
                  <MemeList />
                  {/*Página principal*/}
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
