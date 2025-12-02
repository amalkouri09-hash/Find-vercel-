export const metadata = {
  title: 'Find',
  description: 'Bilingual job search'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
