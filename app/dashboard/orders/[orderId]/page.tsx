import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { orders, shipmentUpdates } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, MapPin, Clock, User, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import ShipmentUpdateForm from "@/components/orders/shipment-update-form";

interface PageProps {
  params: Promise<{ orderId: string }>;
}

function getStatusColor(status: string) {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "in_transit":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    case "out_for_delivery":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "failed_delivery":
    case "problem":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    case "returned":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "delivered":
      return "✅";
    case "in_transit":
      return "🚚";
    case "out_for_delivery":
      return "🚛";
    case "failed_delivery":
      return "❌";
    case "returned":
      return "↩️";
    case "customs_clearance":
      return "🏛️";
    case "arrived_at_facility":
      return "🏢";
    case "scanned":
      return "📱";
    case "problem":
      return "⚠️";
    default:
      return "📦";
  }
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { orderId } = await params;
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }



  // Get order details
  const order = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId))
    .limit(1);

  if (!order.length) {
    notFound();
  }

  // Get shipment updates
  const updates = await db
    .select()
    .from(shipmentUpdates)
    .where(eq(shipmentUpdates.orderId, orderId))
    .orderBy(shipmentUpdates.timestamp);

  const orderData = order[0];

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/orders">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Orders
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Order Details</h1>
                <p className="text-muted-foreground">
                  Tracking Number: {orderData.trackingNumber}
                </p>
              </div>
            </div>
            <Badge className={getStatusColor(orderData.status)}>
              {getStatusIcon(orderData.status)}
              <span className="ml-1 capitalize">
                {orderData.status.replace('_', ' ')}
              </span>
            </Badge>
          </div>
        </div>

        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{orderData.customerName}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {orderData.customerEmail}
                    </div>
                    {orderData.customerPhone && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {orderData.customerPhone}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">From</h4>
                    <p className="text-sm text-muted-foreground">{orderData.shippingAddress}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">To</h4>
                    <p className="text-sm text-muted-foreground">{orderData.destinationAddress}</p>
                  </div>
                  {orderData.estimatedDelivery && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Estimated Delivery
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(orderData.estimatedDelivery), 'PPP')}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Created</h4>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(orderData.createdAt), 'PPP p')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Last Updated</h4>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(orderData.updatedAt), 'PPP p')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Add Shipment Update Form */}
              <ShipmentUpdateForm 
                orderId={orderId} 
                trackingNumber={orderData.trackingNumber}
              />
            </div>

            {/* Shipment Updates Timeline */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Shipment Updates ({updates.length})
                  </CardTitle>
                  <CardDescription>
                    Timeline of all shipment updates and status changes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {updates.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-2 text-sm font-medium text-foreground">No updates yet</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Add the first shipment update using the form on the left.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {updates.map((update, index) => (
                        <div key={update.id} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm">{getStatusIcon(update.status)}</span>
                            </div>
                            {index < updates.length - 1 && (
                              <div className="w-0.5 h-6 bg-gray-200 mx-auto mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-foreground capitalize">
                                  {update.status.replace('_', ' ')}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {update.location}
                                </p>
                                {update.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {update.description}
                                  </p>
                                )}
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">
                                  {format(new Date(update.timestamp), 'MMM dd, yyyy')}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {format(new Date(update.timestamp), 'HH:mm')}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
