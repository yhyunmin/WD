import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import { Provider } from 'jotai';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { WeatherFallback } from '@/components/error/WeatherError';
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ErrorBoundary fallback={WeatherFallback}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
