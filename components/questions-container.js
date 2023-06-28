import { useState } from "react";
import Image from "next/image";
import CheckIcon from "../public/images/icons/check.svg";
import XIcon from "../public/images/icons/xmark.svg";

export default function QuestionsContainer({ results }) {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScores] = useState(0);
  console.log(currentQuestions);
  const handleAnswer = (answer) => {
    currentQuestions + 1 < results.length &&
      setCurrentQuestions(currentQuestions + 1);
  };
  console.log(results);
  return (
    <div className="w-[900px] h-[700px] bg-white px-[50px] py-[30px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <Image
            src="/../public/images/logo/logo_zeniark2.png"
            width={80}
            height={60}
            alt="Logo"
            className="w-auto"
          />
          <h2>Category:{results[currentQuestions].category}</h2>
        </div>
        <div>
          {currentQuestions + 1} of {results.length}
        </div>
      </div>
      <hr className="h-[2px] my-[20px]" />
      <div className="m-auto w-[70%] h-[400px] bg-slate-200 flex items-center">
        <h1 className="text-[50px] text-center">
          {results[currentQuestions].question}
        </h1>
      </div>
      <hr className="h-[2px] my-[20px]" />
      <div className="text-white flex gap-[40px] justify-center">
        <div className="bg-[green] py-[10px] flex items-center gap-[15px] w-[100px] justify-center rounded-lg">
          <Image
            src={CheckIcon}
            width={20}
            height={20}
            alt="checkIcon"
            className="w-auto"
          />
          <button onClick={() => handleAnswer("True")}>True</button>
        </div>
        <div className="bg-[red] py-[10px] flex items-center gap-[15px] w-[100px] justify-center rounded-lg">
          <Image
            src={XIcon}
            width={20}
            height={20}
            alt="checkIcon"
            className="w-auto"
          />
          <button onClick={() => handleAnswer("False")}>False</button>
        </div>
      </div>
    </div>
  );
}
