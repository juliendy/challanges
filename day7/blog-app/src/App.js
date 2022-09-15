import { Route, Routes } from 'react-router-dom';
import AddBlog from './features/blogs/AddBlog';
import EditBlog from './features/blogs/EditBlog';
import BlogList from './features/blogs/BlogList';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className='text-center'>
      <Navbar bg='primary' className='mb-5' variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            Blog Website
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Link to='/add-Blog'>
              <Button variant='dark'>
                
                Add Blog
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route
          path='/add-Blog'
          element={<AddBlog />}
        />
        <Route
          path='/edit-Blog/:id'
          element={<EditBlog />}
        />
      </Routes>
    </div>
  );
}

export default App;
