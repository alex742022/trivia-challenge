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
    <ShowResults showResults={score} lengthOfArray={results.length}/>
  ) : (
    <div className="max-w-[800px] mx-auto bg-white px-[15px] sm:px-[40px] py-[30px] mt-[100px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[20px] sm:gap-[30px]">
          <Image
            src={Logo2}
            width={100}
            height={100}
            alt="Logo"
            className="w-[40px] sm:w-[80px]"
          />
          <h2 className="sm:text-[20px]  w-[150px]">Category: <span className="font-semibold">{results[currentQuestions].category}</span></h2>
        </div>
        <small className="text-[15px] sm:text-[20px]">
          {currentQuestions + 1} of {results.length}
        </small>
      </div>
      <hr className="h-[2px] my-[20px]" />
      <div className="m-auto max-w-[600px]] h-[300px] bg-slate-200 flex justify-center items-center p-[20px]">
        <h1 className="text-[30px] text-center sm:text-[40px]">
          {he.decode(results[currentQuestions].question)}
        </h1>
      </div>
      <hr className="h-[2px] my-[20px]" />
      <div className="text-white flex gap-[40px] justify-center">
        <div
          onClick={() => handleAnswer("True")}
          className="bg-[green] py-[10px] flex items-center gap-[15px] w-[150px] justify-center rounded-lg"
        >
          <Image
            src={CheckIcon}
            width={20}
            height={20}
            alt="checkIcon"
            className="w-auto"
          />
          <button className="text-[20px]">True</button>
        </div>
        <div
          onClick={() => handleAnswer("True")}
          className="bg-[red] py-[10px] flex items-center gap-[15px] w-[150px] h-[60px] justify-center rounded-lg"
        >
          <Image
            src={XIcon}
            width={30}
            height={30}
            alt="checkIcon"
            className="w-auto"
          />
          <button className="text-[20px]">False</button>
        </div>
      </div>
    </div>
  );
}
