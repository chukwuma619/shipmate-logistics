import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Welcome back, {session.user.name || session.user.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              
              <form action="/api/auth/sign-out" method="POST">
                <Button type="submit" variant="outline">
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Total Orders</CardTitle>
                <CardDescription>All time orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No orders yet</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Shipments</CardTitle>
                <CardDescription>Currently in transit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No active shipments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivered</CardTitle>
                <CardDescription>Successfully delivered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No deliveries yet</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link href="/dashboard/orders/new">
                    <Button className="h-20 flex flex-col items-center justify-center w-full">
                      <span className="text-lg">📦</span>
                      <span className="text-sm mt-1">Create Order</span>
                    </Button>
                  </Link>
                  <Link href="/dashboard/orders">
                    <Button className="h-20 flex flex-col items-center justify-center w-full" variant="outline">
                      <span className="text-lg">📋</span>
                      <span className="text-sm mt-1">View Orders</span>
                    </Button>
                  </Link>
                  <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                    <span className="text-lg">📊</span>
                    <span className="text-sm mt-1">View Reports</span>
                  </Button>
                  <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                    <span className="text-lg">⚙️</span>
                    <span className="text-sm mt-1">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
