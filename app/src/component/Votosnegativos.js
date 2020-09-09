import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default class Votosnegativos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.votos.countNegativos,
      users: this.props.votos.users,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });

    const votosNegativos = {
      count: this.state.count,
      users: this.state.users,
    };
    this.props.addVotos(votosNegativos, "negativo");
  }

  render() {
    return (
      <>
        <button
          className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative"
          onClick={this.increment.bind(this)}
        >
          <div className="bd-highlight">
            <small className="text-white font-weight-bold mr-2">
              {this.state.count}
            </small>
            <FontAwesomeIcon icon={faThumbsDown} size="lg" color="#1f5dd9" />
          </div>
        </button>
      </>
    );
  }
}
