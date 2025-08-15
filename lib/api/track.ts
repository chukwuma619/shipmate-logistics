import { eq } from "drizzle-orm";
import { db } from "../db";
import { orders } from "../db/schema";
import { shipmentUpdates } from "../db/schema";

export async function getTrackingInfo(tracking_number: string) { 

    if (!tracking_number) {
       return {data: null, error:  "Tracking number is required"}
      }
  
      // Get order details
      const order = await db
        .select()
        .from(orders)
        .where(eq(orders.trackingNumber, tracking_number))
        .limit(1);
  
      if (!order.length) {
        return {data: null, error: "Order not found"}
      }
  
      // Get shipment updates
      const updates = await db
        .select()
        .from(shipmentUpdates)
        .where(eq(shipmentUpdates.orderId, order[0].id))
        .orderBy(shipmentUpdates.timestamp);

        return {data: {order: order[0], updates: updates}, error: null}
}