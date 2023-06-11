import React, { useState } from "react";
import { chatWithGPT } from "../lib/chatgpt";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const generatedResponse = await chatWithGPT(userInput);
      setResponse(generatedResponse);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main
      className="w-screen h-screen flex justify-center items-center"
      style={{ fontFamily: "Kanit, sans-serif" }}
    >
      <div className="flex flex-col items-center">
        <div className="text-[2.4em] font-medium">AI Adventure</div>
        <div className="w-[800px] h-[600px] border-2 border-gray-500 dark:border-white">
          <div className="w-full h-[540px] px-6 py-4 text-white text-[1.5em] overflow-y-scroll">
            <div>	&#62; Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>
            <div>Line</div>


          </div>
          <div className="h-[56px] w-full flex justify-center items-center bg-yellow-500">
            <div className="border-gray-500 dark:border-white  flex relative">
              <button
                onClick={handleSubmit}
                className="h-[56px] w-[160px] bg-gray-500"
              >
                Send
              </button>
              <input
                className="h-[56px w-[600px] dark:bg-gray-800 px-4 dark:text-gray-200 text-[1.2em]"
                type={"text"}
                placeholder="What will you do?"
                value={userInput}
                onChange={handleUserInput}
              ></input>
              <button className="flex justify-center items-center h-[56px] w-[35px] bg-gray-500">
                <i className="fa-solid fa-gear"></i>
              </button>
            </div>
          </div>
          <div>{response}</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
