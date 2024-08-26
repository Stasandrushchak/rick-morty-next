import Link from 'next/link';
import { Stack, Button } from '@mui/material';

export default function Navigation() {
  return (
    <Stack spacing={2} direction="row" marginBottom={2}>
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
  );
}