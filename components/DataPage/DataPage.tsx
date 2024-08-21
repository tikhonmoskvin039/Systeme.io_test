"use client";

import React, { useState } from "react";
import { Filters } from "../Filters";
import { Table } from "../Table";
import { EditModal } from "../EditModal";

interface IDataPageProps<T> {
  data: T[];
  columnsConfig: FieldConfig<T>[];
  label: string;
  editFieldKey: keyof T;
}

export const DataPage = <T extends { id: number; active: boolean }>({
  data,
  columnsConfig,
  label,
  editFieldKey,
}: IDataPageProps<T>) => {
  const [items, setItems] = useState<T[]>(data);
  const [filteredItems, setFilteredItems] = useState<T[]>(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<T | null>(null);
  const [resetFilters, setResetFilters] = useState(false);

  const handleFilterChange = (filter: string, isActive: boolean | null) => {
    if (filter) {
      setFilteredItems(
        items.filter((item) => String(item[editFieldKey]).includes(filter))
      );
    }

    if (isActive !== null) {
      setFilteredItems(items.filter((item: T) => item.active === isActive));
    }

    if (isActive === null) {
      setFilteredItems(
        items.filter((item) => String(item[editFieldKey]).includes(filter))
      );
    }

    if (isActive !== null && filter) {
      setFilteredItems(
        items.filter(
          (item) =>
            item.active === isActive &&
            String(item[editFieldKey]).includes(filter)
        )
      );
    }
  };

  const handleEdit = (item: T) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (newValue: string) => {
    if (currentItem) {
      const updatedItems = items.map((item) =>
        item.id === currentItem.id
          ? { ...item, [editFieldKey]: newValue }
          : item
      );
      setItems(updatedItems);
      setFilteredItems(updatedItems);
      setResetFilters(true);
    }
  };

  const columns = [
    ...columnsConfig.map((column) => ({
      ...column,
      render: column.render
        ? column.render
        : (item: T) =>
            column.key in item
              ? (item[column.key as keyof T] as React.ReactNode)
              : null,
    })),
    {
      key: "edit" as keyof T,
      header: "Actions",
      render: (item: T) => (
        <button className="text-blue-500" onClick={() => handleEdit(item)}>
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">{label}</h1>
      <Filters
        onFilterChange={handleFilterChange}
        onResetFilters={resetFilters}
      />
      <Table<T> data={filteredItems} columns={columns} />
      {currentItem && (
        <EditModal
          isOpen={isModalOpen}
          initialValue={String(currentItem[editFieldKey])}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
          label={label}
        />
      )}
    </div>
  );
};
