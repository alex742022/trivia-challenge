import Questions from "../../components/questions-container";
import DataQuestions from "../api/test-questions.json"
export default function QuestionsPage({DataQuestions}) {
  const { results } = DataQuestions;
  return <Questions results={results}/>;
}

//SSR

export async function getServerSideProps() {
  if (!DataQuestions) {
    return {
      props: {},
    };
  }
  return {
    props: {
      DataQuestions,
    },
  };
}
