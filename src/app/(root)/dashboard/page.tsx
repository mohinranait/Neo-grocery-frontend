"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Package,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Eye,
  Calendar,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "12",
    description: "+20.1% last month",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Total cost",
    value: "$15, 451",
    description: "+15% last month",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Pending Orders",
    value: "3",
    description: "Processing is in progress.",
    icon: ShoppingCart,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Savings",
    value: "$2,300",
    description: "From discount",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const recentOrders = [
  {
    id: "#ORD-001",
    date: "২৫ নভেম্বর, ২০২৪",
    status: "ডেলিভারড",
    amount: "৳১,২৫০",
    items: 3,
  },
  {
    id: "#ORD-002",
    date: "২২ নভেম্বর, ২০২৪",
    status: "শিপিং",
    amount: "৳৮৫০",
    items: 2,
  },
  {
    id: "#ORD-003",
    date: "২০ নভেম্বর, ২০২৪",
    status: "প্রসেসিং",
    amount: "৳২,১০০",
    items: 5,
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 px-4 md:px-4 ">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">
            Today - {format(new Date(Date.now()), "MMM dd, yyyy")}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>সাম্প্রতিক অর্ডার</CardTitle>
            <CardDescription>
              আপনার সাম্প্রতিক অর্ডারগুলোর তালিকা
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {order.id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.date} • {order.items} আইটেম
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        order.status === "ডেলিভারড"
                          ? "default"
                          : order.status === "শিপিং"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                    <span className="font-medium">{order.amount}</span>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                সব অর্ডার দেখুন
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>দ্রুত অ্যাকশন</CardTitle>
            <CardDescription>সাধারণ কাজগুলো দ্রুত করুন</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <Package className="mr-2 h-4 w-4" />
              অর্ডার ট্র্যাক করুন
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              পেমেন্ট হিস্টরি
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              নতুন অর্ডার করুন
            </Button>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">সাপোর্ট</h4>
              <p className="text-sm text-muted-foreground mb-2">
                কোন সমস্যা? আমাদের সাথে যোগাযোগ করুন
              </p>
              <Button variant="outline" size="sm" className="w-full">
                সাপোর্ট টিমের সাথে চ্যাট
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
