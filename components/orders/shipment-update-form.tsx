"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Package, MapPin, Clock, AlertCircle } from "lucide-react";

interface ShipmentUpdateFormProps {
  orderId: string;
  trackingNumber: string;
  onUpdate?: () => void;
}

const SHIPMENT_STATUSES = [
  { value: "pending", label: "Pending", icon: "📦" },
  { value: "in_transit", label: "In Transit", icon: "🚚" },
  { value: "out_for_delivery", label: "Out for Delivery", icon: "🚛" },
  { value: "delivered", label: "Delivered", icon: "✅" },
  { value: "failed_delivery", label: "Failed Delivery", icon: "❌" },
  { value: "returned", label: "Returned", icon: "↩️" },
  { value: "customs_clearance", label: "Customs Clearance", icon: "🏛️" },
  { value: "arrived_at_facility", label: "Arrived at Facility", icon: "🏢" },
  { value: "scanned", label: "Scanned", icon: "📱" },
  { value: "problem", label: "Problem", icon: "⚠️" },
];

export default function ShipmentUpdateForm({ orderId, trackingNumber, onUpdate }: ShipmentUpdateFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    location: "",
    status: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/orders/${orderId}/updates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create shipment update");
      }

      setSuccess("Shipment update created successfully!");
      setFormData({ location: "", status: "", description: "" });
      
      // Refresh the page or call the callback
      if (onUpdate) {
        onUpdate();
      } else {
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Add Shipment Update
        </CardTitle>
        <CardDescription>
          Update the location and status for tracking number: <strong>{trackingNumber}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location
            </Label>
            <Input
              id="location"
              placeholder="e.g., Lagos Distribution Center, Abuja Warehouse"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Status
            </Label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleInputChange("status", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select shipment status" />
              </SelectTrigger>
              <SelectContent>
                {SHIPMENT_STATUSES.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    <span className="flex items-center gap-2">
                      <span>{status.icon}</span>
                      <span>{status.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="e.g., Package scanned by John Doe, Out for delivery to customer address"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Creating Update..." : "Add Shipment Update"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
