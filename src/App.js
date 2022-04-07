import { Routes, Route, Navigate } from 'react-router-dom';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <>
          <Route path="/" element={<Quotes />} />
          <Route path="/*" element={<Navigate to="/" />} />

        </>
      </Routes>
    </div>
  );
}

export default App;
