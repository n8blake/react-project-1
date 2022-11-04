import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="p-5 my-4 bg-light rounded-3">
        <h1 className="display-5 fw-bold">React and Redux App Admin</h1>
        <p className="col-md-8 fs-4">React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
    </div>
)

export default HomePage;