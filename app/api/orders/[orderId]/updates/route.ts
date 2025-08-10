import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { shipmentUpdates, orders } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// GET /api/orders/[orderId]/updates - Get all updates for an order
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }



    // Verify order exists
    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.id, orderId))
      .limit(1);

    if (!order.length) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Get all updates for this order
    const updates = await db
      .select()
      .from(shipmentUpdates)
      .where(eq(shipmentUpdates.orderId, orderId))
      .orderBy(shipmentUpdates.timestamp);

    return NextResponse.json({ updates });
  } catch (error) {
    console.error("Error fetching shipment updates:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/orders/[orderId]/updates - Create a new shipment update
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }



    const body = await request.json();
    const { location, status, description } = body;

    // Validate required fields
    if (!location || !status) {
      return NextResponse.json(
        { error: "Location and status are required" },
        { status: 400 }
      );
    }

    // Verify order exists
    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.id, orderId))
      .limit(1);

    if (!order.length) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Create new shipment update
    const newUpdate = await db
      .insert(shipmentUpdates)
      .values({
        orderId,
        location,
        status,
        description,
        timestamp: new Date(),
        createdBy: session.user.id,
      })
      .returning();

    // Update the order status to match the latest update
    await db
      .update(orders)
      .set({ 
        status,
        updatedAt: new Date()
      })
      .where(eq(orders.id, orderId));

    return NextResponse.json({ 
      update: newUpdate[0],
      message: "Shipment update created successfully" 
    });
  } catch (error) {
    console.error("Error creating shipment update:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
