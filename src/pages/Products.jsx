import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
    const [product , setProduct ] = useState([])
    const { category } = useParams();

    console.log(category);
    const getCategory = () => {
        axios(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getCategory();
    }, [category]);
    // console.log(product);

    return (
        <div className="row gap-3">
            {product.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center bg-warning card "
                        style={{ width: "18rem" }}
                    >
                        <div className="">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                            />
                        </div>
                        <div className="card-body ">
                            <h5 className="card-title">{item.price}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;
