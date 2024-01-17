import './index.scss'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import PostsPage from 'pages/PostsPage';
import PostDetailsPage from 'pages/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:postId" element={<PostDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
