import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default function Votes(props) {
  const [countUpVotes, setcountUpVotes] = useState(0);
  const [countDownVotes, setcountDownVotes] = useState(0);
  const [usersUpvotes, setusersUpvotes] = useState([]);
  const [usersDownvotes, setusersDownvotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/memes/${props.memeId}`)
      .then((res) => res.json())
      .then((data) => {
        setcountUpVotes(data[0].upvotes.length);
        setcountDownVotes(data[0].downvotes.length);
        setusersUpvotes(data[0].upvotes.user_id);
        setusersDownvotes(data[0].downvotes.user_id);
      });
  }, [countDownVotes, countUpVotes]);

  function verify(type) {
    if (props.userIdLoggin !== 0) {
      if (type === 'positive') {
        let esta = usersUpvotes.filter((vote) => vote === props.userIdLoggin);
        let arregloDownvotes = usersDownvotes.filter(
          (vote) => vote !== props.userIdLoggin
        );
        if (esta.length === 1) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: '¡Ya votaste!',
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          setcountUpVotes(countUpVotes + 1);
          setcountDownVotes(countDownVotes - 1);
          setusersUpvotes(usersUpvotes.push(props.userIdLoggin));
          setusersDownvotes(usersDownvotes);

          props.addVotos(usersUpvotes, props.memeId, arregloDownvotes);
        }
      } else {
        let esta = usersDownvotes.filter((vote) => vote === props.userIdLoggin);

        let arregloUpvotes = usersUpvotes.filter(
          (vote) => vote !== props.userIdLoggin
        );

        if (esta.length === 1) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: '¡Ya votaste!',
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          setcountUpVotes(countUpVotes - 1);
          setcountDownVotes(countDownVotes + 1);
          setusersUpvotes(usersUpvotes);
          setusersDownvotes(usersDownvotes.push(props.userIdLoggin));

          props.addVotos(arregloUpvotes, props.memeId, usersDownvotes);
        }
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: '¡No estas logueado!',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  return (
    <>
      <button
        className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive"
        onClick={() => {
          verify('positive');
        }}
      >
        <div className="bd-highlight">
          <small className="text-white font-weight-bold mr-2">
            {usersUpvotes.length}
          </small>
          <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#1f5dd9" />
        </div>
      </button>
      <button
        className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative"
        onClick={() => {
          verify('negative');
        }}
      >
        <div className="bd-highlight">
          <small className="text-white font-weight-bold mr-2">
            {usersDownvotes.length}
          </small>
          <FontAwesomeIcon icon={faThumbsDown} size="lg" color="#1f5dd9" />
        </div>
      </button>
    </>
  );
}
