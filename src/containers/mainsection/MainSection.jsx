import { useRef } from "react";
import { useState } from "react";
import Button from "../../components/button/Button";
import Features from "../../components/features/Features";
import "./mainsection.css";
function MainSection() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  const ref = useRef()

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleClick = () => {
    console.log(url);
    fetchUrl(url);
  };



  const invalidUrl = () => {
    // alert("Invalid Url");
    ref.current.style.border = '2px solid red'

  }

  //@Todo URL check 
  const fetchUrl = async (value) => {
    if (value === "") {
      invalidUrl()
      
      
    } else {
      const req = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`);
      const res = await req.json();
      const updated_list = [...links, res];

      setLinks(updated_list);
    }
  };

  return (
    <div className="mainsection paddings">
      <div className="mainsection__input">
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          placeholder="Shorten a link here"
          onChange={handleChange}
          ref={ref}
        />
        <Button
          text="shorten It!"
          onClick={handleClick}
          style={{
            borderRadius: 5,
            padding: "1rem 2rem",
          }}
        />
      </div>
      <div className="mainsection__output">
        {links.map((link, index) => (
          <div key={index} className="mainsection__output--links">
            <p>{link.result.original_link}</p>
            <span></span>
            <a
              href={link.result.full_short_link}
              target="_blank"
              rel="noreferrer"
            >
              {link.result.full_short_link}
            </a>
            <Button
              text="copy"
              onClick={(e) => {
                e.target.innerText = "Copied!";
                navigator.clipboard.writeText(link.result.full_short_link);
              }}
              style={{
                borderRadius: 5,
              }}
            />
          </div>
        ))}
      </div>
      <Features />
    </div>
  );
}

export default MainSection;
