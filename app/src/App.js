//require("dotenv").config();
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meme from './component/Meme';
import MemeList from './component/MemeList';
import NavLeft from './component/NavLeft';
import NavTop from './component/NavTop';
import Login from './component/Login';
import AddComment from './component/AddComment';
import ListComment from './component/ListComment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: 0,
      category: 0,
      categorySelected: 'General',
      logged_in: true,
      user_id: 1,
      vistaActual: 'stateLogout',
      comments: [], //nuevo
      votosPositivos: {
        //nuevo
        users: [],
        countPositivos: 0,
      },
      votosNegativos: {
        //nuevo
        users: [],
        countNegativos: 0,
      },
    };
  }

  //nuevo
  addComment = (newComment) => {
    const { comments } = this.state;
    this.setState({ comments: [...comments, newComment] });
  };

  //nuevo
  addVotos = (votos, tipo) => {
    if (tipo === 'positivo') {
      this.setState({ users: votos.users, votosPositivos: votos.count });
    } else {
      this.setState({ users: votos.users, votosNegativos: votos.count });
    }
  };

  setVistaActual = (vista) => {
    const newState = { vistaActual: vista };
    this.setState(newState);
  };

  fetchMoreData = () => {
    /*  setTimeout(() => {
      this.setState({
        //items: this.state.items.concat(),
      });
    }, 1500); */
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
          this.setState({ memes: meme });
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

  verifyVoteAndVote = (objectVotes) => {
    if (this.state.logged_in) {
      let esta = objectVotes.filter((vote) => vote === this.state.user_id);
      if (esta.length === 1) {
        console.log('Ya ha votado aqui');
      } else {
        console.log('puede votar');
      }
    } else {
      console.log('entra en else');
      return <Login setVistaActual={this.setVistaActual} />;
    }
  };

  /* Funcion identica a la anterior, solamente que con los memes */
  showMemeList = () => {
    if (this.state.memes.length > 0) {
      return (
        <MemeList
          memes={this.state.memes}
          fetchMoreData={this.fetchMoreData}
          categorySelected={this.state.categorySelected}
          verifyVoteAndVote={this.verifyVoteAndVote}
          changeView={this.changeView}
        />
      );
    } else {
      return <p className="text-center">Cargando memes...</p>;
    }
  };

  /*   showMeme = ()=>{
    if(this.state.memes.length === 1){
      return (
        <Meme meme={this.state.memes}/>
      );
    }
  } */

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
                  <Route path="/meme/:id" component={Meme}>
                    <Meme meme={this.state.memes} />
                    {/*                     <Meme
                      votosPositivos={this.state.votosPositivos}
                      votosNegativos={this.state.votosNegativos}
                      addVotos={this.addVotos}
                      cantComentarios={this.state.comments.length}
                    />
                    <AddComment
                      addComment={this.addComment}
                      cantComentarios={this.state.comments.length}
                    />
                    <ListComment
                      comments={this.state.comments}
                      longitud={this.state.comments.length}
                    /> */}
                  </Route>
                  <Route path="/category/:id" component={MemeList}>
                    {/* {this.showMemeList()} */}
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
