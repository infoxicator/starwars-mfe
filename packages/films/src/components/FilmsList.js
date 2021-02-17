import React from 'react';
import Container from '@material-ui/core/Container';
import { useFetchye } from 'fetchye';

export default function FilmsList() {
  const { isLoading, data } = useFetchye('https://swapi.dev/api/films/');
  return (
    <React.Fragment>
      <main>
        <Container maxWidth="md">
        {!isLoading && (
          <div>
        {data?.body?.results?.map((film) => (
          <p key={film.episode_id}>{film.title}</p>
        ))}</div>
      )}
        </Container>
      </main>
      </React.Fragment>
  );
}
