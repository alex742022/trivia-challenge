// imported the final-results file
import FinalResults from "../pages/final-results";
import { useState } from "react";
export default function FinalResultsContainer({ showResults }) {
  const [showNotif, setShowNotif] = useState(true);
  const showTheResult = () => {
    setShowNotif(false);
  };
  return showNotif ? (
    <div className="w-[900px] bg-white mx-auto">
      <h1 className="text-[20px]">Your Done!</h1>
      <button onClick={showTheResult} className="text-[50px]">
        Show the result
      </button>
    </div>
  ) : (
    //past the property into finala result
    <FinalResults finalScore={showResults} />
  );
}
