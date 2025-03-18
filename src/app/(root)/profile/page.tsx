import { Banknote, Heart, ShoppingCart } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const UserProfilePage = () => {
  return (
    <div className="lg:max-w-[700px] space-y-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded ">
          <div className="flex px-4 gap-1 py-5 relative items-center ">
            <ShoppingCart className=" text-gray-200 top-2 right-2" size={60} />
            <div className="w-full">
              <p className="text-3xl text-right font-bold w-full text-gray-800 ">
                {" "}
                5
              </p>
              <p className="text-gray-500 text-right w-full">Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded ">
          <div className="flex px-4 gap-1 py-5 relative items-center ">
            <Banknote className=" text-gray-200 top-2 right-2" size={60} />

            <div className="w-full">
              <p className="text-3xl text-right font-bold w-full text-gray-800 ">
                1240
              </p>
              <p className="text-gray-500 text-right w-full">BDT</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded ">
          <div className="flex px-4 gap-1 py-5 relative items-center ">
            <Heart className=" text-gray-200 top-2 right-2" size={60} />
            <div className="w-full">
              <p className="text-3xl text-right font-bold w-full text-gray-800 ">
                2
              </p>
              <p className="text-gray-500 text-right w-full">Favorites</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 overflow-x-auto rounded">
        <div className="min-w-[600px]">
          <Table className="border ">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
