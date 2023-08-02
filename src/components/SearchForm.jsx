import { Box, Button, Grid, TextField } from '@mui/material';

export default function SearchForm() {
  return (
    <Box
      component="form"
      sx={{
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={1}>
        <Grid xs={8} item>
          <TextField
            fullWidth
            size="small"
            type="number"
            id="outlined-basic"
            label="Outlined"
            variant="standard"
          />
        </Grid>
        <Grid xs={4} item>
          <Button fullWidth variant="contained">
            Отримати статус ТТН
          </Button>
        </Grid>{' '}
      </Grid>
    </Box>
  );
}
