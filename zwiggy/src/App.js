import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    UserProvider,
    UserAuthProvider
} from './Components/UserContext';
import Body from './Components/Body';
import ErrorPage from './Components/ErrorPage';
import About from './Components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
    return (
        <UserAuthProvider>
            <UserProvider>
                <Body />
            </UserProvider>
        </UserAuthProvider>
    )
}

const About = lazy(() => import("./Components/About"))

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element:
            <Suspense fallback={<h1>Loading...</h1>}>
                <About />
            </Suspense>
        ,
        errorElement: <ErrorPage />
    }

])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={browserRouter} />);