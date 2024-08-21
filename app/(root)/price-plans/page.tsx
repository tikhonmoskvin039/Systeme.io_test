"use client";

import pricePlansData from "@/__mocks__/pricePlans.json";
import { DataPage } from "@/components/DataPage";

const PricePlansPage: React.FC = () => (
  <DataPage<TPricePlan>
    data={pricePlansData}
    columnsConfig={[
      {
        key: "description",
        header: "Description",
        render: (plan: TPricePlan) => plan.description,
      },
      {
        key: "active",
        header: "Active",
        render: (plan: TPricePlan) => (plan.active ? "Yes" : "No"),
      },
      {
        key: "createdAt",
        header: "Created At",
        render: (plan: TPricePlan) =>
          new Date(plan.createdAt).toLocaleDateString(),
      },
      {
        key: "removedAt",
        header: "Removed At",
        render: (plan: TPricePlan) =>
          plan.removedAt ? new Date(plan.removedAt).toLocaleDateString() : "-",
      },
    ]}
    label="Price Plan"
    editFieldKey="description"
  />
);

export default PricePlansPage;
