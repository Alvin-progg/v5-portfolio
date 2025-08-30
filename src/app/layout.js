
import "./globals.css";



export const metadata = {
  title: "Alvin-progg",
  description: "v5-portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      >
        {children}
      </body>
    </html>
  );
}
