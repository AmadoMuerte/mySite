import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './routes/Root';
import ErrorPage from './Error-page';

import './index.css';
import About from './routes/about/About';
import Projects from './routes/projects/Projects';
import Skills from './routes/skills/Skills.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import todoImage from './images/projects-image/todo-react.png'
import loomStudio from './images/projects-image/loom_studio.jpg'
import socialNetwork from './images/projects-image/social-network.png'


let projects = [
  {
    image: socialNetwork,
    name: 'Social Network',
    code: 'https://github.com/AmadoMuerte/social-network',
    description: 'A project I did on a course, the information was outdated but it was very helpful for me!',
    technologies: ['React', 'Redux', 'React-redux', 'Axios', 'react-router-dom']
  },
  {
    image: todoImage,
    name: 'Todo App',
    link: 'https://amado-todo.netlify.app/',
    code: 'https://github.com/AmadoMuerte/todo-react',
    description: 'This is my first project for React, i added sounds to it and implemented interaction through a modal window',
    technologies: ['React', 'Css', 'Html']
  },
  {
    image: loomStudio,
    name: 'Loom-Studio',
    code: 'https://github.com/AmadoMuerte/Education/tree/main/Loom_studio',
    description: 'One of my first projects using scss',
    technologies: ['Scss', 'Html']
  },
  

]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About/>,
      },
      {
        path: '/skills',
        element: <Skills/>,
      },
      {
        path: '/projects',
        element: <Projects projects={projects}/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
