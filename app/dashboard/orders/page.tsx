import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

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

export default async function OrdersPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }



  // Fetch all orders
  const allOrders = await db.select().from(orders).orderBy(orders.createdAt);

  return (
    <div className="min-h-screen bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground">
              Manage all shipment orders
            </p>
          </div>
          <Link href="/dashboard/orders/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Order
            </Button>
          </Link>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {allOrders.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-medium text-foreground">No orders yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get started by creating your first order.
                </p>
                <div className="mt-6">
                  <Link href="/dashboard/orders/new">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Order
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{order.customerName}</CardTitle>
                        <CardDescription className="text-sm">
                          {order.trackingNumber}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
                      {order.customerPhone && (
                        <p className="text-sm text-muted-foreground">{order.customerPhone}</p>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      <p>Created: {format(new Date(order.createdAt), 'MMM d, yyyy')}</p>
                      {order.estimatedDelivery && (
                        <p>Est. Delivery: {format(new Date(order.estimatedDelivery), 'MMM d, yyyy')}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Link href={`/track/${order.trackingNumber}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
