import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useUsers } from '../../contexts/users';

import Modal from '../../components/Modal';
import Card from '../../components/Card';
import Header from '../../components/Header';
import './styles.scss';

function Home() {
const { listUsers, setListUsers, user, setUser, isModalVisible } = useUsers();
const [ search, setSearch ] = useState('');
const navigate = useNavigate();


const listUsersFiltered = listUsers.filter((filtered) => (filtered.name).toLocaleLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div className='home__content'>
      <Header text={"Controle de Usuários"}/>

      {isModalVisible ? <Modal toEdit={user}/>: null}
      <div className="home__actions">
        <button onClick={() => navigate('/create')}>Cadastrar</button>
        <input  type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filtrar Usuários"/>
      </div>
      <div className="home__table">
        
        <div className="home__info">
          {listUsers ? 
          listUsersFiltered.map((eachUser) => (
            <Card key={eachUser.id} eachUser={eachUser} />
          ))
          : <p>Carregando</p>}
          </div>
      </div>
    </div>
  );
}

export default Home;