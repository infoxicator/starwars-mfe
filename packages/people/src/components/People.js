import React from 'react';
import Container from '@material-ui/core/Container';
import { useFetchye } from 'fetchye';

export default function People() {
  const { isLoading, data } = useFetchye('https://swapi.dev/api/people/');
  const { isLoading: filmsLoading, data: filmsData } = useFetchye('https://swapi.dev/api/films/');
  return (
    <React.Fragment>
      <main>
        <Container maxWidth="md">
        {!isLoading && (
          <div>
        {data?.body?.results?.map((people) => (
          <p key={people.name}>{people.name}</p>
        ))}</div>
      )}
      {!filmsLoading && (
          <div>
        {filmsData?.body?.results?.map((film) => (
          <p key={film.episode_id}>{film.title}</p>
        ))}</div>
      )}
        </Container>
      </main>
      </React.Fragment>
  );
}
