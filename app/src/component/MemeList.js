import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

export default function Meme() {
  let { id } = useParams();
  return (
    <div className="container my-2 h-auto">
      <h1 className="text-center" id="title_category">
        {id}
      </h1>

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${1}`} className="link" key={1}>
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

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${2}`} className="link" key={2}>
          <img
            src={
              "https://i1.wp.com/www.contrareplica.mx/uploads/2020/06/23/normal/1c47add0fa27a31fb5816d93e194dc20.jpg"
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
                      10
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
                      4
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

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${3}`} className="link" key={3}>
          <img
            src={
              "https://elcomercio.pe/resizer/onGlFgzLs1Rg4NYmfAK1W3b49G0=/1200x900/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/FPWQXQRRKNA7HKHBAF2MN2DC5E.jpg"
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
                      6
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
                      5
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

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${4}`} className="link" key={4}>
          <img
            src={
              "https://images7.memedroid.com/images/UPLOADED815/5f4ea0fa4d7e2.jpeg"
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
                      4
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
                      4
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
            <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0 img-meme">
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

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${5}`} className="link" key={5}>
          <img
            src={
              "https://images7.memedroid.com/images/UPLOADED888/5f4de47fa4b23.jpeg"
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
                      10
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
                      3
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

      <div className="card shadow rounded-lg my-3">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/${id}`} className="link" key={id}>
          <img
            src={
              "https://images7.memedroid.com/images/UPLOADED901/5f445aa125595.jpeg"
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
                      8
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
                      1
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
    </div>
  );
}
