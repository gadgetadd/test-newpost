import { Autocomplete, Box, TextField } from '@mui/material';
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getSettlements, getWarehouses } from 'redux/branches/operations';
import {
  selectCurrent,
  selectSettlements,
  selectSettlementsLoading,
} from 'redux/branches/selectors';
import { setCurrent } from 'redux/branches/slice';

export default function BranchForm() {
  const current = useSelector(selectCurrent);
  const settlements = useSelector(selectSettlements);
  const isLoading = useSelector(selectSettlementsLoading);
  const dispatch = useDispatch();

  const throttledDispatch = throttle(newValue => {
    dispatch(getSettlements(newValue));
  }, 500);

  const submitHandler = (_, newValue) => {
    if (newValue) dispatch(getWarehouses(newValue));
  };

  const inputHandler = (_, newValue) => {
    dispatch(setCurrent(newValue));
    throttledDispatch(newValue);
  };

  return (
    <Box
      sx={{
        mt: 8,
        mb: 4,
      }}
    >
      <Autocomplete
        disablePortal
        id="branches"
        onChange={submitHandler}
        inputValue={current}
        onInputChange={inputHandler}
        onOpen={() => {
          dispatch(getSettlements(''));
        }}
        options={settlements}
        loading={isLoading}
        renderInput={params => (
          <TextField
            {...params}
            label="Населений пункт"
            variant="standard"
            color="secondary"
          />
        )}
      />
    </Box>
  );
}
