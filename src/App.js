import { lazy, Suspense } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AppSpinner } from './components/shared/app-spinner';

const TopNav = lazy(()=> import('./components/shared/TopNav'));
const LandingPage = lazy(()=> import('./components/pages/LandingPage'));
const Features = lazy(()=> import('./components/pages/Fetures'));

function App() {
  return (
    <BrowserRouter><Suspense fallback={<AppSpinner/>}>
       <TopNav/>
             <Routes>
                  <Route path="/" element={<LandingPage />}></Route>
                  <Route path="features" element={<Features/>}></Route>
            </Routes>
       </Suspense>
    </BrowserRouter>
  );
}

export default App;
