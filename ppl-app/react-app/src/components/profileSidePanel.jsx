import React from "react";
import { Link } from "react-router-dom";

const SidePanel = props => {
  return (
    <div className="content_rgt">
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="/images/btn_iconb.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="/images/btn_sep.png" alt="sep" />
        </span>
        <Link replace to="/createNewPost">
          Upload Post
        </Link>
      </div>
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="/images/btn_icona.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="/images/btn_sep.png" alt="sep" />
        </span>
        <Link replace to="/createNewCategory">
          Add Categories
        </Link>
      </div>
      <div className="rght_cate">
        <div className="rght_cate_hd" id="rght_cat_bg">
          Categories
        </div>
        <div className="rght_list">
          <ul>
            {props.currentUser?.categories?.map((category, index) => (
              <li key={index}>
                <div onClick={() => props.onTagChange(category.name)}>
                  <span className="list_icon">
                    <img
                      src={`http://localhost:5000/assets/${category.picture}`}
                      alt="up"
                    />
                  </span>
                  {category.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rght_cate">
        <div className="rght_cate_hd" id="opn_cat_bg">
          Featured
        </div>
        <div className="sub_dwn">
          <div className="feat_sec">
            <div className="feat_sec_img">
              <img src="/images/feat_img1.png" alt="image" />
            </div>
            <div className="feat_txt">Lorem Ipusum Text</div>
          </div>
          <div className="feat_sec">
            <div className="feat_sec_img">
              <img src="/images/feat_img2.png" alt="image" />
            </div>
            <div className="feat_txt">Lorem Ipusum Text</div>
            <div className="btm_rgt">
              <div className="btm_arc">Dogs</div>
            </div>
          </div>
          <div className="feat_sec">
            <div className="feat_sec_img">
              <img src="/images/feat_img3.png" alt="image" />
            </div>
            <div className="feat_txt">Lorem Ipusum Text</div>
            <div className="btm_rgt">
              <div className="btm_arc">Rabbits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
