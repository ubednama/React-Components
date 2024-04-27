import React from "react";

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand bg-dark d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-between mx-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link active" aria-current="page" to="#">Shop</a>
                            </li>
                            <li className="nav-item d-flex align-items-center justify-content-center">
                                <a className="nav-link d-flex align-items-center" to="#">Cart<p className="badge bg-secondary">{this.props.totalItems}</p></a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;