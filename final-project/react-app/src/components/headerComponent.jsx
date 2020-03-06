import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
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
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link
              replace
              className="brand"
              to={{ pathname: "/", state: { filterTag: "" } }}
            >
              PPL
            </Link>
            <div className="pro_info pull-right">
              <div className="pro_icn">
                <img src="/images/pic_small.png" />
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
                  <Link replace tabIndex="-1" to="#">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    Message Box
                  </Link>
                </li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    Change Language
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    <input type="text" placeholder="search" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  <Link
                    replace
                    to={{ pathname: "/", state: { filterTag: "" } }}
                  >
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    E-Coupons
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    E-Brands
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    Resuse Market
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    Lost and Found
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_lft">
          <div className="logo">
            <Link replace to={{ pathname: "/", state: { filterTag: "" } }}>
              <img src="/images/logo.png" />
            </Link>
          </div>
          <div className="navigatn">
            <ul>
              <li>
                <Link
                  replace
                  className="active"
                  to={{ pathname: "/", state: { filterTag: "" } }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  {" "}
                  E-Coupons{" "}
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  E-Brands{" "}
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  {" "}
                  Resuse Market{" "}
                </Link>
              </li>
              {/* <li>
                <Link replace to="#"> Lost and Found</Link>
              </li> */}
              {props.currentUser ? (
                <li>
                  <span onClick={() => props.toggleAuthState(null)}>
                    Signout
                  </span>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className="header_rgt">
          <div className="flag_div">
            <img src="/images/flag.png" />
          </div>
          <input type="text" placeholder="Search" className="txt_box" />

          {props.currentUser ? (
            <>
              <div className="msg_box">
                <Link replace to="#">
                  <span className="msg_count">100</span>
                </Link>
              </div>
              <div className="info_div">
                <div className="image_div">
                  <img src="/images/pic.png" />
                </div>
                <div className="info_div1">Me</div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
