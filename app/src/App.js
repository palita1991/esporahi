import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meme from "./component/Meme";
import MemeList from "./component/MemeList";
import NavLeft from "./component/NavLeft";
import NavTop from "./component/NavTop";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        {/*Menú top*/}
        <Router>
          <NavTop />
          <div className="container main">
            <div className="row rounded-lg main_content">
              <div className="col-lg-3 col-12 d-lg-block d-none navleft rounded-lg">
                <NavLeft />
              </div>
              <div className="col-lg-9 col-12 list_content overflow-auto rounded-lg">
                <Switch>
                  <Route path="/create">{/*Listado categoría por id*/}</Route>
                  <Route path="/meme/:id" component={MemeList}>
                    <Meme />
                  </Route>
                  <Route path="/category/:id" component={MemeList}>
                    {/*Listado categoría por id*/}
                  </Route>
                  <Route path="/profile">
                    {/*Meme por id con todos sus detalles*/}
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
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
