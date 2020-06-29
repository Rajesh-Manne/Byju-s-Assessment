import React, { Component } from "react";
// import class from "*.module.sass";
import styled from "styled-components";
import user from "../../src/user.jpg";

export default class Cards extends Component {
  render() {
    return (
      <Cardwrapper className="card-deck ">
        <div className="card">
          <div className="card-header">
            <h5 className="text-capitalize">On Track</h5>
            <span className="menu-icon">
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </div>
          <div className="card-body">
            <div className="card1">
              <div className="alerts-section">
                <h6 className="text-capitalize mx-2">
                  CBSE Grade 5 Maths - Algebra
                </h6>
                <div className="alerts mr-5">
                  <span class="border border-warning rounded-circle bg-warning text-white px-2 py-1">
                    1
                  </span>
                </div>
                <span className="v-menu-icon ml-auto">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </div>
              <div className="footer">
                <div className="users">
                  <img src={user} alt="logo" className="navbar-brand" />
                  <img src={user} alt="logo" className="navbar-brand" />
                  <span className="dot-circle">
                    <i class="far fa-dot-circle"></i>
                  </span>
                </div>
                <div className="calendar-percentage">
                  <div className="calendar mx-1">
                    <i className="far fa-calendar-minus mx-1"></i>
                    <span className="date">21 No2013</span>
                  </div>
                  <button type="button" class="btn btn-primary px-3 py-1 mx-1">
                    75%
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card"></div> */}
          </div>

          <div className="card2">
            {/* <div className="card-header">
              <h5 className="text-capitalize">On Track</h5>
              <span className="menu-icon">
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </div> */}
            <div className="card-body">
              <div className="card1">
                <div className="alerts-section">
                  <h6 className="text-capitalize mx-2">
                    CBSE Grade 4 Maths - Algebra
                  </h6>
                  <div className="alerts mr-5">
                    <span class=" px-2 py-1"></span>
                  </div>
                  <span className="v-menu-icon ml-auto">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="footer">
                  <div className="users">
                    <img src={user} alt="logo" className="navbar-brand" />
                    {/* <img src={user} alt="logo" className="navbar-brand" /> */}
                    <span className="dot-circle">
                      <i class="far fa-dot-circle"></i>
                    </span>
                  </div>
                  <div className="calendar-percentage">
                    <div className="calendar mx-1">
                      <i className="far fa-calendar-minus mx-1"></i>
                      <span className="date">22 Nov 2020</span>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary px-3 py-1 mx-1"
                    >
                      85%
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="card"></div> */}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-section"></div>
          <div className="card-header">
            <h5 className="text-capitalize">On Track</h5>
            <span className="menu-icon">
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </div>
          <div className="card-body">
            <div className="card3 ">
              <div className="alerts-section">
                <h6 className="text-capitalize mx-2">CBSE: Grade 4 English</h6>
                {/* <div className="alerts mr-5">
                    <span class="border border-warning rounded-circle bg-warning text-white px-2 py-1">
                      1
                    </span>
                  </div> */}
                <span className="v-menu-icon ml-auto">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </div>
              <div className="footer">
                <div className="users">
                  <img src={user} alt="logo" className="navbar-brand" />
                  <img src={user} alt="logo" className="navbar-brand" />
                  <img src={user} alt="logo" className="navbar-brand" />
                  <span className="dot-circle">
                    <i class="far fa-dot-circle"></i>
                  </span>
                </div>
                <div className="calendar-percentage">
                  <div className="calendar mx-1">
                    <i className="far fa-calendar-minus mx-1"></i>
                    <span className="date">21 Nov 2013</span>
                  </div>
                  <button type="button" class="btn btn-primary px-3 py-1 mx-1">
                    18%
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card"></div> */}
          </div>
          {/*  */}
          {/* 
          <div className="card"> */}
          {/* <div className="card-header">
              <h5 className="text-capitalize">On Track</h5>
              <span className="menu-icon">
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </div> */}
          <div className="card-body">
            <div className="card4">
              <div className="alerts-section">
                <h6 className="text-capitalize mx-2">
                  CBSE: Grade 5 Maths - Algebra
                </h6>
                {/* <div className="alerts mr-5">
                    <span class="border border-warning rounded-circle bg-warning text-white px-2 py-1">
                      1
                    </span>
                  </div> */}
                <span className="v-menu-icon ml-auto">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </div>
              <div className="footer">
                <div className="users">
                  <img src={user} alt="logo" className="navbar-brand" />
                  <img src={user} alt="logo" className="navbar-brand" />
                  <img src={user} alt="logo" className="navbar-brand" />
                  <span className="dot-circle">
                    <i class="far fa-dot-circle"></i>
                  </span>
                </div>
                <div className="calendar-percentage">
                  <div className="calendar mx-1">
                    <i className="far fa-calendar-minus mx-1"></i>
                    <span className="date">21 Nov 2013</span>
                  </div>
                  <button type="button" class="btn btn-primary px-3 py-1 mx-1">
                    55%
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card"></div> */}
          </div>
          {/*  */}
          {/* </div> */}
        </div>

        <div className="card">
          <div className="card-section">
            <div className="card-header">
              <h5 className="text-capitalize">On Track</h5>
              <span className="menu-icon">
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </div>
            <div className="card-body">
              <div className="card5">
                <div className="alerts-section">
                  <h6 className="text-capitalize mx-2">
                    CBSE Grade 5 Maths - Algebra
                  </h6>
                  {/* <div className="alerts mr-5">
                      <span class="border border-warning rounded-circle bg-warning text-white px-2 py-1">
                        1
                      </span>
                    </div> */}
                  <span className="v-menu-icon ml-auto">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="footer">
                  <div className="users">
                    <img src={user} alt="logo" className="navbar-brand" />
                    {/* <img src={user} alt="logo" className="navbar-brand" />
                      <img src={user} alt="logo" className="navbar-brand" /> */}
                    <span className="dot-circle">
                      <i class="far fa-dot-circle"></i>
                    </span>
                  </div>
                  <div className="calendar-percentage">
                    <div className="calendar mx-1">
                      <i className="far fa-calendar-minus mx-1"></i>
                      <span className="date">21 Nov 2019</span>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary px-3 py-1 mx-1"
                    >
                      80%
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="card"></div> */}
            </div>
            {/*  */}
          </div>
        </div>
      </Cardwrapper>
    );
  }
}

const Cardwrapper = styled.div`
  position: relative;

  padding: 30px 10px;
  margin-left: 0px !important;

  .card {
    border-color: transparent;
    background-color: #f7f7f7;
    padding-bottom:170px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    border: none;
    background: transparent;
  }

  .card1 {
    background-color: #fff;
    padding: 10px 10px;
    border-top: 3px solid rgb(50, 205, 50) !important;
    .alerts-section {
      display: flex;
      border-color: transparent;
      padding-bottom: 50px;
    }

    .footer {
      display: flex;
      justify-content: space-between;

      img {
        border-radius: 15px;
        // margin-top: -10px;
        width: 20px;
        padding: 0;
      }
    }
    .calendar {
      background: #f7f7f7;

      display: inline-block;
      padding: 5px 10px;
    }
  }

  .card3,
  .card4 {
    background-color: #fff;
    padding: 10px 10px;
    border-top: 3px solid rgb(255, 0, 0) !important;
    .alerts-section {
      display: flex;
      border-color: transparent;
      padding-bottom: 50px;
    }

    .footer {
      display: flex;
      justify-content: space-between;

      img {
        border-radius: 15px;
        // margin-top: -10px;
        width: 20px;
        padding: 0;
      }
    }
    .calendar {
      background: #f7f7f7;

      display: inline-block;
      padding: 5px 10px;
    }
  }

  .card5 {
      background-color: #fff;
      padding: 10px 10px;
      border-top: 3px solid rgb(255,165,0) !important;
      .alerts-section {
        display: flex;
        border-color: transparent;
        padding-bottom: 50px;
      }
  
      .footer {
        display: flex;
        justify-content: space-between;
  
        img {
          border-radius: 15px;
          // margin-top: -10px;
          width: 20px;
          padding: 0;
        }
      }
      .calendar {
        background: #f7f7f7;
  
        display: inline-block;
        padding: 5px 10px;
      }
    }
  }
`;
