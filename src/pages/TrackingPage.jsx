import { Box, Grid } from '@mui/material';
import Details from 'components/Details';
import History from 'components/History';
import SearchForm from 'components/SearchForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getStatus } from 'redux/tracking/trackOperations';

export default function TrackingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') ?? '';
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.trackNumber;
    setSearchParams({ q: value.trim().toLowerCase() });
  };

  useEffect(() => {
    dispatch(getStatus(search));
  }, [dispatch, search]);

  // const submitHandler = e => {

  //   dispatch(getStatus(trackNumber));
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} item>
          <SearchForm value={ search} onSubmit={handleSubmit} />
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
