import {useState, useEffect} from 'react'
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'form in unform',
  link: 'https://github.com/unform/unform',
};
export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  useEffect(()=>{

    //acessando a api do git 
    fetch('https://api.github.com/users/diogomiranda-dev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))

  },[])

  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
