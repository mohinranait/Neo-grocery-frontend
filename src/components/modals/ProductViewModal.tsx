"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const ProductViewModal = ({ setOpen, open }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div>Content</div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewModal;
