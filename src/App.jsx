import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedHeader from 'shared/SharedHeader';

const TrackingPage = lazy(() => import('pages/TrackingPage'));
const BranchesPage = lazy(() => import('pages/BranchesPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<Navigate to="/tracking" replace />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="branches" element={<BranchesPage />}></Route>
        <Route path="*" element={<Navigate to="/tracking" replace />}></Route>
      </Route>
    </Routes>
  );
}
