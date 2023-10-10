import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import TestClass from './TestClass';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
    const [value, setValue] = useState('')
    const [query, setQuery] = useState('')
    const [ddList, setDDList] = useState(['flipkart', 'amazon', 'geeksforgeeks', 'react', 'javascript', 'amaze', 'amapo', 'amaaji'])
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        //debounce api
        const interval = setTimeout(() => {
            setQuery(value);
        }, 500);
        return () => {
            clearTimeout(interval);
        }
    }, [value])

    useEffect(() => {
        // api
        if (query.length > 0) {
            const tempDDList = ddList.filter(
                (dd) => dd.toLowerCase().includes(query.toLowerCase())
            )
            tempDDList.sort()
            // console.log(tempDDList.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)))
            setDisplayList(tempDDList);
        }
    }, [query])


    return (
        <div>
            <Link to='/about'>
                About
            </Link><br />
            <input value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
            <ul>
                {
                    displayList.length > 0 && displayList.map(
                        (item, index) => (

                            <li key={index}>{item}</li>

                        )
                    )

                }
            </ul>
        </div>
    )
}

const appRoute = createBrowserRouter([{
    path: '/',
    element: <AppLayout />
}, {
    path: '/about',
    element: <TestClass />
}])



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRoute} />);
