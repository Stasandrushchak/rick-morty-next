import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SelectEpisode = ({ episodes, selectedEpisode, onEpisodeChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Episode</InputLabel>
      <Select value={selectedEpisode} onChange={(e) => onEpisodeChange(e.target.value)}>
        {episodes.map((episode) => (
          <MenuItem key={episode.id} value={episode.id}>
            {episode.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectEpisode;