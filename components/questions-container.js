import Image from "next/image";
// import CheckIcon from "../public/images/icons"
export default function QuestionsContainer() {
  return (
    <div className="w-[900px] h-[700px] bg-white px-[50px] py-[30px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <Image
            src="/../public/images/logo/logo_zeniark2.png"
            width={60}
            height={60}
            alt="Logo"
          />
          <h2>Category:</h2>
        </div>
        <div>1 of 10</div>
      </div>
      <hr className="h-[2px] mt-[20px] mb-[20px]" />
      <div className="m-auto w-[70%] h-[400px] bg-slate-200 flex items-center">
        <h1 className="text-[50px] text-center">
          Green is almost as big as Africa.
        </h1>
      </div>
      <hr className="h-[2px] mt-[20px]" />
      <div>
        <button className="bg-[green] py-[10px]">True</button>
        <button className="bg-[red]">False</button>
      </div>
    </div>
  );
}
