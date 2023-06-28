// imported the component to pass the data came from json file
import Questions from "../../components/questions-container";
// imported the json file
import DataQuestions from "../api/test-questions.json"
export default function QuestionsPage() {
  //destructur
  const { results } = DataQuestions;
  return <Questions results={results}/>;
}

//SSR
//fetch the json data
// export async function getServerSideProps() {
//   if (!DataQuestions) {
//     return {
//       props: {},
//     };
//   }
//   return {
//     props: {
//       DataQuestions,
//     },
//   };
// }
