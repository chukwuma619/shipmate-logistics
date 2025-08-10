"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const createOrderSchema = z.object({
  customerName: z.string().min(2, "Customer name must be at least 2 characters"),
  customerEmail: z.string().email("Please enter a valid email address"),
  customerPhone: z.string().optional(),
  shippingAddress: z.string().min(10, "Shipping address must be at least 10 characters"),
  destinationAddress: z.string().min(10, "Destination address must be at least 10 characters"),
  estimatedDelivery: z.string().optional(),
});

type CreateOrderForm = z.infer<typeof createOrderSchema>;

export function CreateOrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<CreateOrderForm>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      shippingAddress: "",
      destinationAddress: "",
      estimatedDelivery: "",
    },
  });

  const onSubmit = async (data: CreateOrderForm) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create order");
      }

      const result = await response.json();
      router.push(`/dashboard/orders/${result.order.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Order</CardTitle>
        <CardDescription>
          Enter customer and shipping information to create a new order
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Customer Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerName">Customer Name *</Label>
                <Input
                  id="customerName"
                  placeholder="Enter customer name"
                  {...form.register("customerName")}
                  disabled={isLoading}
                />
                {form.formState.errors.customerName && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.customerName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerEmail">Email *</Label>
                <Input
                  id="customerEmail"
                  type="email"
                  placeholder="Enter customer email"
                  {...form.register("customerEmail")}
                  disabled={isLoading}
                />
                {form.formState.errors.customerEmail && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.customerEmail.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerPhone">Phone Number</Label>
              <Input
                id="customerPhone"
                type="tel"
                placeholder="Enter customer phone number"
                {...form.register("customerPhone")}
                disabled={isLoading}
              />
              {form.formState.errors.customerPhone && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.customerPhone.message}
                </p>
              )}
            </div>
          </div>

          {/* Shipping Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipping Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="shippingAddress">Shipping Address *</Label>
              <Textarea
                id="shippingAddress"
                placeholder="Enter complete shipping address"
                {...form.register("shippingAddress")}
                disabled={isLoading}
                rows={3}
              />
              {form.formState.errors.shippingAddress && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.shippingAddress.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="destinationAddress">Destination Address *</Label>
              <Textarea
                id="destinationAddress"
                placeholder="Enter complete destination address"
                {...form.register("destinationAddress")}
                disabled={isLoading}
                rows={3}
              />
              {form.formState.errors.destinationAddress && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.destinationAddress.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimatedDelivery">Estimated Delivery Date</Label>
              <Input
                id="estimatedDelivery"
                type="date"
                {...form.register("estimatedDelivery")}
                disabled={isLoading}
              />
              {form.formState.errors.estimatedDelivery && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.estimatedDelivery.message}
                </p>
              )}
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating Order..." : "Create Order"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
