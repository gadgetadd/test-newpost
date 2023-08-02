import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStatus } from 'redux/tracking/trackOperations';
export default function SearchForm() {
  const [trackNumber, setTrackNumber] = useState('');
  const dispatch = useDispatch();

  const inputHandler = e => {
    const { value } = e.target;
    setTrackNumber(value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(getStatus(trackNumber));
  };

  return (
    <Box
      component="form"
      sx={{
        m: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Grid container spacing={1}>
        <Grid xs={8} item>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
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
