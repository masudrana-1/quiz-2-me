
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
          children: [
          ]
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])



  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
