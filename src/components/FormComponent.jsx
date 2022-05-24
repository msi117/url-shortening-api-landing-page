import React, { useState } from "react";
import LinksComponent from "./LinksComponent";

function FormComponent() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  //Input Handler
  const handleInput = (e) => {
    // console.log(e.target.value);
    setUrl(e.target.value);
  };

  // Button Handler
  const handleButton = () => {
    fetchUrl(url);
  };

  // Async Fetch URL
  const fetchUrl = async (value) => {
    const req = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`);
    const res = await req.json();

    const updated_list = [...links, res];

    setLinks(updated_list);
  };


  return (
    <div>
      <div className="url-container">
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Shorten a link here..."
          onChange={handleInput}
        />
        <button className="btn" id="shorten" onClick={handleButton}>
          Shorten it!
        </button>
      </div>
      {links
        ? links.map((link) => (
            <LinksComponent key={link.result.code} link={link} />
          ))
        : ""}
    </div>
  );
}

export default FormComponent;
