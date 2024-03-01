import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from './components/Banner/Banner';
import { Filterbar } from './components/FilterBar/Filterbar';
import { Menu } from './components/Menu/Menu';
import { Write } from './components/Write/Write';
import { Account } from './components/Account/Account';
import { useState } from 'react'; 
import { Single } from "./components/Single/Single.jsx";
import {GameIdeas } from "./components/GameIdeas/GameIdeas.jsx"
import { Navigate } from 'react-router-dom';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const router = createBrowserRouter([
        {
            path: "",
            element:
                <div className="App">
                    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Banner />
                    <Filterbar/>
                    <Menu/>
                </div>
        },
        {
            path: "/Account",
            element: 
                <div className="App">
                    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Account setIsLoggedIn={setIsLoggedIn} />
                </div>
        },
        {
            path: "/Write",
            element: isLoggedIn ? (
                <div className="App">
                    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Write />
                </div>
            ) : (
                <Navigate to="/Account" />
            )
        },
        
        {
            path: "/post/:id",
            element:
                <div className="App">
                    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Single />
                </div>
        },
        {
            path: "/GameIdeas",
            element:
            <div className = "App">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <GameIdeas />

            </div>
        }
        
    ]);

    return (
        <div>
            <RouterProvider router={router}>
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Account setIsLoggedIn={setIsLoggedIn} />
            </RouterProvider>
        </div>
    );
}

export default App;
