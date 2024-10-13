import { BsTelegram } from 'react-icons/bs';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Flip from './pages/Flip';
// import Navbar from './components/Navbar';

// #FFCA56 yellow

// #2591FE blue

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        // errorElement: <ErrorPage />,
      },
      {
        path: '/flip',
        element: <Flip />,
        // errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
