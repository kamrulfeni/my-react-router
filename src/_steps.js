/**
 1. install react router: npm i react-router-dom
 2.create a router use createBrowserRouter
 3.add RouterProvider and pass router props 
 4.create some route
 import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
{path:'/', element : <div>This is defoult page</div>},
{path:'/home', element: <div>Home page</div>},
{path:'/about', element: <div>This is about page</div>}
  ])
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;



things you need to create a route 
1. create a link : so that you can to this route 
2.create component: to add what you will show once you go to that route 
3.add route so that react router know the component it needs to display while you are visiting to that route