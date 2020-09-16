import React from 'react';
import avatar from '../img/avatar.png';

export default function UserProfile() {
  return (
    <div className="container">
      <div className="card text-dark mb-3 p-4">
        <div className="m-auto">
          <img src={avatar} className="card-img-top profilePhoto" />
        </div>

        <div className="card-body">
          <h5 className="card-title">NOMBRE USUARIO</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item item-perfil">Edad: </li>
            <li className="list-group-item item-perfil">Email: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
