import Header from "../components/Header";

import Home from "../pages/Home";



import Notfound from "../pages/Notfound";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
// import axios from "axios";
// import { useEffect, useState } from "react";

const AppRouter = () => {
    // const [products, setProducts] = useState([]);

    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<Products />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </main>
    );
};

export default AppRouter;
