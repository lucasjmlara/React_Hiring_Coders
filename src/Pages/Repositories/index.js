import React, { useEffect, useState } from 'react';
import * as S from './styled';

function Repos(props) {
  const [ repos, setRepos] = useState([]);

  useEffect(() => {
    let reposName = localStorage.getItem('repositoriesName')
    reposName = JSON.parse(reposName);
    setRepos(reposName);
    // localStorage.clear();
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
    </S.Container>
  );
}

export default Repos;