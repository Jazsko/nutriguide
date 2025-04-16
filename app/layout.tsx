export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
