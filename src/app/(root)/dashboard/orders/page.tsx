"use client";
import {
  Calendar,
  MoreHorizontal,
  Eye,
  RotateCcw,
  Archive,
  Download,
  MessageSquareText,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
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
import { getAllOrdersByAuthUser } from "@/actions/orderApi";
import { useEffect, useState } from "react";
import { TOrder, TOrderStatus } from "@/types/order.type";
import { cn } from "@/lib/utils";
import { currency } from "@/helpers/utils";
import { setCommentModal } from "@/redux/features/uiSlice";
import { useAppDispatch } from "@/hooks/useRedux";
const statusStyles: Record<TOrderStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Processing: "bg-blue-100 text-blue-800 border-blue-300",
  Shipped: "bg-purple-100 text-purple-800 border-purple-300",
  Delivered: "bg-green-100 text-green-800 border-green-300",
  Cancelled: "bg-red-100 text-red-800 border-red-300",
};

export default function MyOrders() {
  const dispatch = useAppDispatch();
  const [orders, setOrders] = useState<TOrder[]>([]);

  const pendingOrders = orders?.filter((order) => order.status === "Pending");
  const processingOrders = orders?.filter(
    (order) => order.status === "Processing"
  );
  const shippedOrders = orders?.filter((order) => order.status === "Shipped");
  const deliveredOrders = orders?.filter(
    (order) => order.status === "Delivered"
  );
  const cancelledOrders = orders?.filter(
    (order) => order.status === "Cancelled"
  );

  const orderStats = [
    {
      id: "total",
      label: "Total Orders",
      value: orders?.length || 0,
      icon: <ShoppingCart className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "pending",
      label: "Pending Orders",
      count: pendingOrders?.length || 0,
      icon: <Clock className="h-5 w-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      status: "Pending",
    },
    {
      id: "processing",
      label: "Processing Orders",
      count: processingOrders?.length || 0,
      icon: <Package className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      status: "Processing",
    },
    {
      id: "shipped",
      label: "Shipped Orders",
      count: shippedOrders?.length || 0,
      icon: <Truck className="h-5 w-5" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      status: "Shipped",
    },
    {
      id: "delivered",
      label: "Delivered Orders",
      count: deliveredOrders?.length || 0,
      icon: <CheckCircle className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      status: "Delivered",
    },
    {
      id: "cancelled",
      label: "Cancelled Orders",
      count: cancelledOrders?.length || 0,
      icon: <XCircle className="h-5 w-5" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      status: "Cancelled",
    },
  ];

  const getAllOrders = async () => {
    try {
      const response = await getAllOrdersByAuthUser();
      console.log({ response });
      setOrders(response?.payload?.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    getAllOrders();
  }, []);

  console.log({ orders });

  return (
    <div className=" mx-auto px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">Manage your orders</p>
        </div>
        <Button className="flex items-center gap-2">Tracking Order</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {orderStats?.map((order, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${order.bgColor}`}>
                    <div className={order.color}>{order.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {order.label}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">
                    {order.count}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {orders.map((order, orderIndex) => (
        <Card key={orderIndex} className="w-full">
          <CardHeader className="pb-4 py-3 px-3 bg-gray-100">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap items-start gap-4">
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Place Order
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">
                      {" "}
                      {format(
                        new Date(order.createdAt),
                        "dd MMM yyyy, hh:mm a"
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Total Amount
                  </p>
                  <div className=" font-semibold">${order.totalAmount}</div>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500 ">
                    Order Status
                  </p>
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold px-3 py-[2px] rounded-full border",
                      statusStyles[order.status]
                    )}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/dashboard/orders/${order?.uid}`}>
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
            <div className="flex flex-wrap justify-between items-center">
              <p className="text-gray-500 text-sm">Order Id: {order?.uid}</p>
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
                      className="absolute -top-2 -right-2 bg-main text-white text-xs px-2 py-1 rounded-full"
                      variant="secondary"
                    >
                      Qty: {item.quantity}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-lg font-bold text-main">
                      {currency}
                      {item.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Total: {currency}
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    {item?.attributes &&
                      Object.keys(item?.attributes)?.map((attr) => {
                        if (!item?.attributes) {
                          return;
                        }
                        return (
                          <p
                            key={attr}
                            className="text-xs text-muted-foreground"
                          >
                            {attr}: {item?.attributes[attr]}
                          </p>
                        );
                      })}
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
                  <Button
                    onClick={() => {
                      dispatch(
                        setCommentModal({
                          name: item?.name,
                          pId: item?.product,
                          image: item?.image,
                        })
                      );
                    }}
                    title="Review"
                    variant="outline"
                    size="sm"
                  >
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
