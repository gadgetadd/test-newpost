import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBranches } from 'redux/branches/selectors';
import BranchCard from './BranchCard';

export default function BranchesList() {
  const branches = useSelector(selectBranches);
  return (
    <List>
      {branches.map(branch => (
        <BranchCard
          key={branch.Ref}
          name={branch.Description}
          phone={branch.Phone}
          lat={branch.Latitude}
          long={branch.Longitude}
        />
      ))}
    </List>
  );
}
