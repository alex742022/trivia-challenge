import { useState } from "react";
import Image from "next/image";
//import Svg from public file
import CheckIcon from "../public/images/icons/check.svg";
import XIcon from "../public/images/icons/xmark.svg";
// imported this component to pass a final results
import ShowResults from "./show-results";
import Logo2 from "../public/images/logo/logo_zeniark2.png";

import he from "he";

// "results" came from questions file which have a data array
export default function QuestionsContainer({ results }) {
  // this state is to display the index of array results
  const [currentQuestions, setCurrentQuestions] = useState(0);
  // this is state numbers that hold a scores
  const [score, setScores] = useState(0);

  // this function is for the button of true or false
  const handleAnswer = (answer) => {
    //to changed the questions
    currentQuestions + 1 < results.length &&
      setCurrentQuestions(currentQuestions + 1);
    answer === results[currentQuestions].correct_answer && setScores(score + 1);
  };

  // this jsx have an condition
  // if  the currentQuestions is equall into the array length of results then the first one is execute
  return currentQuestions + 1 === results.length ? (
    <ShowResults showResults={score} />
  ) : (
    <div className="w-[900px] h-[800px] bg-white px-[50px] py-[30px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <Image
            src={Logo2}
            width={100}
            height={100}
            alt="Logo"
            className="w-[80px]"
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
        {he.decode(results[currentQuestions].question)}
        </h1>
      </div>
      <hr className="h-[2px] my-[20px]" />
      <div className="text-white flex gap-[40px] justify-center">
        <div
          onClick={() => handleAnswer("True")}
          className="bg-[green] py-[10px] flex items-center gap-[15px] w-[100px] justify-center rounded-lg"
        >
          <Image
            src={CheckIcon}
            width={20}
            height={20}
            alt="checkIcon"
            className="w-auto"
          />
          <button>True</button>
        </div>
        <div
          onClick={() => handleAnswer("True")}
          className="bg-[red] py-[10px] flex items-center gap-[15px] w-[100px] justify-center rounded-lg"
        >
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
