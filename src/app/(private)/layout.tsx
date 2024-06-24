import { Header } from "@/components/global/Header";
import "swiper/css";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {children}
    </main>
  );
}
