import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

function Home(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => {
      const repositories = res.data;
      const reposName = [];

      repositories.map((repository => {
        reposName.push(repository.name)
      }))
      
      localStorage.setItem('repositoriesName', JSON.stringify(reposName));
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