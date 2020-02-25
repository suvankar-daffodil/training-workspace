import React from "react";

export default class ProfileCardComponent extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div class="contnt_1">
        <div class="list_1">
          <ul>
            <li>
              <input type="checkbox" class="chk_bx" />
              Friends
            </li>
            <li>
              <input type="checkbox" class="chk_bx" />
              Flaged
            </li>
          </ul>
        </div>
        <div class="timeline_div">
          <div class="timeline_div1">
            <div class="profile_pic">
              <img src="images/timeline_img1.png" />
              <div class="profile_text">
                <a href="#">Change Profile Pic</a>
              </div>
            </div>
            <div class="profile_info">
              <div class="edit_div">
                <a href="#">
                  Edit <img src="images/timeline_img.png" />
                </a>
              </div>
              <div class="profile_form">
                <ul>
                  <li>
                    <div class="div_name1">Name :</div>
                    <div class="div_name2">Stefiney Gibbs</div>
                  </li>
                  <li>
                    <div class="div_name1">Sex :</div>
                    <div class="div_name2">Female</div>
                  </li>
                  <li>
                    <div class="div_name1">Description :</div>
                    <div class="div_name3">
                      This is an example of a comment. You can create as many
                      comments like this one or sub comments as you like and
                      manage all of your content inside Account.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline_div2">
            <ul>
              <li>
                <a href="#" class="active">
                  Timeline{" "}
                </a>
              </li>
              <li>
                <a href="#">About </a>
              </li>
              <li>
                <a href="#">Album </a>
              </li>
              <li>
                <a href="#"> Pets </a>
              </li>
              <li>
                <a href="#">My Uploads </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
