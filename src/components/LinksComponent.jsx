import React, { useState } from "react";

function LinksComponent({ link }) {

  const [click, setClick] = useState('Copy')

  const { result: {
    full_short_link : shortlink,
    original_link : originallink,
  } } = link


  const handleClick = () => {
    console.log(link);
    setClick('Copied!')
    // console.log(shortlink);
    copyToClipboard(shortlink)
  }

 //copy to clipboard
 const copyToClipboard = (link) => {
  navigator.clipboard.writeText(link)
 }



  return (
    <div className="url">
      <div>
        {" "}
        <p className="full-url"> {originallink} </p>
      </div>
      <div className="combined">
        <a href={shortlink} target="_blank" rel="noreferrer">{shortlink} </a>
        <button className="copy-button" onClick={handleClick}>{click}</button>
      </div>
    </div>
  );
}

export default LinksComponent;
