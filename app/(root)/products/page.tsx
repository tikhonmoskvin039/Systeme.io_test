"use client";

import productsData from "@/__mocks__/products.json";
import { DataPage } from "@/components/DataPage";

const ProductsPage: React.FC = () => (
  <DataPage<TProduct>
    data={productsData}
    columnsConfig={[
      {
        key: "name",
        header: "Name",
        render: (product: TProduct) => product.name,
      },
      {
        key: "size",
        header: "Size",
        render: (product: TProduct) => product.options.size,
      },
      {
        key: "amount",
        header: "Amount",
        render: (product: TProduct) => product.options.amount,
      },
      {
        key: "active",
        header: "Active",
        render: (product: TProduct) => (product.active ? "Yes" : "No"),
      },
    ]}
    label="Product"
    editFieldKey="name"
  />
);

export default ProductsPage;
