import {Product} from "@/app/[locale]/demo/home/utils/types";

const gridHeaders = [
  {
    label: "Product",
    key: "name",
    textAlign: "start",
    width: 30,
    isSortable: true,
  },
  {
    label: "Category",
    key: "category",
    textAlign: "start",
    width: 30,
    isSortable: true,
  },
];

const gridActions = (
    handleOpenEditDialog: () => void,
    handleOpenDeleteDialog: (product: (Product | null)) => void,
) => ({
  label: "Actions",
  key: "actions",
  textAlign: "end",
  width: 40,
  buttons: [
    {
      label: "Edit",
      iconName: "RiEditLine",
      onClick: handleOpenEditDialog,
    },
    {
      iconName: "RiDeleteBinLine",
      theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
      onClick: handleOpenDeleteDialog,
    },
  ],
});

export { gridHeaders, gridActions };
