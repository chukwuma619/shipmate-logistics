import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, MapPin, Truck } from "lucide-react";
import { format } from "date-fns";

async function getTrackingInfo(trackingNumber: string) {
  try {
    const response = await fetch(`/api/track/${trackingNumber}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching tracking info:', error);
    return null;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'in_transit':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'out_for_delivery':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
    case 'delivered':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'pending':
      return <Package className="h-4 w-4" />;
    case 'in_transit':
      return <Truck className="h-4 w-4" />;
    case 'out_for_delivery':
      return <Truck className="h-4 w-4" />;
    case 'delivered':
      return <Package className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
}

export default async function TrackingPage({
  params,
}: {
  params: Promise<{ tracking_number: string }>;
}) {
  const { tracking_number } = await params;
  const trackingData = await getTrackingInfo(tracking_number);

  if (!trackingData) {
    notFound();
  }

  const { order, updates } = trackingData;

  return (
    <div className="min-h-screen bg-muted/50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Track Your Package</h1>
          <p className="text-muted-foreground">Tracking Number: {order.trackingNumber}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">{order.customerName}</h3>
                  <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
                  {order.customerPhone && (
                    <p className="text-sm text-muted-foreground">{order.customerPhone}</p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Shipping Address</h4>
                  <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Destination</h4>
                  <p className="text-sm text-muted-foreground">{order.destinationAddress}</p>
                </div>

                {order.estimatedDelivery && (
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Estimated Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(order.estimatedDelivery), 'PPP')}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-foreground mb-2">Current Status</h4>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize">
                      {order.status.replace('_', ' ')}
                    </span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Timeline</CardTitle>
                <CardDescription>
                  Latest updates on your shipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                {updates.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-sm font-medium text-foreground">No updates yet</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your shipment is being processed. Updates will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {updates.map((update: { id: string; location: string; status: string; description?: string; timestamp: string }, index: number) => (
                      <div key={update.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-blue-600" />
                          </div>
                          {index < updates.length - 1 && (
                            <div className="w-0.5 h-6 bg-gray-200 mx-auto mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-foreground">
                              {update.location}
                            </h4>
                            <time className="text-sm text-muted-foreground">
                              {format(new Date(update.timestamp), 'MMM d, yyyy h:mm a')}
                            </time>
                          </div>
                          <Badge className={`mt-1 ${getStatusColor(update.status)}`}>
                            {getStatusIcon(update.status)}
                            <span className="ml-1 capitalize">
                              {update.status.replace('_', ' ')}
                            </span>
                          </Badge>
                          {update.description && (
                            <p className="mt-2 text-sm text-muted-foreground">
                              {update.description}
                            </p>
                          )}
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
  );
}
