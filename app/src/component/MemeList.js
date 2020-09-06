import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
export default class MemeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array.from({ length: 10 }),
    };
  }
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 10 more records in 1.5 secs
    setTimeout(() => {
      console.log("entro");
      console.log(this.state.items.length);
      this.setState({
        items: this.state.items.concat(Array.from({ length: 10 })),
      });
    }, 1500);
  };

  render() {
    return (
      <div className="container my-2 h-auto">
        <h1 className="text-center" id="title_category">
          Listado
        </h1>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div className="card shadow rounded-lg my-3">
              <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
                Titulo
              </h5>
              <Link to={`/meme/${1}`} className="link">
                <img
                  src={
                    "https://i1.wp.com/www.materiagris.es/wp-content/uploads/2018/10/memes-comunicacion.jpg?resize=700%2C321&ssl=1"
                  }
                  className="img-fluid border border-left-0 border-right-0 border-dark w-100 img-meme"
                  alt="imagen-meme"
                />
              </Link>
              <div className="card-footer footer_meme">
                <div className="row">
                  <div className="col-lg-6 col-4 d-flex justify-content-start align-items-center">
                    <div className="d-flex flex-row bd-highlight">
                      <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive">
                        <div className="bd-highlight">
                          <small className="text-white font-weight-bold mr-2">
                            13
                          </small>
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            size="lg"
                            color="white"
                          />
                        </div>
                      </button>
                      <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative">
                        <div className="bd-highlight">
                          <small className="text-white font-weight-bold mr-2">
                            10
                          </small>
                          <FontAwesomeIcon
                            icon={faThumbsDown}
                            size="lg"
                            color="#1f5dd9"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
                    <div className="rounded p-lg-2 p-1 comment_meme">
                      <small className="mr-1 text-dark font-weight-bold">
                        Comentarios
                      </small>
                      <span className="badge badge-dark">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
