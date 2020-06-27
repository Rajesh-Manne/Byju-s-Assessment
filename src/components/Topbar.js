import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export default class Topbar extends Component {
  render() {
    return (
      <Topwrapper className="navbar navbar-expand-lg navbar-dark ">
        <ul className="topbar">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              List
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Garitt
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link active">
              Board
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Calendar
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Pivot
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Process
            </Link>
          </li>
        </ul>

        <div className="user">
          <Link to="" className="ml-auto">
            <div className="fields">
              <i className="fal fa-th-large" aria-hidden="true"></i>
              <span className="capitalize ml-2 text-dark">Fields</span>
            </div>
          </Link>
          <Link to="" className="ml-auto">
            <div className="sort">
              <i className="fal fa-sort" aria-hidden="true"></i>
              <span className="capitalize ml-2 text-dark">Sort</span>
            </div>
          </Link>
          <Link to="" className="ml-auto">
            <div className="filter">
              {" "}
              <i className="fal fa-filter" aria-hidden="true"></i>
              <span className="capitalize ml-2 text-dark">Filter</span>
            </div>
          </Link>
        </div>
      </Topwrapper>
    );
  }
}

const Topwrapper = styled.nav`
  display: flex !important;
  position: relative;
  margin-left: 80px;
//   padding: 0 10px;
  height:50px;
  align-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  .topbar {
    display: flex;
    background: #fff;
    // padding: 5px;
    list-style: none;
    align-content: center !important;
    .active{
      border-bottom: 4px solid #813186;
    }
  }
  .topbar li{
      margin-top:12px;
  }
  }
  .user {
    display: flex;
    margin-left: auto;
    justify-content: space-around;
    padding: 0 5px;
  }
  .user div {
    padding: 0 20px;
  }
  .fa-th-large,
  .fa-sort,
  .fa-filter {
    color: black;
  }
`;
