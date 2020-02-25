import React from "react";

export default class TimelineComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      title: null,
      name: null,
      date: null,
      time: null
    };
  }

  render() {
    return (
      <div class="contnt_2">
        <div class="div_a">
          <div class="div_title">
            User Interface PSD Source files Web Designing for web
          </div>
          <div class="btm_rgt">
            <div class="btm_arc">Dogs</div>
          </div>
          <div class="div_top">
            <div class="div_top_lft">
              <img src="/images/img_6.png" />
              Steave Waugh
            </div>
            <div class="div_top_rgt">
              <span class="span_date">02 Jan 2014</span>
              <span class="span_time">11:15am</span>
            </div>
          </div>
          <div class="div_image">
            <img src="/images/lft_img.png" alt="pet" />
          </div>
          <div class="div_btm">
            <div class="btm_list">
              <ul>
                <li>
                  <a href="#">
                    <span class="btn_icon">
                      <img src="/images/icon_001.png" alt="share" />
                    </span>
                    Share
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="btn_icon">
                      <img src="/images/icon_002.png" alt="share" />
                    </span>
                    Flag
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="btn_icon">
                      <img src="/images/icon_003.png" alt="share" />
                    </span>
                    0 Likes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="btn_icon">
                      <img src="/images/icon_004.png" alt="share" />
                    </span>
                    4 Comments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
