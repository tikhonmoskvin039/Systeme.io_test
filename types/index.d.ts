declare type TProduct = {
  id: number;
  name: string;
  options: TProductOptions;
  active: boolean;
  createdAt: string;
};

declare type TProductOptions = {
  size: TSizes;
  amount: number;
};

declare type TPricePlan = {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
};

declare type TPage = {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
};

declare type FieldConfig<T> = {
  key: keyof T | keyof TProductOptions;
  header: string;
  render: (item: T) => ReactNode;
};

declare type TSizes = "S" | "M" | "L" | "XL" | "XXL" | string;
declare type TActiveStatus = "all" | "active" | "inactive";
