import Image from "next/image";
// use for decode the intity
import he from "he";
import Logo2 from "../public/images/logo/logo_zeniark2.png";
import CheckIcon from "../public/images/icons/check-green.svg";
import XIcon from "../public/images/icons/xmark-red.svg";
//these all property are came from show-results component"
export default function FinalScore({
  finalScore,
  lengthOfArray,
  allDataResults,
  answeredOfUser,
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
        {allDataResults.map(({ correct_answer, question }, index) => {
          return (
            <div className="my-[10px]">
              <hr className="h-[2px]" />
              <div className="flex justify-between gap-[20px] items-center">
                <div className="w-[80%]">
                  <p className="text-[14px]">
                    {index + 1}. {he.decode(question)}
                  </p>
                  <div className="flex gap-[10px]">
                    <small className="italic">
                      The correct answer is
                      <span
                        className={`${
                          correct_answer === "True"
                            ? `text-[green]`
                            : `text-[red]`
                        } ml-[5px]`}
                      >
                        {correct_answer}.
                      </span>
                    </small>
                    <small className="italic">
                      Your answer is
                      <span
                        className={`${
                          answeredOfUser[index] === "True"
                            ? `text-[green]`
                            : `text-[red]`
                        } ml-[5px]`}
                      >
                        {answeredOfUser[index]}.
                      </span>
                    </small>
                  </div>
                </div>
                <div>
                  <Image
                    src={
                      answeredOfUser[index] === correct_answer
                        ? CheckIcon
                        : XIcon
                    }
                    width={30}
                    height={30}
                    alt={
                      answeredOfUser[index] === correct_answer
                        ? "Check"
                        : "Wrong"
                    }
                    className="w-[20px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
