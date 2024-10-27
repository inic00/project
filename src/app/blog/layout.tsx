
export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <div className="max-w-2xl mx-auto">{children}</div>;
}