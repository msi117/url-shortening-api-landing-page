import React, { useState } from "react";
import Brand from "../images/icon-brand-recognition.svg";
import Detail from "../images/icon-detailed-records.svg";
import Fully from "../images/icon-fully-customizable.svg";
import FormComponent from "./FormComponent";

function ArticleComponent() {
  const [data, setData] = useState({});

  const getShortUrl = async () => {
    const req = await fetch(
      `https://api.shrtco.de/v2/shorten?url=https://apple.com`
    );
    const res = await req.json();
    console.log(res.ok);
    setData(res);
  };

  return (
    <article>
      <div className="article">
          <div className="formcomponent">
              {/* todo Form Component */}
              <FormComponent />
          </div>
        <div className="head">
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.{" "}
          </p>
        </div>
        <div className="tail">
          <div className="details-container">
            <div className="box box1">
              <div className="icon-container">
                <img
                  src={Brand}
                  width={30}
                  height={30}
                  alt="Brand Recognition"
                />
              </div>
              <h5>Brand Recognition</h5>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="box box2">
              <div className="icon-container">
                <img
                  src={Detail}
                  width={30}
                  height={30}
                  alt="Brand Recognition"
                />
              </div>
              <h5>Detailed Records</h5>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.{" "}
              </p>
            </div>

            <div className="box box3">
              <div className="icon-container">
                <img
                  src={Fully}
                  width={30}
                  height={30}
                  alt="Brand Recognition"
                />
              </div>
              <h5>Fully Customizable </h5>
              <p>
                {" "}
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </article>
  );
}

export default ArticleComponent;
