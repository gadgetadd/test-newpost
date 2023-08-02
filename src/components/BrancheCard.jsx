import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { createLocationLink } from 'helpers/createLocationLink';

export default function BrancheCard() {
  return (
    <ListItem>
      <ListItemButton
        href={createLocationLink(49.796065, 29.47921)}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ p: 0 }}
      >
        <ListItemText
          primary={`Пункт приймання-видачі (до 30 кг.): вул. Квітнева, 15А`}
          secondary={`${380800500609}`}
        />
      </ListItemButton>
    </ListItem>
  );
}
