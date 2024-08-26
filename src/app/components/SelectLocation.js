import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SelectLocation = ({ locations, selectedLocation, onLocationChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Location</InputLabel>
      <Select value={selectedLocation} onChange={(e) => onLocationChange(e.target.value)}>
        {locations.map((location) => (
          <MenuItem key={location.id} value={location.id}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLocation;