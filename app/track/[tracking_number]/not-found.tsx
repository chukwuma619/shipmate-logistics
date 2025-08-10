import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Home } from "lucide-react";

export default function TrackingNotFound() {
  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-destructive/10 mb-4">
              <Package className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Tracking Not Found</CardTitle>
            <CardDescription>
              We couldn&apos;t find a shipment with that tracking number.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Please check your tracking number and try again. If you believe this is an error, please contact our support team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
