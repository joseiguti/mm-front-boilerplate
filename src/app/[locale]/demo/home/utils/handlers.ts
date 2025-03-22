import { SetStateAction } from "react";

import { Notifications } from "mm-front-components";

export const handleDeleteProduct = (
  selectedProduct: {
    id: any;
    name: any;
  },
  setData: (arg0: (prevData: any[]) => any[]) => void,
  onClose: () => void,
) => {
  setData((prevData: any[]) =>
    prevData.filter((item) => item.id !== selectedProduct.id),
  );

  const notificationInstance = Notifications({
    message: `${selectedProduct?.name ?? "Product"} deleted successfully`,
    type: "success",
    duration: 5000,
    position: "top-right",
  });

  notificationInstance.notify();

  onClose();
};

export const handleFormSubmit = (
  values: { product: any; category: any },
  data: any[],
  setData: {
    (
      value: SetStateAction<{ id: number; name: string; category: string }[]>,
    ): void;
    (arg0: any[]): void;
  },
) => {
  const newId =
    data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
  const newProduct = {
    id: newId,
    name: values.product,
    category: values.category,
  };
  setData([...data, newProduct]);
  Notifications({
    message: "Product added successfully",
    type: "success",
    duration: 5000,
    position: "top-right",
  }).notify();
};
