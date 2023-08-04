import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getStatus } from 'redux/tracking/operations';
import { selectIsTrackLoading } from 'redux/tracking/selectors';
import { clearCurrent } from 'redux/tracking/slice';
import { string } from 'yup';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') ?? '';
  const [trackNumber, setTrackNumber] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTrackLoading);
  const [isValid, setValid] = useState(true);

  const trackNumberSchema = string().matches(/^\d{14}$/);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.trackNumber;
    if (!isValid) {
      Notify.warning('Введено невірний формат ТТН', {
        position: 'left-bottom',
      });
      return;
    }
    setSearchParams({ q: value.trim().toLowerCase() });
  };

  useEffect(() => {
    if (search === '') {
      setTrackNumber('');
      dispatch(clearCurrent());
    } else {
      setTrackNumber(search);
      dispatch(getStatus(search));
    }
  }, [dispatch, search]);

  const inputHandler = e => {
    const { value } = e.target;
    trackNumberSchema
      .validate(value)
      .then(() => setValid(true))
      .catch(() => setValid(false));
    setTrackNumber(value);
  };

  return (
    <Box
      component="form"
      sx={{
        mt: 8,
        mb: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={1}>
        <Grid xs={12} sm={8} item>
          <TextField
            error={!isValid}
            color="secondary"
            fullWidth
            size="small"
            id="trackNumber"
            label="Введіть номер ТТН, що містить 14 цифр"
            variant="standard"
            title="Номер ТТН має містити 14 цифр"
            value={trackNumber}
            onChange={inputHandler}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Отримати статус ТТН'
            )}
          </Button>
        </Grid>{' '}
      </Grid>
    </Box>
  );
}
