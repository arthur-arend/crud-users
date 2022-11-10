import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useUsers } from '../../contexts/users';
import './styles.scss';

function Modal() {
  const { setIsModalVisible, user, setUser } = useUsers();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${user.id}`).then((response) => {
      setUser(response.data);
    })
  }, [])

  const closeModal = () => {
    setIsModalVisible(false);
    setUser('');
  }

  return (
    <div className='modal__content'>
      <section>
      <button onClick={() => closeModal()}>Fechar</button>
      {user ? 
      <div className="content">
       <input placeholder="Nome" type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
        <input type="date" id="birthday" name="birthday" value={user.birthdate} onChange={(e) => setUser({...user, birthdate: e.target.value})}/>
        <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value})}/>
      </div> :  'Vazio'}
      </section>   
    </div>
  );
}

export default Modal;