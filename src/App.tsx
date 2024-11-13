import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
