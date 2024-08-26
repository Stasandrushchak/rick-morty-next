"use client";

import Link from 'next/link';
import { Container, Typography, Button, Stack } from '@mui/material';

export default function Pages() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Rick and Morty</Typography>
      <Stack spacing={2} direction="row">
        <Link href="/pages/characters" passHref>
          <Button variant="contained">Characters</Button>
        </Link>
        <Link href="/pages/episodes" passHref>
          <Button variant="contained">Episodes</Button>
        </Link>
        <Link href="/pages/locations" passHref>
          <Button variant="contained">Locations</Button>
        </Link>
      </Stack>
    </Container>
  );
}