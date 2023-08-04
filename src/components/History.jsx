import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectHistory } from 'redux/tracking/selectors';
import { clearHistory } from 'redux/tracking/slice';

export default function History() {
  const history = useSelector(selectHistory);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:670px)');

  const clickHandler = num => {
    setSearchParams({ q: num });
  };

  return (
    <Box
      sx={{
        p: 2,
        borderLeft: matches ? 1 : 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Історія</Typography>

      {history.length > 0 ? (
        <>
          <List dense={true}>
            {history.map((item, index) => (
              <ListItemButton onClick={() => clickHandler(item)} key={index}>
                {item}
              </ListItemButton>
            ))}
          </List>
          <Button onClick={() => dispatch(clearHistory())}>
            Очистити історію
          </Button>
        </>
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Записи відсутні
        </Typography>
      )}
    </Box>
  );
}
