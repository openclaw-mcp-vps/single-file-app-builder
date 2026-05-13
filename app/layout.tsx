import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Single-File App Builder",
  description: "Bundle your web app into a single deployable executable. Upload your project, configure settings, and download a portable binary."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2b422f43-f1f1-4262-945a-d7fe23e6553a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
