import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Meme from "./component/Meme";
import MemeList from "./component/MemeList";
import NavLeft from "./component/NavLeft";
import NavTop from "./component/NavTop";
import AddComment from "./component/AddComment";
import ListComment from "./component/ListComment";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      votosPositivos: {
        users: [],
        countPositivos: 0,
      },
      votosNegativos: {
        users: [],
        countNegativos: 0,
      },
    };
  }

  addComment = (newComment) => {
    const { comments } = this.state;
    this.setState({ comments: [...comments, newComment] });
  };

  addVotos = (votos, tipo) => {
    if (tipo === "positivo") {
      this.setState({ users: votos.users, votosPositivos: votos.count });
    } else {
      this.setState({ users: votos.users, votosNegativos: votos.count });
    }
  };

  render() {
    return (
      <div className="App">
        {/*Menú top*/}
        <Router>
          <NavTop />
          <div className="container main">
            <div className="row rounded-lg main_content">
              <div className="col-lg-2 col-12 d-lg-block d-none navleft rounded-lg position-fixed">
                <NavLeft />
              </div>
              <div className="col-lg-10 col-12 list_content rounded-lg position-relative">
                <Switch>
                  <Route path="/create">{/*Listado categoría por id */}</Route>
                  <Route path="/meme/:id" component={MemeList}>
                    <Meme
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
                    />
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
