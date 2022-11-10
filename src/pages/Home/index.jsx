import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { useUsers } from '../../contexts/users';

import Modal from '../../components/Modal';
import Card from '../../components/Card';
import Header from '../../components/Header';
import './styles.scss';

function Home() {
const { listUsers, setListUsers, user, setUser, isModalVisible, currentPage, setCurrentPage } = useUsers();
const [ search, setSearch ] = useState('');
const navigate = useNavigate();

useEffect(() => {
  const intersectionObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  })
  intersectionObserver.observe(document.querySelector('#sentinela'));
  return () => intersectionObserver.disconnect();
}, []);


const listUsersFiltered = listUsers.filter((filtered) => (filtered.name).toLocaleLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div className='home__content'>
      <Header text={"Controle de Usuários"}/>

      {isModalVisible ? <Modal toEdit={user}/>: null}
      <div className="home__actions">
        <button onClick={() => navigate('/create')}>Cadastrar Novos Usuários</button>
        <input  type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filtrar Usuários"/>
      </div>
      <div className="home__table">       
        {listUsers ? 
        listUsersFiltered.map((eachUser) => (
          <Card key={eachUser.id} eachUser={eachUser} />
        ))
        : <p>Carregando</p>}
        <li id="sentinela" />
      </div>
    </div>
  );
}

export default Home;