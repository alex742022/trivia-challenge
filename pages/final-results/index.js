// imported the final-score component to pass the property and also to display
import FinalScore from "../../components/final-score"
// this "finalScore" came from show-results component
export default function FinalResults({finalScore}) {
  return (
   <FinalScore finalScore={finalScore}/>
  )
}
