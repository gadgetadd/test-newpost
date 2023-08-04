import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedHeader from 'shared/SharedHeader';

const TrackingPage = lazy(() => import('pages/TrackingPage'));
const PostOfficePage = lazy(() => import('pages/BranchesPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        {/* <Route index element={<TrackingPage />}></Route> */}
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="offices" element={<PostOfficePage />}></Route>
        <Route path="*" element={<Navigate to="/tracking" replace />}></Route>
      </Route>
    </Routes>
  );
}
