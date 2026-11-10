import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimalsApp } from './animals/AnimalsApp';
import { AcademyApp } from './academy/AcademyApp';
import { StudioApp } from './studio/StudioApp';
import { EcosystemOverviewHub } from './hub/EcosystemOverviewHub';

/**
 * Handles legacy hash routing gracefully (e.g. converting `/#/animals` -> `/animals`)
 */
function HashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['animals', 'academy', 'studio'].includes(hash)) {
      window.location.hash = '';
      navigate(`/${hash}`, { replace: true });
    } else if (hash === 'hub') {
      window.location.hash = '';
      navigate('/', { replace: true });
    }
  }, [navigate, location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <HashRedirect />
      <Routes>
        <Route path="/" element={<EcosystemOverviewHub />} />
        <Route path="/animals" element={<AnimalsApp />} />
        <Route path="/academy" element={<AcademyApp />} />
        <Route path="/studio" element={<StudioApp />} />
        {/* Fallback to Hub */}
        <Route path="*" element={<EcosystemOverviewHub />} />
      </Routes>
    </BrowserRouter>
  );
}
