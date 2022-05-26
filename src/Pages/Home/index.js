import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [usuario, setUsuario] = useState('');
  let navigate = useNavigate();

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => {
      const repositories = res.data;
      const reposName = [];

      repositories.map((repository => {
        reposName.push(repository.name)
      }))
      
      localStorage.setItem('repositoriesName', JSON.stringify(reposName));
      navigate('/repos')
    });
  }

  return (
    <S.Container>
      <S.Input placeholder='Usuário' className='usuarioInput' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;