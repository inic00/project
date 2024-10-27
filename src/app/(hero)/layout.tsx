import Links from "@/components/links";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <Links/>
      {children}
    </>
  );
}