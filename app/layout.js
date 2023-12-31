import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Mono:wght@600;700&display=swap" rel="stylesheet" />

        <meta property="og:title" content='Sofia Truta' />
        <meta property="og:type" content="website" />
        <meta property="og:image" content='https://i.imgur.com/1209pAH.png' />
        <meta property="og:url" content="https://www.sofiatruta.com/#about" />
        <meta name='description' property='og:description' content='Full Stack Software Developer with a background in healthcare.' />

      </head>
      <body className={raleway.className}>
        {children}
      </body>

    </html>
  )
}
