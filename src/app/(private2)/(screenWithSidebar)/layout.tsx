import { Sidebar } from "@/components/global/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex w-full flex-col">{children}</section>
    </main>
  );
}
