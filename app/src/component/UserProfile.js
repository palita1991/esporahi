import React, { useState, useEffect } from 'react';
import avatar from '../img/avatar.png';

export default function UserProfile(props) {
  const { user_id } = props;
  const [user, setUser] = useState(user_id);

  useEffect(() => {
    fetch(`http://localhost:8080/usuario/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
        console.log(data[0]);
      });
  }, [user_id]);

  return (
    <div className="container">
      <div className="card text-dark mb-3 p-4" id="cardProfile">
        <div className="m-auto">
          <img
            src={avatar}
            className="card-img-top profilePhoto"
            alt="perfil"
          />
        </div>

        <div className="card-body">
          <h4 className="card-title">{user.name} {user.lastname}</h4>

          <ul className="list-group list-group-flush">
            <li className="list-group-item item-perfil">
              Fecha de Nacimiento: {user.dob}
            </li>
            <li className="list-group-item item-perfil">Email: {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
