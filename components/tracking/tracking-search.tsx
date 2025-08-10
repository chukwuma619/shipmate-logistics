"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function TrackingSearch() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Navigate to tracking page
    router.push(`/track/${trackingNumber.trim()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-2">
      <Input
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className="flex-1"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !trackingNumber.trim()}>
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
}
