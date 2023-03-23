import React from "react";
import "./Whatwedo.css";
import education from "../../images/education.jpg";

const Whatwedo = () => {
  return (
    <div>
      <div class="rowa">
        <div class="column">
          <img class="whatwedo-img" src={education} alt="education" />
        </div>
        <div class="column">
          <img class="whatwedo-img" src={education} alt="education" />
        </div>
        <div class="column">
          <img class="whatwedo-img" src={education} alt="education" />
        </div>
      </div>
    </div>
  );
};
export default Whatwedo;
