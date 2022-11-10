import React from 'react';
import axios from 'axios';
import './styles.scss';

import { useUsers } from '../../contexts/users';

function Card(props) {

  const { eachUser } = props;
  const { listUsers, setListUsers, user, setUser, isModalVisible, setIsModalVisible } = useUsers();

  const handleDelete = (user) => {
    axios.delete(`http://localhost:3000/users/${user.id}`)
  }
  
  const handleEdit = (user) => {
    setUser(user);
    setIsModalVisible(true);
  }

  return (
    <div className='card__content'>
      <div className="content__info">
        <p>Nome: {eachUser.name}</p>
        <p>Data de nascimento {eachUser.birthdate}</p>
        <p>E-mail {eachUser.email}</p>
        <p>Matrícula: {eachUser.id}</p>
      </div>
      <div className="content__action">
        <button onClick={() => handleEdit(eachUser)} className="content__edit">Editar</button>
        <button onClick={() => handleDelete(eachUser)} className="content__delete">Deletar</button>
      </div>
    </div>
  );
}

export default Card;