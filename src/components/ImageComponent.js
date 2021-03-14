import { useState } from "react";
import "../styles.css";

export default function ImageComponent(props) {
  let [isOpen, setIsOpen] = useState(0);

  let handleShowDialog = () => {
    setIsOpen(!isOpen);
    console.log("cliked");
  };

  let { title, summary, imageName } = props;
  console.log(title, summary, imageName);
  let imagePath = "/gifs/" + imageName;
  return (
    <div>
      <img
        className="small"
        src={imagePath}
        onClick={handleShowDialog}
        alt="not found"
      />
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
