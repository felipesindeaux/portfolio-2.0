import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icon.png" />
        <title>Felipe Sindeaux | Portfolio</title>
        <meta
          name="description"
          content="Felipe Sindeaux é um desenvolvedor full stack, simples, objetivo e moderno"
        />
        <meta
          name="keywords"
          content="developer, freelancer, react, next, nextjs, html, css, javascript, typescript, ts, js, modern-ui, modern-ux, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Felipe Sindeaux" />
        <meta name="theme-color" content="#121214" />

        <meta property="og:title" content="Felipe Sindeaux" />
        <meta
          property="og:description"
          content="Felipe Sindeaux é um desenvolvedor full stack, simples, objetivo e moderno"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/89540255?v=4"
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
