// imported the final-results file
import FinalResults from "../pages/final-results";
import { useState } from "react";
export default function FinalResultsContainer({ showResults }) {
  const [showNotif, setShowNotif] = useState(true);
  const showTheResult = () => {
    setShowNotif(false);
  };
  return showNotif ? (
    <div>
      <button onClick={showTheResult}>Show the result</button>
    </div>
  ) : (
    //past the property into finala result page
   <FinalResults finalScore={showResults}/>
  );
}
