import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ServiceElite - Emergency HVAC Repair | Get 3 Free Quotes in 30 Minutes",
  description: "Need emergency HVAC repair? Get connected with licensed, insured contractors in your area within 15 minutes. Free quotes, no obligation. Available 24/7 for heating and cooling emergencies.",
  keywords: "HVAC repair, emergency AC repair, furnace repair, heating repair, air conditioning repair, licensed contractors, emergency HVAC service",
  authors: [{ name: "ServiceElite" }],
  creator: "ServiceElite",
  publisher: "ServiceElite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ServiceElite - Emergency HVAC Repair | Get 3 Free Quotes in 30 Minutes",
    description: "Need emergency HVAC repair? Get connected with licensed, insured contractors in your area within 15 minutes. Free quotes, no obligation.",
    url: '/',
    siteName: 'ServiceElite',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ServiceElite - Emergency HVAC Repair",
    description: "Get connected with licensed HVAC contractors in your area within 15 minutes. Free quotes, no obligation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you set up:
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ServiceElite",
              "description": "Emergency HVAC repair and contractor connection service",
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              "telephone": "24/7 Emergency Service",
              "serviceType": "HVAC Contractor Network",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "HVAC Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency HVAC Repair"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Air Conditioning Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Furnace Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Analytics - Uncomment and add your GA4 ID when ready */}
        {/* 
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Optional: Add a global loading indicator or notification system here */}
      </body>
    </html>
  );
}