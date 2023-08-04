import { Autocomplete, TextField } from '@mui/material';
import { throttle } from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSettlements } from 'redux/branches/operations';
import {
  selectSettlements,
  selectSettlementsLoading,
} from 'redux/branches/selectors';

export default function BrancheForm() {
  const [search, setSearch] = useState('');
  const settlements = useSelector(selectSettlements);
  const isLoading = useSelector(selectSettlementsLoading);
  const dispatch = useDispatch();

  const throttledDispatch = throttle(newValue => {
    dispatch(getSettlements(newValue));
  }, 500);

  const inputHandler = (event, newValue) => {
    setSearch(newValue);
    throttledDispatch(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      inputValue={search}
      onInputChange={inputHandler}
      onOpen={() => {
        dispatch(getSettlements(''));
      }}
      options={settlements}
      loading={isLoading}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Населений пункт" />}
    />
  );
}
