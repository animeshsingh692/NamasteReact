import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
    UserProvider,
    UserAuthProvider
} from './Components/UserContext';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// const App = () => {

//     // return (
//     //     <>
//     //         {/* <UserAuthProvider>
//     //             <UserProvider>
//     //                 <Body />
//     //             </UserProvider>
//     //         </UserAuthProvider> */}
//     //     </>

//     // )
// }

const About = lazy(() => import("./Components/About"))

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element:
            <UserAuthProvider>
                <UserProvider>
                    <Body />
                </UserProvider>
            </UserAuthProvider>
    },
    {
        path: '/about',
        element:
            <Suspense fallback={<h1>Loading...</h1>}>
                <About />
            </Suspense>

    }

])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={browserRouter} />);