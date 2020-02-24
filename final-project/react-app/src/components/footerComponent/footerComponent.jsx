import React from "react";

const Footer = () => {
  return (
    <div class="footr">
      <div class="footr_lft">
        <div class="footer_div1">
          Copyright © Pet-Socail 2014 All Rights Reserved
        </div>
        <div class="footer_div2">
          <a href="#">Privacy Policy </a>|{" "}
          <a href="#"> Terms &amp; Conditions</a>
        </div>
      </div>
      <div class="footr_rgt">
        <ul>
          <li>
            <a href="#">
              <img src="images/social_1.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/social_2.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/social_3.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/social_4.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
