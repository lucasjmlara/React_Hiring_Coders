import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from "react-router-dom";

function Repos(props) {
  const [ repos, setRepos] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let reposName = localStorage.getItem('repositoriesName')
    if(reposName != null) {
      reposName = JSON.parse(reposName);
      setRepos(reposName);
      // localStorage.clear();
    } else {
      navigate('/');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { repos.map(repository => {
          return (<S.ListItem>Repositório: { repository }</S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  );
}

export default Repos;