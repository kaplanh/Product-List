import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        await axios("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="row gap-3">
            {products.map((item) => {
                return (
                    <div key={item.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center bg-warning card "
                        style={{ width: "18rem" }}
                    >
                        <img
                            src={item.image}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{item.price}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
