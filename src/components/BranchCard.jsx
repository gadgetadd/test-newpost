import { ListItemButton, ListItemText } from '@mui/material';
import { createLocationLink } from 'helpers/createLocationLink';

export default function BrancheCard({
  lat,
  long,
  name,
  phone = 'Номер телефону відсутній',
}) {
  return (
    <ListItemButton
      href={createLocationLink(lat, long)}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ p: 0 }}
    >
      <ListItemText primary={name} secondary={phone} />
    </ListItemButton>
  );
}
