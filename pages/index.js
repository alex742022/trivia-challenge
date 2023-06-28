//import the data form API
import Link from "next/link";
import DataofTrivia from "./api/test-questions.json";
import Image from "next/image";
//import the logo
import Logo from "../public/images/logo/logo_zeniark.png"
export default function HomeScreen() {
  //Destructuting the Data
  const { results } = DataofTrivia;
  const lengthOfArray = results.length;
  return (
    <>
      <div className="bg-white max-w-[800px] mx-auto mt-[100px] p-[20px] flex flex-col items-center rounded-lg ">
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={100}
          className="w-auto"
        />
        <h1 className="text-[30px] text-center font-[700] mt-[20px]">
          Welcome to the Trivia Challenge!
        </h1>
        <p className="font-semibold text-center mt-[10px]">
          You will be presented with {lengthOfArray} True or False questions.
        </p>
        <div className="px-[20px] py-[10px] brandColorBackground text-white text-[20px] mt-[40px] rounded-lg">
          Can you score {lengthOfArray}/{lengthOfArray}?
        </div>
        <div className="flex flex-col items-center">
        <Link
          href="/questions"
          className="uppercase brandColorText text-[25px] mt-[20px]"
        >
          Lets start!
        </Link>
        <div className="w-[160px] h-[2px] brandColorBackground"></div>
        </div>
       
      </div>
    </>
  );
}

//SSR
// export async function getServerSideProps() {
//   if (!DataofTrivia) {
//     return {
//       props: {},
//     };
//   }
//   return {
//     props: {
//       DataofTrivia,
//     },
//   };
// }
