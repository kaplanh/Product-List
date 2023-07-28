import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
const Header = () => {
    return (
        <Container className="text-center mt-5">
            <h1 className="text-danger fw-bolder mb-4">Products List</h1>
            <ul className="d-flex justify-content-around list-unstyled p-1">
                <li>
                    <NavLink className="text-decoration-none" to="/">
                        ALL
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-decoration-none" to="/electronics">
                        ELECTRONICS
                    </NavLink>
                </li>
                <li>
                    <NavLink className="text-decoration-none" to="/jewelery">
                        JEWELERY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="text-decoration-none"
                        to="/men's clothing"
                    >
                        MEN'S CLOTHING
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="text-decoration-none"
                        to="/women's clothing"
                    >
                        WOMEN'S CLOTHING
                    </NavLink>
                </li>
            </ul>
        </Container>
    );
};

export default Header;
