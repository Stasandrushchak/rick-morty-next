"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Pagination, Stack, Button, Typography, Box } from '@mui/material';
import CharacterCard from '../../components/CharacterCard';
import Navigation from '../../components/Navigation';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: '',
  });

  const fetchCharacters = async (page, filters) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`, {
      params: {
        page,
        ...filters,
      },
    });

    const characterData = data.results.map((character) => ({
      id: character.id,
      name: character.name,
      image: character.image,
      location: character.location.name,
    }));

    setCharacters(characterData);
    setTotalPages(data.info.pages);
  };

  useEffect(() => {
    fetchCharacters(page, filters);
  }, [page, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setPage(1);
  };

  return (
    <Container>
      <Navigation />
      <Typography variant="h1" gutterBottom>Characters</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6">Status</Typography>
            {['alive', 'dead', 'unknown'].map((status) => (
              <Button
                key={status}
                variant={filters.status === status ? 'contained' : 'outlined'}
                onClick={() => handleFilterChange('status', status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
            <Typography variant="h6">Species</Typography>
            {['human', 'alien', 'humanoid', 'poopybutthole', 'mythological', 'unknown', 'animal', 'disease', 'robot', 'cronenberg', 'planet'].map((species) => (
              <Button
                key={species}
                variant={filters.species === species ? 'contained' : 'outlined'}
                onClick={() => handleFilterChange('species', species)}
              >
                {species.charAt(0).toUpperCase() + species.slice(1)}
              </Button>
            ))}
            <Typography variant="h6">Gender</Typography>
            {['female', 'male', 'genderless', 'unknown'].map((gender) => (
              <Button
                key={gender}
                variant={filters.gender === gender ? 'contained' : 'outlined'}
                onClick={() => handleFilterChange('gender', gender)}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container sx={{ gap: '40px' }}>
            {characters.map((character) => (
              <Grid item key={character.id} xs={12} sm={4} md={3} sx={{ gap: '24px' }}>
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  location={character.location}
                />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} sx={{ marginTop: 3, alignItems: 'center' }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              shape="rectangular"
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}