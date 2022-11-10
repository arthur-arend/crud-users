import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useUsers } from '../../contexts/users';
import './styles.scss';

function Modal() {
  const { setIsModalVisible, user, setUser, setRefresh, refresh } = useUsers();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${user.id}`).then((response) => {
      setUser(response.data);
    })
  }, [])

  const closeModal = () => {
    setIsModalVisible(false);
    setUser('');
  }

  const resolveReq = () => {
    setRefresh(!refresh);
    closeModal();
  }

  const updateUser = () => {
    if ( user.id && user.name && user.email && user.birthdate && user.password ) {
      axios.put(`http://localhost:3000/users/${user.id}`, user).then((response) => {
        alert(`Usuário ${response.data.name} editado`)
        resolveReq();
      })
    } else {
      alert("Preencha todos os campos")
    }
  }

  return (
    <div className='modal__background'>
      <div className='modal__content'>
      <div className="modal__actions">
        <button onClick={() => closeModal()}>X</button>
      </div>
      {user ? 
        <div className="modal__info">
          <input placeholder="Nome" type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
          <label>Data de Nascimento</label>
          <input type="date" id="birthday" name="birthday" value={user.birthdate} onChange={(e) => setUser({...user, birthdate: e.target.value})}/>
          <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value})}/>
          <button onClick={() => updateUser()}>Salvar</button>
          </div> :  'Vazio'}
          </div>   
    </div>
  );
}

export default Modal;