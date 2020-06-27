import React, { Component } from "react";
import logo from "../../src/logo.jpg";
import user from "../../src/user.jpg";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>

        {/* <ul className="navbar-nav nav-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul> */}
        <div className="nav-section">
          <h1 className="ml-3">CBSE : Grade 5 Maths - Algebra</h1>
          <ul className="navbar-b">
            <li className="nav-item active ">
              <Link to="/" className="nav-link">
                Task
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Conversation
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link ">
                Files
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Resources
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Status
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          {" "}
          <Link to="" className="ml-auto">
            <span className="mr-2">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </Link>
          <Link to="" className="ml-auto">
            <span className="mr-2">
              <i class="far fa-dot-circle"></i>
            </span>
          </Link>
          <div className="user">
            <Link to="" className="ml-auto">
              <div className="user">
                <img src={user} alt="logo" className="navbar-brand" />
                <span>Jenny Miksa</span>
              </div>
            </Link>
          </div>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #fff !important;
  h1 {
    text-transform: capitalize;
    font-size: 25px;
    text-transform: uppercase;
    margin-left: 50px;
    color: #813186;
  }
  img {
    width: 40px;
  }
  .fa-search,
  .fa-dot-circle {
    // border: 1px solid 0 8px 6px -6px black;
    // border: 1px solid 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 5px;
    color: #813186;
    box-shadow: 0 0 1px #000;
    // box-shadow: 0 8px 6px -6px black;
  }
  .user img {
    border-radius: 15px;
    margin-top: -10px;
    width: 35px;
  }
  .icons {
    display: flex;
    margin-left: auto;
    justify-content: space-between;
  }
  .icons span,
  div {
    padding: 0 5px;
  }
  .user span {
    color: #000;
  }
  .nav-section{
    h1{
      // margin-right:auto;
    }
  .navbar-b {
    display: flex;
    list-style-type: none;
    li.active{
      border-bottom:4px solid #813186 !important;
    }
    }
  
}
  }
`;
