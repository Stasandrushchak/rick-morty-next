"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Select, MenuItem } from '@mui/material';
import CharacterCard from '../../components/CharacterCard';
import Navigation from '../../components/Navigation';

export default function Episodes() {
  const [characters, setCharacters] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const fetchCharacters = async () => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedEpisode}`);
    setCharacters(data.characters);
  };

  useEffect(() => {
    fetchCharacters();
  }, [selectedEpisode]);

  return (
    <Container>
      <Navigation />
      <Typography variant="h1" gutterBottom>Episodes</Typography>
      <Select
        value={selectedEpisode}
        onChange={(e) => setSelectedEpisode(e.target.value)}
      >
        {Array.from({ length: 51 }, (_, i) => (
          <MenuItem key={i + 1} value={i + 1}>Episode {i + 1}</MenuItem>
        ))}
      </Select>
      <Grid container spacing={3}>
        {characters.map((characterUrl) => (
          <CharacterCardWithLocation key={characterUrl} characterUrl={characterUrl} />
        ))}
      </Grid>
    </Container>
  );
}

function CharacterCardWithLocation({ characterUrl }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await axios.get(characterUrl);
      setCharacter(data);
    };

    fetchCharacter();
  }, [characterUrl]);

  if (!character) return null;

  return (
    <Grid item>
      <CharacterCard
        name={character.name}
        image={character.image}
        location={character.location.name}
      />
    </Grid>
  );
}