import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">ShipMate Logistics</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
