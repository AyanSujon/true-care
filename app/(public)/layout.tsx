import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";



export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
