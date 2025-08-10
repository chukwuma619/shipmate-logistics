import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";

// GET /api/orders - List orders (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }


    const allOrders = await db.select().from(orders).orderBy(orders.createdAt);

    return NextResponse.json({ orders: allOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create new order (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      destinationAddress,
      estimatedDelivery,
    } = body;

    // Generate tracking number (simple implementation)
    const trackingNumber = `SM${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    const newOrder = await db.insert(orders).values({
      trackingNumber,
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      destinationAddress,
      estimatedDelivery: estimatedDelivery ? new Date(estimatedDelivery) : null,
      createdBy: session.user.id,
    }).returning();

    return NextResponse.json({ order: newOrder[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
