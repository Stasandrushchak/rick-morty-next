"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Stack, Box, Pagination, Typography } from '@mui/material';
import CharacterFilters from '../../components/CharacterFilters';
import CharacterCard from '../../components/CharacterCard';
import Navigation from '../../components/Navigation'; 

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetchCharacters = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page,
        status,
        species,
        gender,
        name: search,
      },
    });
    setCharacters(data.results);
    setPageCount(data.info.pages);
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, status, species, gender, search]);

  return (
    <Container>
      <Navigation /> 
      <Typography variant="h1" gutterBottom>Characters</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <CharacterFilters
            status={status}
            species={species}
            gender={gender}
            onStatusChange={setStatus}
            onSpeciesChange={setSpecies}
            onGenderChange={setGender}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={3}>
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} key={character.id}>
                <CharacterCard
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                />
              </Grid>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="center">
            <Pagination
              count={pageCount}
              page={page}
              onChange={(e, value) => setPage(value)}
              shape="rectangular"  // Makes the pagination buttons rectangular
              color="primary"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}