import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './styles.scss';
import Header from '../../components/Header';

function Create() {
const [user, setUser] = useState({
  id: '',
  name: '',
  birthdate: '',
  email: '',
  password: '',
});
const navigate = useNavigate();

useEffect(() =>{
  const timeInMs = Date.now();
  setUser({...user ,
    id: timeInMs
  })
}, [])


const  createUser = () => {
  if ( user.id && user.name && user.email && user.birthdate && user.password ) {
    axios.post('http://localhost:3000/users/', user).then((response) => {
      alert(`Usuário ${response.data.name} cadastrado`)
      navigate(-1)
    })
  } else {
    alert("Preencha todos os campos")
  }
}

  return (
    <div className='create__content'>
      <Header text={'Cadastro'}/>
      <div className='create__actions'>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
      <div className="create__info">
        <input placeholder="Nome" type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Data de Nascimento</label>
        <input placeholder="Data de Nascimento" type="date" id="birthday" name="birthday" min="1900-01-01" max="2022-12-31" onChange={(e) => setUser({...user, birthdate: e.target.value})}/>
        <input placeholder="E-mail" type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <input placeholder="Senha" type="password" onChange={(e) => setUser({ ...user, password: e.target.value})}/>
        <button onClick={() => createUser()}>Salvar</button>
      </div>
      
    </div>
  );
}

export default Create;