import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/formInputComponent";

const SidePanel = props => {
  return (
    <div className="content_rgt">
      <div className="rght_btn1">
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
      <div className="drop-menu1">
        <h2>New Post</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <FormInput
            name="title"
            label="Title"
            type="text"
            placeholder="Enter title for your post"
          />
          <span>Tag</span>
          <select name="tag">
            <option></option>
            {props.currentUser?.categories?.map(category => (
              <option value={category.name.slice(0, -1).toUpperCase()}>
                {category.name.slice(0, -1).toUpperCase()}
              </option>
            ))}
          </select>
          <FormInput
            name="image"
            label="Image"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Upload Post" />
        </form>
      </div>
      <div className="rght_btn2">
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
      <div className="drop-menu2">
        <h2>New Category</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <FormInput
            name="category"
            label="Category"
            type="text"
            placeholder="Enter title for your new category"
          />
          <FormInput
            className="custom-file-upload"
            name="image"
            label="Thumbnail"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Submit" />
        </form>
      </div>
      <div className="rght_cate">
        <div className="rght_cate_hd" id="rght_cat_bg">
          Categories
        </div>
        <div className="rght_list">
          <ul>
            {props.currentUser?.categories?.map((category, index) => (
              <li key={index}>
                <div
                  onClick={() => props.onSelectedCategoryChange(category.name)}
                >
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
