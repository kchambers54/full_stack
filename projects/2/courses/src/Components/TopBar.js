import React from 'react'

import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/TopBar.css'

class TopBar extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="nav_menu-header">
                <h1 className="nav_menu-title_label text-center text-sm-left p-4">Bucknell Course Reviewer</h1>
                <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar fixed-top">
                <a class="navbar-brand" href="#">Keller Chambers</a>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-row">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects/1a/project1.html">Project1a</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects/1b/project1b.html">Project1b</a>
                    </li>
                    </ul>
                </div>
                </header>
            </div>
        );
    }
}

export default TopBar