export async function generateMetadata() {
  return {
    title: "Dynamic Title",
    description: "Dynamic Description",
  };
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
