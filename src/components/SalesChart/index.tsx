import { ChartComponent } from "../Chart";

export function SalesChart() {
  return (
    <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 py-4">
      <div className="flex w-full items-center justify-between px-5">
        <span className="font-bold text-[#202224] text-[24px]">Sales Chart</span>
        <select className="outline-none bg-[#FCFDFD] border-[#D5D5D5] rounded-md px-2 text-[#2B3034]">
          <option>This year</option>
          <option>This month</option>
          <option>This week</option>
        </select>
      </div>

      <ChartComponent />
    </div>
  ); 
}