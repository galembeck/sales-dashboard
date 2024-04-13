import { Table } from "../Table";

export function OrdersTable() {
  return (
    <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 px-5 py-4 mb-8">
      <div className="flex w-full items-center justify-between mb-6">
        <span className="font-bold text-[#20224] text-[24px]">Today Orders</span>
      </div>

      <Table />
    </div>
  );
}