import Image from "next/image";
// use for decode the intity
import he from "he";
import Logo2 from "../public/images/logo/logo_zeniark2.png";
import CheckIcon from "../public/images/icons/check-green.svg";
import XIcon from "../public/images/icons/xmark-red.svg";
import Link from "next/link";
import { Result } from "postcss";
//these all property are came from show-results component"
export default function FinalScore({
  finalScore,
  lengthOfArray,
  allDataResults,
  answeredOfUser,
  indexQuestion,
}) {
  return (
    <div className="max-w-[600px] relative mx-auto bg-white px-[15px] py-[20px] sm:py-[30px] sm:px-[50px] mt-[100px]">
      <Image
        src={Logo2}
        width={100}
        height={100}
        alt="Logo"
        className="w-[50px] sm:w-[70px] absolute"
      />
      <h1 className="text-[30px] text-center">Final Results</h1>
      <hr className="h-[2px] my-[50px]" />
      <div className="text-center">
        <h1 className="text-[42px] font-semibold">
          {finalScore} / <span className="text-[38px]">{lengthOfArray}</span>
        </h1>
        <p className="text-[20px]">Your Score</p>
      </div>

      <div>
        {indexQuestion.map((indexNumber, index) => {
          return (
            indexNumber < allDataResults.length && (
              <div className="my-[10px]" key={index}>
                <hr className="h-[2px]" />
                <div className="flex justify-between gap-[20px] items-center">
                  <div className="w-[80%]">
                    <p className="text-[14px]">
                      {index + 1}.{" "}
                      {he.decode(allDataResults[indexNumber].question)}
                    </p>
                    <div className="flex gap-[10px]">
                      <small className="italic">
                        The correct answer is
                        <span
                          className={`${
                            allDataResults[indexNumber].correct_answer ===
                            "True"
                              ? `text-[green]`
                              : `text-[red]`
                          } ml-[5px]`}
                        >
                          {allDataResults[indexNumber].correct_answer}.
                        </span>
                      </small>
                      <small className="italic">
                        Your answer is
                        <span
                          className={`${
                            answeredOfUser[indexNumber] === "True"
                              ? `text-[green]`
                              : `text-[red]`
                          } ml-[5px]`}
                        >
                          {answeredOfUser[indexNumber]}.
                        </span>
                      </small>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={
                        answeredOfUser[indexNumber] === allDataResults[indexNumber].correct_answer
                          ? CheckIcon
                          : XIcon
                      }
                      width={30}
                      height={30}
                      alt={
                        answeredOfUser[indexNumber] === allDataResults[indexNumber].correct_answer
                          ? "Check"
                          : "Wrong"
                      }
                      className="w-[20px]"
                    />
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <hr className="h-[2px]" />
      <div className="flex flex-col items-center mt-[50px]">
        <Link
          href="/"
          className="uppercase mx-auto brandColorText font-semibold text-[30px]"
        >
          Play again
        </Link>
        <div className="brandColorBackground h-[4px] w-[200px]"></div>
      </div>
    </div>
  );
}
