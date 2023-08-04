import { Box, Grid } from '@mui/material';
import Details from 'components/Details';
import Error from 'components/Error';
import History from 'components/History';
import SearchForm from 'components/SearchForm';
import { useSelector } from 'react-redux';
import { selectError, selectTrackingData } from 'redux/selectors';

export default function TrackingPage() {
  const error = useSelector(selectError);
  const data = useSelector(selectTrackingData);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} item>
          <SearchForm />
        </Grid>
        <Grid xs={8} item>
          {error && <Error error={error} />}
          {data && <Details data={data} />}
        </Grid>
        <Grid xs={4} item>
          <History />
        </Grid>
      </Grid>
    </Box>
  );
}
