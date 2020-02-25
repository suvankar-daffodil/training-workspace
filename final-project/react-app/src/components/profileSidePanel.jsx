import React from "react";

const SidePanel = () => {
  return (
    <div class="content_rgt">
      <div class="rght_btn">
        <span class="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>
        <span class="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#">Upload Post</a>
      </div>
      <div class="rght_btn">
        <span class="rght_btn_icon">
          <img src="images/btn_icona.png" alt="up" />
        </span>
        <span class="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#">Invite Friends</a>
      </div>
      <div class="rght_cate">
        <div class="rght_cate_hd" id="rght_cat_bg">
          Categories
        </div>
        <div class="rght_list">
          <ul>
            <li>
              <a href="#">
                <span class="list_icon">
                  <img src="images/icon_01.png" alt="up" />
                </span>
                CATS
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_icon">
                  <img src="images/icon_02.png" alt="up" />
                </span>
                Dogs
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_icon">
                  <img src="images/icon_03.png" alt="up" />
                </span>
                Birds
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_icon">
                  <img src="images/icon_04.png" alt="up" />
                </span>
                Rabbit
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_icon">
                  <img src="images/icon_05.png" alt="up" />
                </span>
                Others
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="rght_cate">
        <div class="rght_cate_hd" id="opn_cat_bg">
          Featured
        </div>
        <div class="sub_dwn">
          <div class="feat_sec">
            <div class="feat_sec_img">
              <img src="images/feat_img1.png" alt="image" />
            </div>
            <div class="feat_txt">Lorem Ipusum Text</div>
          </div>
          <div class="feat_sec">
            <div class="feat_sec_img">
              <img src="images/feat_img2.png" alt="image" />
            </div>
            <div class="feat_txt">Lorem Ipusum Text</div>
            <div class="btm_rgt">
              <div class="btm_arc">Dogs</div>
            </div>
          </div>
          <div class="feat_sec">
            <div class="feat_sec_img">
              <img src="images/feat_img3.png" alt="image" />
            </div>
            <div class="feat_txt">Lorem Ipusum Text</div>
            <div class="btm_rgt">
              <div class="btm_arc">Rabbits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
