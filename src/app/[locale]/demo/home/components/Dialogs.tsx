import React from "react";

import { Dialog } from "web-monorepo-ui-components";

import { Product } from "@/app/[locale]/demo/home/utils/types";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: Product | null;
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  setData,
}) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Product"
      body={<p>Are you sure you want to delete {selectedProduct?.name}?</p>}
      buttons={[
        {
          label: "Cancel",
          iconName: "RiChatDeleteLine",
          size: "sm",
          theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
          onClick: onClose,
        },
        {
          label: "Yes",
          iconName: "RiChatCheckLine",
          size: "sm",
          theme: { colors: { buttonBg: "green.500", buttonText: "white" } },
          onClick: () => {
            if (selectedProduct) {
              setData((prev) =>
                prev.filter((p) => p.id !== selectedProduct.id),
              );
              onClose();
            }
          },
        },
      ]}
    />
  );
};

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditDialog: React.FC<EditDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Product"
      body={<p>This option is not implemented yet.</p>}
      buttons={[
        {
          label: "Close",
          iconName: "RiCloseLine",
          size: "sm",
          theme: { colors: { buttonBg: "gray.500", buttonText: "white" } },
          onClick: onClose,
        },
      ]}
    />
  );
};
