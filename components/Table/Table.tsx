"use client";

import React from "react";

interface ITableProps<T> {
  data: T[];
  columns: FieldConfig<T>[];
}

export const Table = <T,>({ data, columns }: ITableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      {data.length ? (
        <table className="min-w-full border-collapse bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border-b text-sm md:text-base text-left"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border-b text-sm md:text-base"
                  >
                    {col.render(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="min-w-full flex h-[40vh] justify-center items-center font-bold text-blue-700 border-collapse bg-white shadow-md">No results were found for your request.</div>
      )}
    </div>
  );
};
