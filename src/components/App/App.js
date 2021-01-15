import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import '../../assets/scss/main.scss';
import Sidebar from '../Layout/Sidebar/Sidebar';

import PhotoFeed from '../PhotoFeed/PhotoFeed';

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <div className="main">
                {/* <Route path="/" exact component={PhotoFeed} /> */}
            </div>
        </BrowserRouter>
    );
};

export default App;