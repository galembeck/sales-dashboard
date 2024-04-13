import { Layout } from "./layout";

import { InformationCards } from "./components/InformationCards";
import { SalesChart } from "./components/SalesChart";
import { OrdersTable } from "./components/OrdersTable";

export function App() {
  return (
    <Layout>
      <InformationCards />
      <SalesChart />
      <OrdersTable />
    </Layout>
  );
}