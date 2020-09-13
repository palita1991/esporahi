import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

export default class Votosnegativos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.votos,
      users: this.props.users,
    };
  }

  verify() {

    if(this.props.userLoggin !== 0){
      let esta = this.state.users.filter((vote) => vote === this.props.userLoggin);
      let arregloUpvotes = this.props.usersUpvotes.filter( (vote) => vote !== this.props.userLoggin);
      if (esta.length === 1) {
        Swal.fire({
          position: 'center',
          icon: 'Information',
          title: 'Usted ya ha votado aqui',
          showConfirmButton: true,
          timer: 2500,
        });
      } else {
        this.setState({ 
          count: this.state.count + 1, 
          users: this.state.users.push(this.props.userLoggin) });
        this.props.addVotos(arregloUpvotes, this.props.memeId, this.state.users);
      }
    }else{
      console.log('No esta logueado');
    }
  }

  render() {
    return (
      <>
        <button
          className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative"
          onClick={this.verify.bind(this)}
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
