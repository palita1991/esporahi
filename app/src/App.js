//require("dotenv").config();
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meme from './component/Meme';
import MemeList from './component/MemeList';
import NavLeft from './component/Menu/NavLeft';
import NavTop from './component/Menu/NavTop';
import UserProfile from './component/UserProfile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memeSelected: '',
      memes: 0,
      category: 0,
      categorySelected: 'General',
      logged_in: true,
      user_id: 5,
      name: '',
      vistaActual: 'stateLogout',
      comments: [], //nuevo
      votos: [],
    };
  }

  //Funcion encargada de actualizar los votos del meme
  addVotos = (arregloIdVotes, memeId, arregloIdVotesContrary) => {
    let object = JSON.stringify({
      upvotes: { user_id: arregloIdVotes },
      downvotes: { user_id: arregloIdVotesContrary },
    });
    fetch(`http://localhost:8080/memes/${memeId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: object,
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        this.setState({
          votos: {
            upvotes: { user_id: arregloIdVotes },
            downvotes: { user_id: arregloIdVotesContrary },
          },
        });
      });
  };

  setVistaActual = (vista, name, id) => {
    const newState = { vistaActual: vista, user_id: id, name };
    this.setState(newState);
  };

  /* Funcion que hace el fetch con los memes */
  fetchMemes() {
    fetch('http://localhost:8080/memes')
      .then((response) => {
        return response.json();
      })
      .then((memes) => {
        this.setState({ memes });
      });
  }

  /* Funcion que hace el fetch para traer las categorias */
  fetchCategories() {
    fetch('http://localhost:8080/categoria')
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
    if (route === 'category') {
      fetch(`http://localhost:8080/memes/category/${info}`)
        .then((response) => {
          return response.json();
        })
        .then((memesCategory) => {
          this.setState({ memes: memesCategory, categorySelected: info });
        });
    } else if (route === 'meme') {
      fetch(`http://localhost:8080/memes/${info}`)
        .then((response) => {
          return response.json();
        })
        .then((meme) => {
          this.setState({
            memes: meme,
            comments: meme[0].comments,
            memeSelected: meme[0]._id,
          });
        });
    } else {
      this.fetchMemes();
      this.setState({ categorySelected: 'General' });
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

  /* Funcion abocada a que si el estado con su categoria aun no tiene nada, no muestra nada */
  showCategoriesList2 = () => {
    if (this.state.category.length > 0) {
      return (
        <NavTop
          categories={this.state.category}
          changeView={this.changeView}
          setVistaActual={this.setVistaActual}
        />
      );
    }
  };

  /* Funcion identica a la anterior, solamente que con los memes */
  showMemeList = () => {
    if (this.state.memes.length > 0) {
      return (
        <MemeList
          memes={this.state.memes}
          categorySelected={this.state.categorySelected}
          verifyVoteAndVote={this.verifyVoteAndVote}
          changeView={this.changeView}
          user={this.state.user_id}
          addVotos={this.addVotos}
        />
      );
    } else {
      return <p className="text-center">Cargando memes...</p>;
    }
  };

  render() {
    return (
      <div className="App">
        {/*Menú top*/}
        <Router>
          {/* <NavTop
            categories={this.state.category}
            changeView={this.changeView}
            setVistaActual={this.setVistaActual}
          /> */}
          {this.showCategoriesList2()}
          <div className="container main">
            <div className="row rounded-lg main_content">
              <div className="col-lg-2 col-12 d-lg-block d-none navleft rounded-lg position-fixed">
                {this.showCategoriesList()}
              </div>
              <div className="col-lg-10 col-12 list_content rounded-lg position-relative">
                <Switch>
                  <Route path="/create">{/*Listado categoría por id*/}</Route>
                  <Route path="/meme/:id" component={Meme}>
                    <Meme
                      meme={this.state.memes} //Meme seleccionado
                      user={this.state.user_id} //Id del usuario loggeado
                      addVotos={this.addVotos} //Funcion addvotos
                      changeView={this.changeView}
                    />
                  </Route>
                  <Route path="/category/:id" component={MemeList}>
                    {/* {this.showMemeList()} */}
                  </Route>
                  <Route path="/profile">
                    <UserProfile />
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
