import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return <main className="bg-background flex flex-col">
    <div className="w-1/2 flex flex-col items-center justify-center p-4 text-slate-50 space-y-3 rounded-md">
      <textarea name="" id="" className="h-48 overflow-auto border rounded-md"></textarea>
    </div>
  </main>;
}

export default App;
