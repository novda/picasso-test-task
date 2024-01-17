import './index.scss'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Posts from 'pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
