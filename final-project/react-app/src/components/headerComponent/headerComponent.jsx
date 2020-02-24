import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="brand" href="">
              PPL
            </a>
            <div className="pro_info pull-right">
              <div className="pro_icn">
                <img src="images/pic_small.png" />
              </div>
              <div className="pro_txt">
                Me<b className="caret"></b>
              </div>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="dLabel"
              >
                <li>
                  <a tabIndex="-1" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex="-1" href="#">
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex="-1" href="#">
                    Change Language
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a tabIndex="-1" href="#">
                    <input type="text" placeholder="search" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  <a href="">Home</a>
                </li>
                <li className="">
                  <a href="">E-Coupons</a>
                </li>
                <li className="">
                  <a href="">E-Brands</a>
                </li>
                <li className="">
                  <a href="">Resuse Market</a>
                </li>
                <li className="">
                  <a href="">Lost and Found</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="header_lft">
          <div class="logo">
            <a href="#">
              <img src="images/logo.png" />
            </a>
          </div>
          <div class="navigatn">
            <ul>
              <li>
                <a href="#" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#"> E-Coupons </a>
              </li>
              <li>
                <a href="#">E-Brands </a>
              </li>
              <li>
                <a href="#"> Resuse Market </a>
              </li>
              <li>
                <a href="#"> Lost and Found</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header_rgt">
          <div class="flag_div">
            <img src="images/flag.png" />
          </div>
          <input type="text" placeholder="Search" class="txt_box" />
          <div class="msg_box">
            <a href="#">
              <span class="msg_count">100</span>
            </a>
          </div>
          <div class="info_div">
            <div class="image_div">
              <img src="images/pic.png" />
            </div>
            <div class="info_div1">Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
