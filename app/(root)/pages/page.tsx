"use client";

import pagesData from "@/__mocks__/pages.json";
import { DataPage } from "@/components/DataPage/index";

const PagesPage: React.FC = () => (
  <DataPage<TPage>
    data={pagesData}
    columnsConfig={[
      { key: "title", header: "Title", render: (page: TPage) => page.title },
      {
        key: "active",
        header: "Active",
        render: (page: TPage) => (page.active ? "Yes" : "No"),
      },
      {
        key: "updatedAt",
        header: "Updated At",
        render: (page: TPage) => new Date(page.updatedAt).toLocaleDateString(),
      },
      {
        key: "publishedAt",
        header: "Published At",
        render: (page: TPage) =>
          new Date(page.publishedAt).toLocaleDateString(),
      },
    ]}
    label="Page"
    editFieldKey="title"
  />
);

export default PagesPage;
