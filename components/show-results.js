import Image from "next/image";
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
    <div className="w-[900px] relative mx-auto bg-white py-[30px] px-[50px]">
      <Image
        src="/../public/images/logo/logo_zeniark2.png"
        width={100}
        height={100}
        alt="Logo"
        className="w-[80px] absolute"
      />
      <h1 className="text-[40px] text-center">Final Results</h1>
      <hr className="h-[2px] my-[50px]" />
      <div>
        <h1>{finalScore}</h1>
        <p className="text-[20px]">Your Score</p>
      </div>
    </div>
  );
}
