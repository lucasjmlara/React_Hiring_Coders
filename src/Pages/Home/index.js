import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

function Home(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}`).then(res => console.log(res.data));
  }
  return (
    <S.Container>
      <S.Input placeholder='Usuário' className='usuarioInput' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;