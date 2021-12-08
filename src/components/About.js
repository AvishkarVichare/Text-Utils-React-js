import React from "react";

export default function About(props) {
  // const [textBtn, setTextBtn] = useState("Enable Dark Mode");
  // const [theme, setTheme] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "2px solid black",
  // });

  // const toggleTheme = () => {
  //   if (theme.color === "black") {
  //     setTheme({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "2px solid white",
  //     });
  //     setTextBtn("Enable Light Mode");
  //   } else {
  //     setTheme({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "2px solid black",
  //     });
  //     setTextBtn("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div
        className=" container my-5"
        style={{
          backgroundColor: props.mode === "dark" ? "rgb(39 39 39)" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="text-center">Text Utils</h2>
        <p>
          We know that too many internet users were waiting{" "}
          <small>(not really)😅</small> for someone to make such amazing
          Website. So we are here presenting you Text Utils. Yes I know you all
          surprised this is completely free. This is best Text Manipulating
          website You will find on this entire world of internet.
        </p>
        <p>
          You can do too many operation <small>(may be)</small> on your Text By
          just clicking some Button we provided like converting to uppercase,
          lowercase, removing extra spaces and also <strong>Button</strong>{" "}
          which can clear the textarea isn't that amazing😆{" "}
        </p>
        <p>
          <strong>Who made this--- </strong>
          We know You are waiting to know made this right...right....... I know
          I know. So his name is <strong>Avishkar</strong>. I know its a cool
          name 🙂.
        </p>
      </div>

      <div className="container footer">
        <div>
          <a href="https://github.com/AvishkarVichare">GitHub profile</a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/avishkar-vichare-35b19b225/">
            linkedin profile
          </a>
        </div>
      </div>
    </>
  );
}
