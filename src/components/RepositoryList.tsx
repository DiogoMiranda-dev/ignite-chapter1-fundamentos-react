import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    //acessando a api do git
    fetch('https://api.github.com/users/diogomiranda-dev/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>
      <ul>
        {repositories.map((repository,index) => (
          <RepositoryItem key={index} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
