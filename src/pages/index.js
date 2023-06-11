import React, { useState } from "react";
import Head from "next/head";
import { chatWithGPT } from "../lib/chatgpt";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [historyArr, setHistoryArr] = useState([]);
  const [currentVoice, setCurrentVoice] = useState([]);
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHistoryArr((historyArr) => [
      ...historyArr,
      { msg: userInput, from: "usr" },
    ]);

    const conversationHistory =
      historyArr
        .map((line) => `${line.from === "usr" ? "You: " : "AI: "}${line.msg}`)
        .join("\n") + `\nYou: ${userInput}`;

    try {
      const generatedResponse = await chatWithGPT(userInput); // pass the conversation history to the GPT function
      setResponse(generatedResponse);
      setHistoryArr((historyArr) => [
        ...historyArr,
        { msg: generatedResponse, from: "gpt" },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Say What?</title>
      </Head>
      <main
        className="w-screen h-screen flex bg-gray-900"
        style={{ fontFamily: "Kanit, sans-serif" }}
      >
        <div className="w-1/2 bg-blue-700 text-white rounded-lg">
          <div className="h-1/2 bg-cyan-700 rounded-lg flex justify-center items-end p-4">
            <div className="font-extrabold leading-[4em]">
              <div className="text-[4em]">SAY</div>
              <div className="text-[4em]">WHAT?</div>
            </div>
          </div>
          <div className="h-1/2 flex justify-center items-start p-4">
            <div>Available Voices</div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-500 rounded-lg flex justify-center items-center">
          <div className="w-[350px] h-[500px] bg-white text-gray-700 rounded-xl p-4 flex flex-col gap-2 ">
            <label htmlFor="voiceInput">Select Desired Voice</label>
            <input type="select" id="voiceInput" className="border-2" placeholder="Donald Trump"></input>
            <label htmlFor="lengthInput">Length</label>
            <input type="range" id="lengthInput"></input>
            <label htmlFor="stabilityInput">Stability</label>
            <input type="range" id="stabilityInput"></input>
            <label htmlFor="topicInput">Topic</label>
            <input type="text" id="topicInput" placeholder="Placeholder" className="border-2"></input>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
