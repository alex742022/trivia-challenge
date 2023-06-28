//import the data form API
import Link from "next/link";
import DataofTrivia from "./api/test-questions.json";
import Image from "next/image";

export default function HomeScreen({ DataofTrivia }) {
  //Destructuting the Data
  const { results } = DataofTrivia;
  const lengthOfArray = results.length;
  return (
    <div>
      <div className="bg-white max-w-[900px] mx-auto p-[20px] flex flex-col items-center rounded-lg ">
        <Image
          src="/../public/images/logo/logo_zeniark.png"
          alt="Logo"
          width={300}
          height={100}
          className="w-auto"
        />
        <h1 className="text-[30px] text-center font-[700] mt-[20px]">
          Welcome to the Trivia Challenge!
        </h1>
        <p className="font-semibold">
          You will be presented with {lengthOfArray} True or False questions.
        </p>
        <div className="px-[20px] py-[10px] brandColor1 text-white text-[20px] mt-[40px] rounded-lg">
          Can you score {lengthOfArray}/{lengthOfArray}?
        </div>
        <Link
          href="/questions"
          className="uppercase text-[brandColor1] text-[25px] mt-[20px]"
        >
          Lets start!
        </Link>
      </div>
    </div>
  );
}

//SSR
export async function getServerSideProps() {
  if (!DataofTrivia) {
    return {
      props: {},
    };
  }
  return {
    props: {
      DataofTrivia,
    },
  };
}
