import { ListItemButton, ListItemText } from '@mui/material';
import { createLocationLink } from 'helpers/createLocationLink';

export default function BrancheCard({ lat, long, name, city }) {
  return (
    <ListItemButton
      href={createLocationLink(lat, long)}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ p: 1 }}
    >
      <ListItemText primary={name} secondary={city} />
    </ListItemButton>
  );
}
