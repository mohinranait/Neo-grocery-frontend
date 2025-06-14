"use client";
import {
  Calendar,
  MoreHorizontal,
  Eye,
  RotateCcw,
  Archive,
  Download,
  MessageSquareText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  status: string;
}

interface Order {
  date: string;
  total: number;
  deliveryPerson: string;
  status: string;
  statusColor: string;
  items: OrderItem[];
}

const orders: Order[] = [
  {
    date: "May 25, 2024",
    total: 724.5,
    deliveryPerson: "Kazi Anwar",
    status: "Delivered",
    statusColor: "bg-green-100 text-green-800",
    items: [
      {
        id: "1",
        name: "Samsung Galaxy S24+ Cell Phone",
        image: "/placeholder.svg?height=60&width=60",
        price: 499.5,
        quantity: 2,
        status: "Delivered",
      },
      {
        id: "2",
        name: "Samsung Galaxy S24+ Cell Phone",
        image: "/placeholder.svg?height=60&width=60",
        price: 499.5,
        quantity: 1,
        status: "Delivered",
      },
    ],
  },
  {
    date: "May 25, 2025",
    total: 724.5,
    deliveryPerson: "Kazi Anwar",
    status: "Expected delivery: 5/26/2025",
    statusColor: "bg-blue-100 text-blue-800",
    items: [
      {
        id: "3",
        name: "Samsung Galaxy S24+ Cell Phone",
        image: "/placeholder.svg?height=60&width=60",
        price: 499.5,
        quantity: 3,
        status: "Processing",
      },
      {
        id: "4",
        name: "Samsung Galaxy S24+ Cell Phone",
        image: "/placeholder.svg?height=60&width=60",
        price: 499.5,
        quantity: 1,
        status: "Processing",
      },
    ],
  },
];

export default function MyOrders() {
  return (
    <div className=" mx-auto px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">Manage your orders</p>
        </div>
        <Button className="flex items-center gap-2">Tracking Order</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row py-3 items-center justify-between space-y-0 ">
            <div className="text-sm font-medium">Total Orders</div>
            <div className={`p-2 rounded-full text-xl `}>12</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row py-3 items-center justify-between space-y-0 ">
            <div className="text-sm font-medium">Pending Orders</div>
            <div className={`p-2 rounded-full text-xl `}>2</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row py-3 items-center justify-between space-y-0 ">
            <div className="text-sm font-medium">Delivered Orders</div>
            <div className={`p-2 rounded-full text-xl `}>8</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row py-3 items-center justify-between space-y-0 ">
            <div className="text-sm font-medium">Cancel Orders</div>
            <div className={`p-2 rounded-full text-xl `}>2</div>
          </CardHeader>
        </Card>
      </div>

      {orders.map((order, orderIndex) => (
        <Card key={orderIndex} className="w-full">
          <CardHeader className="pb-4 py-3 px-3 bg-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Place Order
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">{order.date}</span>
                  </div>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Total Amount
                  </p>
                  <div className=" font-semibold">${order.total}</div>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Order Status
                  </p>
                  <Badge className={order.statusColor} variant="secondary">
                    {order.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={"/dashboard/orders/asdf"}>
                  <Button type="button" variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  Invoice
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download Invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="h-4 w-4 mr-2" />
                      Archive Order
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Order Id: 4as5df45</p>
              <p className="text-gray-500 text-sm">Tracking: TRK123456789</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 px-3 pt-3 pb-3">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <Badge
                      className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full"
                      variant="secondary"
                    >
                      Qty: {item.quantity}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-lg font-bold text-orange-600">
                      ${item.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex mt-3 sm:mt-0 items-center gap-2">
                  <Button
                    title="Buy Again"
                    variant="outline"
                    size="sm"
                    className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                  </Button>
                  <Button title="View Item" variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                  </Button>
                  <Button title="Review" variant="outline" size="sm">
                    <MessageSquareText className="h-4 w-4 mr-1" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <Separator />
          <CardFooter className="py-2 px-3 ">
            <div className="flex items-center gap-2 ">
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Reorder Items
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download Invoice
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
