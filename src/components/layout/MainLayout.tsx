import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pb-8">
        <Suspense fallback={<div className="flex h-[50vh] items-center justify-center text-muted-foreground">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
