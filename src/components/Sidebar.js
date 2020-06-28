import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import SideNavBar from "./SideNavBar";
import Cards from "./Cards";
export default class Sidebar extends Component {
  render() {
    return (
      <Sidewrapper className="sidewrapper">
        <ul className="sidebar">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              <i class="far fa-home"></i>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              <i class="fal fa-file-search"></i>
            </Link>
          </li>
          <li className="nav-item active ">
            <Link to="/" className="nav-link">
              <i class="fal fa-camera "></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i class="far fa-calendar-minus"></i>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              <i class="far fa-book"></i>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              <i class="fad fa-users"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i class="fal fa-signal"></i>
            </Link>
          </li>
        </ul>
        <SideNavBar />
        <Cards />
      </Sidewrapper>
    );
  }
}

const Sidewrapper = styled.div`
  // padding:0 0  0 10px;
  display:inline;
  
  position:relative;
  top:0;
  
  .sidebar {
    background-color: #813186;
    height: 100%;
    width: 80px;
    position: relative;
    float:left;
    // z-index: 1;
    // left: 0;
    overflow-x: hidden;
    padding:30px 10px;
    li.active{
      background:#fff;
      .fa-camera{
      color:#813186;
    }
      border-radius:10%
    }
}
.sidebar li i {
  padding: 25px 3px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: block;
}
  }
  .navbar-nav li {
    display: inline-block !important;
    font-size: 20px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
`;
