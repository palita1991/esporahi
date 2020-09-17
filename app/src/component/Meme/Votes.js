import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default class Votosnegativos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countUpVotes: this.props.usersUpvotes.length,
      countDownVotes: this.props.usersDownvotes.length,
      usersUpvotes: this.props.usersUpvotes,
      usersDownvotes: this.props.usersDownvotes,
    };
  }

  verify(type) {
    if (this.props.userIdLoggin !== 0) {
      if (type === 'positive') {
        let esta = this.state.usersUpvotes.filter(
          (vote) => vote === this.props.userIdLoggin
        );
        let arregloDownvotes = this.state.usersDownvotes.filter(
          (vote) => vote !== this.props.userIdLoggin
        );
        if (esta.length === 1) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Usted ya ha votado aqui',
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          this.setState({
            countUpVotes: this.state.countUpVotes + 1,
            countDownVotes: this.state.countDownVotes - 1,
            usersUpvotes: this.state.usersUpvotes.push(this.props.userIdLoggin),
            usersDownvotes: this.props.usersDownvotes
          });
          this.props.addVotos(
            this.state.usersUpvotes,
            this.props.memeId,
            arregloDownvotes
          );
        }
      } else {
        let esta = this.state.usersDownvotes.filter(
          (vote) => vote === this.props.userIdLoggin
        );
        let arregloUpvotes = this.state.usersUpvotes.filter(
          (vote) => vote !== this.props.userIdLoggin
        );
        if (esta.length === 1) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Usted ya ha votado aqui',
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          this.setState({
            countUpVotes: this.state.countUpVotes - 1,
            countDownVotes: this.state.countDownVotes + 1,
            usersDownvotes: this.state.usersDownvotes.push(
              this.props.userIdLoggin
            ),
            usersUpvotes: this.props.usersUpvotes
          });
          this.props.addVotos(
            arregloUpvotes,
            this.props.memeId,
            this.state.usersDownvotes
          );
        }
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Para votar debes loguearte',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }
  render() {
    return (
      <>
        <button
          className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive"
          onClick={() => {
            this.verify('positive');
          }}
        >
          <div className="bd-highlight">
            <small className="text-white font-weight-bold mr-2">
              {this.state.countUpVotes}
            </small>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#1f5dd9" />
          </div>
        </button>
        <button
          className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative"
          onClick={() => {
            this.verify('negative');
          }}
        >
          <div className="bd-highlight">
            <small className="text-white font-weight-bold mr-2">
              {this.state.countDownVotes}
            </small>
            <FontAwesomeIcon icon={faThumbsDown} size="lg" color="#1f5dd9" />
          </div>
        </button>
      </>
    );
  }
}
