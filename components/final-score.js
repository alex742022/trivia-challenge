
//this property "finalScore came from final-results page"
import Image from "next/image"
import Logo2 from "../public/images/logo/logo_zeniark2.png"
export default function FinalScore({finalScore}) {
  return (
    <div className="w-[900px] relative mx-auto bg-white py-[30px] px-[50px]">
    <Image
      src={Logo2}
      width={100}
      height={100}
      alt="Logo"
      className="w-[80px] absolute"
    />
    <h1 className="text-[40px] text-center">Final Results</h1>
    <hr className="h-[2px] my-[50px]" />
    <div className="text-center">
      <h1 className="text-[40px]">{finalScore}</h1>
      <p className="text-[20px]">Your Score</p>
    </div>
  </div>
  )
}
