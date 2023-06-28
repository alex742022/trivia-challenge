
//this property "finalScore came from final-results page"
import Image from "next/image"
import Logo2 from "../public/images/logo/logo_zeniark2.png"
export default function FinalScore({finalScore, lengthOfArray}) {
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
      <h1 className="text-[42px] font-semibold">{finalScore} / <span className="text-[38px]">{lengthOfArray}</span> </h1>
      <p className="text-[20px]">Your Score</p>
    </div>
  </div>
  )
}
