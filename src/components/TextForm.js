import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpClick = () => {
    // setText("button clicked but not added anything")
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "successfuly");

    // console.log("clickedd")
  };
  const handelLoClick = () => {
    // setText("button clicked but not added anything")
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "successfuly");
    // console.log("clickedd")
  };
  const handelClear = () => {
    // setText("button clicked but not added anything")

    setText("");
    props.showAlert("Cleared...", "successfuly");
    // console.log("clickedd")
  };

  const handelSpaces = () => {
    let ntext = text.replace(/\s+/g, " ").trim();
    setText(ntext);
    props.showAlert("Spaces removed...", "successfuly");
  };

  const countSpace = () => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (" " === text.charAt(i)) {
        count++;
      }
    }
    return count;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container gap-">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(39 39 39)" : "#c2c9d0",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="textBox"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
          <div>
            <button
              disabled={text.length === 0}
              className="btn btn-primary my-3 mx-3"
              onClick={handelUpClick}
            >
              Convert To Uppercase
            </button>
          </div>
          <div>
            <button
              disabled={text.length === 0}
              className="btn btn-warning my-3 mx-3"
              onClick={handelLoClick}
            >
              Convert To Lowercase
            </button>
          </div>
          <div>
            <button
              disabled={text.length === 0}
              className="btn btn btn-success my-3 mx-3"
              onClick={handelSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>

          <div>
            <button
              disabled={text.length === 0}
              className="btn btn-danger my-3 mx-3"
              onClick={handelClear}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Your text have{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and{" "}
          </b>{" "}
          <b>{text.split("").length - countSpace()} </b>Characters
        </p>

        <h3>Time to read this text(in mins)</h3>

        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length / 200}
        </p>

        <div>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
