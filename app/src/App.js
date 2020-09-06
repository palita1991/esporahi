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
    this.state = { memes: 0, category: 0 };
  }

  /* Funcion que hace el fetch con los memes */
  fetchMemes() {
    fetch("http://localhost:8080/memes")
      .then((response) => {
        return response.json();
      })
      .then((memes) => {
        this.setState({ memes });
      });
  }

  /* Funcion que hace el fetch para traer las categorias */
  fetchCategories() {
    fetch("http://localhost:8080/categoria")
      .then((response) => {
        return response.json();
      })
      .then((category) => {
        this.setState({ category });
      });
  }

  /* Componente que se ejecuta antes del render */
  componentWillMount() {
    this.fetchMemes();
    this.fetchCategories();
  }

  /* Funcion encargada de cambiar la vista, en info vendria el id de lo que se quiera y route apunta a
    que ruta se pretende apuntar
  */
  changeView = (info, route) => {
    if (route === "category") {
      fetch(`http://localhost:8080/memes/category/${info}`)
        .then((response) => {
          return response.json();
        })
        .then((category) => {
          this.setState({ memes: category });
        });
    } else {
      this.fetchMemes();
    }
  };

  /* Funcion abocada a que si el estado con su categoria aun no tiene nada, no muestra nada */
  showCategoriesList = () => {
    if (this.state.category.length > 0) {
      return (
        <NavLeft
          categories={this.state.category}
          changeView={this.changeView}
        />
      );
    }
  };

  /* Funcion identica a la anterior, solamente que con los memes */
  showMemeList = () => {
    if (this.state.memes.length > 0) {
      return <MemeList memes={this.state.memes} />;
    } else {
      return <p className="text-center">Cargando memes...</p>;
    }
  };

  render() {
    return (
      <div className="App">
        {/*Menú top*/}
        <Router>
          <NavTop changeView={this.changeView} />
          <div className="container main">
            <div className="row rounded-lg main_content">
              <div className="col-lg-2 col-12 d-lg-block d-none navleft rounded-lg position-fixed">
                {this.showCategoriesList()}
              </div>
              <div className="col-lg-10 col-12 list_content rounded-lg position-relative">
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
                    {this.showMemeList()}
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
