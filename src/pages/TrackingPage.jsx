import { Box, Grid } from '@mui/material';

import Details from 'components/Details';
import History from 'components/History';
import SearchForm from 'components/SearchForm';

export default function TrackingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} item>
        <SearchForm />
        </Grid>
        <Grid xs={8} item>
          <Details />
        </Grid>
        <Grid xs={4} item>
          <History />
        </Grid>
      </Grid>
    </Box>
  );
}
