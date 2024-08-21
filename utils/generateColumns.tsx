import React from 'react';

type Column<T> = {
  key: keyof T | string;
  header: string;
  render: (item: T) => React.ReactNode;
};

export function generateColumns<T extends object>(
  keys: Array<{ key: keyof T | string; header: string; render?: (item: T) => React.ReactNode }>,
  handleEdit: (item: T) => void
): Column<T>[] {
  return [
    ...keys.map(({ key, header, render }) => ({
      key,
      header,
      render: render || ((item: T) => {
        if (typeof key === 'string' && !(key in item)) {
          return null;
        }
        return item[key as keyof T] as React.ReactNode;
      }),
    })),
    {
      key: 'edit',
      header: 'Edit',
      render: (item: T) => (
        <button className="text-blue-500" onClick={() => handleEdit(item)}>
          Edit
        </button>
      ),
    },
  ];
}
