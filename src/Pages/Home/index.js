import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from "react-router-dom";

function Home(props) {
  let navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(res => {
      const repositories = res.data;
      const reposName = [];

      repositories.map((repository => {
        reposName.push(repository.name)
      }))
      
      localStorage.setItem('repositoriesName', JSON.stringify(reposName));
      setErro(false);
      navigate('/repos');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.Conteiner>
      <S.Content>
        <S.Input placeholder='Usuário' className='usuarioInput' value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente Novamente!</S.ErrorMsg> : ''}
    </S.Conteiner>
  );
}

export default Home;