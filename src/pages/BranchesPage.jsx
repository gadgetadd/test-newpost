import { Typography } from '@mui/material';
import BranchesList from 'components/BranchesList';
import BrancheForm from 'components/BranchForm';
import { useSelector } from 'react-redux';
import { selectCurrent } from 'redux/branches/selectors';

export default function BranchesPage() {
  const current = useSelector(selectCurrent);

  return (
    <>
      <BrancheForm />
      {current === '' ? (
        <Typography
          variant="h6"
          color="secondary"
          sx={{ textAlign: 'center', mt: 8 }}
        >
          Введіть назву населеного пункту для пошуку відділень
        </Typography>
      ) : (
        <BranchesList />
      )}
      <BranchesList />
    </>
  );
}
