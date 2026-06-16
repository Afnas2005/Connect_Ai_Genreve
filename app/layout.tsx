import './globals.css';

export const metadata = {
  title: 'GenReve Connect AI',
  description: 'AI discovery landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
