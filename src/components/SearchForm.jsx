import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

export default function SearchForm({ onSubmit, value }) {
  const [trackNumber, setTrackNumber] = useState(value);

  const inputHandler = e => {
    const { value } = e.target;
    setTrackNumber(value);
  };

  return (
    <Box
      component="form"
      sx={{
        m: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={1}>
        <Grid xs={8} item>
          <TextField
            fullWidth
            size="small"
            id="trackNumber"
            label="Outlined"
            variant="standard"
            value={trackNumber}
            onChange={inputHandler}
          />
        </Grid>
        <Grid xs={4} item>
          <Button fullWidth type="submit" variant="contained">
            Отримати статус ТТН
          </Button>
        </Grid>{' '}
      </Grid>
    </Box>
  );
}
