import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">Intern House</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                           
                            <Link class="nav-link" to='/jobs'>Job Postings</Link>
                            <Link class="nav-link" to='/job-posting'>Post a Job</Link>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header