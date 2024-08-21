"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface FiltersProps {
  onFilterChange: (filter: string, isActive: boolean | null) => void;
  onResetFilters: boolean;
}

export const Filters: React.FC<FiltersProps> = ({
  onFilterChange,
  onResetFilters,
}) => {
  const [livePlaceholder, setLivePlaceholder] = useState("");
  const [filter, setFilter] = useState("");
  const path = usePathname();
  const [isActive, setIsActive] = useState<TActiveStatus>("all");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value, isActive === "all" ? null : isActive === "active");
  };

  const handleActiveChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TActiveStatus;
    setIsActive(value);
    onFilterChange(filter, value === "all" ? null : value === "active");
  };

  useEffect(() => {
    if (path === "/products") setLivePlaceholder("product");
    if (path === "/price-plans") setLivePlaceholder("price");
    if (path === "/pages") setLivePlaceholder("page");
  }, [path]);

  useEffect(() => {
    if (onResetFilters) {
      setFilter("");
      setIsActive("all");
    }
  }, [onResetFilters]);

  return (
    <div className="mb-4 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder={`Enter a name for ${livePlaceholder}`}
        className="p-2 border border-gray-300 rounded w-full md:w-1/2"
      />
      <select
        value={isActive}
        onChange={handleActiveChange}
        className="p-2 border border-gray-300 rounded w-full md:w-1/4"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};
