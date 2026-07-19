import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal de alumno",
  robots: { index: false, follow: false },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-100/40 px-4 py-12">
      {children}
    </div>
  );
}
