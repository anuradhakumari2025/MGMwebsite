import React from "react";
import "./Testimonials.css";
import next_icon from "/next-icon.png";
import back_icon from "/back-icon.png";
import user_1 from "/user-1.png";
import user_2 from "/user-2.png";
import user_3 from "/user-3.png";
import user_4 from "/user-4.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <img src={next_icon} alt="" className="next-btn" />
        <img src={back_icon} alt="" className="back-btn" />
        <div className="slider">
          <ul>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>John Doe</h3>
                    <span>Mumbai,India</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at MGMCET was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            {/* LI 2 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Omkar Dhurvade</h3>
                    <span>Navi-Mumbai,India</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at MGMCET was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            {/* LI 3 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Anuradha Kumari</h3>
                    <span>Bihar,India</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            {/* LI4 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Anuradha Kumari</h3>
                    <span>Bihar,India</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
