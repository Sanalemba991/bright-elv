"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage =
    pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
