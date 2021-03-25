import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "../styles.css";
import { Button } from "@material-ui/core";

const images = require("../../gifs/*.gif");
console.log(images);
export default function ImageComponent(props) {
  let [isOpen, setIsOpen] = useState(false);

  let handleShowDialog = () => {
    setIsOpen(!isOpen);
    console.log("cliked");
  };

  let { title, summary, imageName } = props;
  console.log(title, summary, imageName);
  let imagePath = images[imageName];
  return (
    <div>
      <Button color="primary" onClick={handleShowDialog}>
        Preview
      </Button>
      {isOpen && (
        <dialog
          className="dialog"
          style={{ position: "absolute" }}
          open
          onClick={handleShowDialog}
        >
          <img
            className="image"
            src={imagePath}
            onClick={handleShowDialog}
            alt="no image"
          />
        </dialog>
      )}
    </div>
  );
}
