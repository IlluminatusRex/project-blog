import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SinglePost from './components/pages/SinglePost';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
    <Container className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  </div>
  );
}

export default App;
