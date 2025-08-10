import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { CreateOrderForm } from "@/components/orders/create-order-form";

export default async function CreateOrderPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }



  return (
    <div className="min-h-screen bg-muted/50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Create New Order</h1>
          <p className="text-muted-foreground">
            Add a new shipment order to the system
          </p>
        </div>
        
        <CreateOrderForm />
      </div>
    </div>
  );
}
