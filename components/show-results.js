// imported the final-results file
import FinalResults from "../pages/final-results";
import { useState } from "react";
export default function FinalResultsContainer({ showResults, lengthOfArray }) {
  const [showNotif, setShowNotif] = useState(true);
  const showTheResult = () => {
    setShowNotif(false);
  };
  return showNotif ? (
    <div className="max-w-[400px] bg-white mx-auto mt-[100px] py-[20px] flex flex-col items-center justify-center gap-[20px]">
      <h1 className="text-[20px]">Your Done!</h1>
      <button onClick={showTheResult} className="text-[20px] brandColorBackground text-white py-[10px] px-[30px] rounded-lg">
        Show the result
      </button>
    </div>
  ) : (
    //past the property into finala result
    <FinalResults finalScore={showResults} lengthOfArray={lengthOfArray} />
  );
}
