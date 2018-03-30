import React from 'react'

// import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/TopBar.css'

class TopBar extends React.Component {
    
    render() {
        return (
            <div className="nav_menu-header">
                <h1 className="nav_menu-title_label text-center text-sm-left p-4">Bucknell Course Reviewer</h1>
                <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar fixed-top">
                <a className="navbar-brand active" href="kchambers54.github.io/full_stack">Keller Chambers</a>
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item active">
                        <a className="nav-link" href="kchambers54.github.io/full_stack">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="projects/1a/project1.html">Project1a</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="projects/1b/project1b.html">Project1b</a>
                    </li>
                    </ul>
                </div>
                </header>
            </div>
        );
    }
}

export default TopBar