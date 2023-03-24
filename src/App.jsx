import { useState } from "react";
import Modal from "./Modal";
import Toast from "./Toast";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  async function extractKeywords(e) {
    setIsOpen(true);
    setLoading(true);
    
    
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },

      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `I want to act as an SEO expert, your taske is to generate or exctract key words from the following text. Make the the first letter uppercase seperated with commas \n\n ${text} `,
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    if (text === "" && text.length < 20) {
      setShow(true)
      setIsOpen(false)
    }else{

      const response = await fetch(`${import.meta.env.VITE_URL}`, options);
      const json = await response.json()
  
      const data = json.choices[0].text.trim()
      setKeywords(data)
      console.log(data)
      setLoading(false)
    }

  }

  // console.log(keywords);
  return (
    <main className="w-full h-screen bg-background flex flex-col justify-center items-center">
      <div className="w-1/2 flex flex-col items-center justify-center p-4 bg-secondary text-slate-50 space-y-3 rounded-md">
        <textarea
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste texts you want to extract keyword from"
          className="w-full h-48 overflow-y-auto p-1 text-slate-50 bg-transparent border border-gray-400 outline-none rounded-md resize-none"
        ></textarea>
        <button
          onClick={extractKeywords}
          className="w-full p-4 text-xl text-black font-semibold bg-primary rounded-md hover:bg-hoverPrimary active:scale-95 transition-transform duration-200"
        >
          Extract
        </button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="font-medium font-mono border w-full">
          {keywords}
        </div>
        <span className="absolute top-0 right-1 text-slate-800 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <button className="w-full flex justify-between px-4 py-3 bg-primary rounded-md hover:bg-hoverPrimary active:scale-95 transition-transform duration-200">
          <span>Copy</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </Modal>
      <Toast show={show} setShow={setShow} message={"Input is empty"} color={"red-500"}/>
    </main>
  );
}

export default App;
