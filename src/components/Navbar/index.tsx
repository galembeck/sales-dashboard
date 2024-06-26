import { ChatboxEllipses, Notifications, Person, SearchOutline } from "react-ionicons";

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 w-full h-[70px] bg-white py-5 pl-20 pr-5 flex items-center justify-between z-[100]">
      <span className="font-black text-[28px] absolute left-[26px] text-[#4379EE]">D.</span>
      <div className="flex md:w-[450px] w-[200px] items-center px-4">
        <SearchOutline color={"#454545"} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-[450px] outline-none px-4 py-2 placeholder:text-[#454545] border-b border-transparent focus:border-[#4379EE]"
        />
      </div>

      <div className="flex items-center gap-5">
        <Notifications 
          color={"#BFBFBF"} 
          width="23px"
          height="23px" 
          cssClasses={"cursor-pointer"} 
        />
        <Person 
          color={"#BFBFBF"} 
          width="23px"
          height="23px"
          cssClasses={"cursor-pointer"} 
        />
        <ChatboxEllipses 
          color={"#BFBFBF"} 
          width="23px"
          height="23px"
          cssClasses={"cursor-pointer"} 
        />
      </div>
    </div>
  );
}