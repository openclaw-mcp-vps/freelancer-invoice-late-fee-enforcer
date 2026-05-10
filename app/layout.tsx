import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Late Fee Enforcer — Automatically Add Late Fees to Overdue Invoices',
  description: 'Connect your invoice platform and automatically calculate and apply late fees based on your custom terms. Works with QuickBooks, FreshBooks, and Wave.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4d06baa6-5171-4a68-a088-85c49d2c0d39"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
