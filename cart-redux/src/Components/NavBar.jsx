import React from "react";
import {useSelector} from 'react-redux'

const NavBar = () => {
    const amount = useSelector(state => state.quantity)

    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary" disabled={true}> Cart value: ₹{100 * amount} </button>
            </div>
        </nav>
    )
}

export default NavBar;