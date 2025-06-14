"use client";

import { useState } from "react";
import {
  Download,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
  Eye,
  RotateCcw,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Hash,
  FileText,
  MessageSquareText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  reviews: number;
}

interface OrderDetails {
  orderNumber: string;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  trackingNumber: string;
  invoiceNumber: string;
  estimatedDelivery: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string[];
  };
  paymentMethod: {
    type: string;
    lastFour: string;
    cardType: "visa" | "mastercard" | "amex";
  };
  orderSummary: {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
  };
  items: OrderItem[];
}

const orderData: OrderDetails = {
  orderNumber: "ORD-2024-001234",
  orderDate: "June 12, 2025",
  status: "shipped",
  trackingNumber: "TRK123456789",
  invoiceNumber: "TRK123456789",
  estimatedDelivery: "June 15, 2025",
  customer: {
    name: "Kazi Anwar",
    email: "kazi.anwar@email.com",
    phone: "+1 (555) 123-4567",
    address: ["114 CROFTSTONE DR", "RICHMOND, VA 23237-2491", "United States"],
  },
  paymentMethod: {
    type: "Mastercard",
    lastFour: "9768",
    cardType: "mastercard",
  },
  orderSummary: {
    subtotal: 87.34,
    shipping: 0.0,
    tax: 0.0,
    total: 499.6,
  },
  items: [
    {
      id: "1",
      name: "Samsung Galaxy S24+ Cell Phone",
      image: "/placeholder.svg?height=80&width=80",
      price: 499.5,
      quantity: 1,
      rating: 4.5,
      reviews: 1234,
    },
  ],
};

const statusSteps = [
  {
    key: "pending",
    label: "Order Placed",
    icon: Clock,
    description: "Your order has been placed",
  },
  {
    key: "processing",
    label: "Processing",
    icon: Package,
    description: "We're preparing your order",
  },
  {
    key: "shipped",
    label: "Shipped",
    icon: Truck,
    description: "Your order is on the way",
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: CheckCircle,
    description: "Order delivered successfully",
  },
];

export default function OrderDetailsPage() {
  const getStatusIndex = (status: string) => {
    return statusSteps.findIndex((step) => step.key === status);
  };
  const [isDownloading, setIsDownloading] = useState(false);

  const currentStatusIndex = getStatusIndex(orderData.status);
  const progressPercentage =
    ((currentStatusIndex + 1) / statusSteps.length) * 100;

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const generateInvoiceHTML = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Invoice ${orderData.invoiceNumber}</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .company-name { font-size: 28px; font-weight: bold; margin-bottom: 5px; }
            .invoice-title { font-size: 24px; color: #666; }
            .info-section { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .info-block { width: 48%; }
            .info-block h3 { margin-bottom: 10px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table th, .table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .table th { background-color: #f5f5f5; font-weight: bold; }
            .table .text-right { text-align: right; }
            .totals { margin-top: 20px; }
            .totals table { width: 300px; margin-left: auto; }
            .total-row { font-weight: bold; background-color: #f0f0f0; }
            .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="company-name">Your Company Name</div>
            <div class="invoice-title">INVOICE</div>
        </div>
        
        <div class="info-section">
            <div class="info-block">
                <h3>Bill To:</h3>
                <p><strong>${orderData.customer.name}</strong></p>
                <p>${orderData.customer.email}</p>
                <p>${orderData.customer.phone}</p>
                ${orderData.customer.address
                  .map((line) => `<p>${line}</p>`)
                  .join("")}
            </div>
            <div class="info-block">
                <h3>Invoice Details:</h3>
                <p><strong>Invoice #:</strong> #INV:454554</p>
                <p><strong>Order #:</strong> ORD-7445454</p>
                <p><strong>Date:</strong> June 12, 2025</p>
                <p><strong>Status:</strong> Processing</p>
                ${
                  orderData.trackingNumber
                    ? `<p><strong>Tracking:</strong> ${orderData.trackingNumber}</p>`
                    : ""
                }
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th class="text-right">Unit Price</th>
                    <th class="text-right">Quantity</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                ${orderData.items
                  .map(
                    (item) => `
                    <tr>
                        <td>${item.name}</td>
                       
                        <td class="text-right">${formatCurrency(
                          item.price
                        )}</td>
                        <td class="text-right">${item.quantity}</td>
                        <td class="text-right">${formatCurrency(
                          item.price * item.quantity
                        )}</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>

        <div class="totals">
            <table class="table">
                <tr><td>Subtotal:</td><td class="text-right">${formatCurrency(
                  orderData.orderSummary.subtotal
                )}</td></tr>
                <tr><td>Shipping:</td><td class="text-right">${formatCurrency(
                  orderData.orderSummary.shipping
                )}</td></tr>
                <tr><td>Tax:</td><td class="text-right">${formatCurrency(
                  orderData.orderSummary.tax
                )}</td></tr>
               
                     <tr><td>Discount:</td><td class="text-right">-${formatCurrency(
                       0
                     )}</td></tr>
              
                <tr class="total-row"><td><strong>Total:</strong></td><td class="text-right"><strong>${formatCurrency(
                  orderData.orderSummary.total
                )}</strong></td></tr>
            </table>
        </div>

        <div class="footer">
            <p>Thank you for your business!</p>
            <p>For questions about this invoice, please contact us at support@company.com</p>
        </div>
    </body>
    </html>
    `;
  };

  const downloadInvoice = async () => {
    setIsDownloading(true);

    try {
      const invoiceHTML = generateInvoiceHTML();
      const blob = new Blob([invoiceHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `Invoice-${orderData.invoiceNumber}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading invoice:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  space-y-4">
        {/* header */}
        <div className="">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-semibold">Order Details</h1>

                <p className="text-sm text-gray-500">
                  Order #{orderData.orderNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                className={getStatusColor(orderData.status)}
                variant="secondary"
              >
                {orderData.status.charAt(0).toUpperCase() +
                  orderData.status.slice(1)}
              </Badge>
              <Button
                onClick={downloadInvoice}
                disabled={isDownloading}
                variant="outline"
                size="sm"
              >
                <Download className="h-4 w-4 mr-2" />
                {isDownloading ? "Downloading..." : "Download Invoice"}
              </Button>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Order Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-medium">June 12, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Invoice Number</p>
                  <p className="font-medium">INV-2024-001234</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Tracking Number</p>
                  <p className="font-medium">TRK123456789</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Order Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Order Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{Math.round(progressPercentage)}% Complete</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {statusSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isCompleted = index <= currentStatusIndex;
                      const isCurrent = index === currentStatusIndex;

                      return (
                        <div
                          key={step.key}
                          className="flex flex-col items-center text-center"
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                              isCompleted
                                ? isCurrent
                                  ? "bg-blue-600 text-white"
                                  : "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-400"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4
                            className={`font-medium text-sm ${
                              isCompleted ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </h4>
                          <p
                            className={`text-xs mt-1 ${
                              isCompleted ? "text-gray-600" : "text-gray-400"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="grid sm:grid-cols-2 gap-4 xl:grid-cols-1 ">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(orderData.orderSummary.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>{formatCurrency(orderData.orderSummary.shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax:</span>
                  <span>{formatCurrency(orderData.orderSummary.tax)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span className="text-green-600">
                    {formatCurrency(orderData.orderSummary.total)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{orderData.customer.name}</p>
                  {orderData.customer.address.map((line, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-400 rounded"></div>
                  <span className="text-sm">
                    {orderData.paymentMethod.type} ending in{" "}
                    {orderData.paymentMethod.lastFour}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
