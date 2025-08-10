import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { orders, shipmentUpdates } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// GET /api/track/[tracking_number] - Public tracking info
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ tracking_number: string }> }
) {
  try {
    const { tracking_number } = await params;

    if (!tracking_number) {
      return NextResponse.json(
        { error: "Tracking number is required" },
        { status: 400 }
      );
    }

    // Get order details
    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.trackingNumber, tracking_number))
      .limit(1);

    if (!order.length) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Get shipment updates
    const updates = await db
      .select()
      .from(shipmentUpdates)
      .where(eq(shipmentUpdates.orderId, order[0].id))
      .orderBy(shipmentUpdates.timestamp);

    return NextResponse.json({
      order: order[0],
      updates: updates,
    });
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
