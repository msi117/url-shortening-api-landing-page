import React from "react";

function LinksComponent({ link }) {
  return (
    <div className="url">
      <div>
        {" "}
        <p className="full-url"> {link.result.original_link} </p>
      </div>
      <div className="combined">
        <a href={link.result.full_short_link}>{link.result.full_short_link} </a>
        <button className="copy-button">Copy</button>
      </div>
    </div>
  );
}

export default LinksComponent;
