import { Button, Stack, Typography } from '@mui/material';

export default function CharacterFilters({
  status,
  species,
  gender,
  onStatusChange,
  onSpeciesChange,
  onGenderChange,
}) {
  const statuses = ['alive', 'dead', 'unknown'];
  const speciesList = [
    'human', 'alien', 'humanoid', 'poopybutthole', 'mythological',
    'unknown', 'animal', 'disease', 'robot', 'cronenberg', 'planet'
  ];
  const genders = ['female', 'male', 'genderless', 'unknown'];

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Status</Typography>
      {statuses.map((s) => (
        <Button
          key={s}
          variant={status === s ? 'contained' : 'outlined'}
          onClick={() => onStatusChange(s)}
        >
          {s}
        </Button>
      ))}
      
      <Typography variant="h6">Species</Typography>
      {speciesList.map((sp) => (
        <Button
          key={sp}
          variant={species === sp ? 'contained' : 'outlined'}
          onClick={() => onSpeciesChange(sp)}
        >
          {sp}
        </Button>
      ))}

      <Typography variant="h6">Gender</Typography>
      {genders.map((g) => (
        <Button
          key={g}
          variant={gender === g ? 'contained' : 'outlined'}
          onClick={() => onGenderChange(g)}
        >
          {g}
        </Button>
      ))}
    </Stack>
  );
}