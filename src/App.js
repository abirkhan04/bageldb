import { ThemeProvider, createTheme } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppSpinner } from './components/shared/app-spinner';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const Features = lazy(() => import('./components/pages/Fetures'));
const BagelConsole = lazy(() => import('./components/pages/BagelConsole'));
const JoinBeta = lazy(() => import('./components/pages/JoinBeta'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3B02E'
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000',
    },
  },
});


function App() {
  return (<ThemeProvider theme={theme}>
    <BrowserRouter><Suspense fallback={<AppSpinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="features" element={<Features />}></Route>
        <Route path="bagel-console" element={<BagelConsole />}></Route>
        <Route path="join_beta" element={<JoinBeta />}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
