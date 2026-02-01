export default function SchemaMarkup() {
  const hvacBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Cool Made & Co.",
    "description": "Kolkata's premier B2B commercial air conditioning rental company specializing in high-tonnage cooling solutions for trade fairs, warehouses, factories, and corporate events.",
    "url": "https://coolmadeco.com",
    "logo": "https://coolmadeco.com/logo.png",
    "image": "https://coolmadeco.com/hero-image.jpg",
    "telephone": "+91-98740-23696",
    "email": "coolmadecompany@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12/1 Ismail Street",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kolkata"
      },
      {
        "@type": "State",
        "name": "West Bengal"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "serviceType": [
      "Commercial AC Rental",
      "Industrial Air Conditioning",
      "Tower AC Rental",
      "Portable AC Rental",
      "Ductable AC Systems",
      "Trade Fair Cooling Solutions",
      "Warehouse Cooling",
      "Factory Air Conditioning"
    ],
    "priceRange": "$$$$",
    "openingHours": "Mo-Su 00:00-24:00",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
    "currenciesAccepted": "INR",
    "sameAs": [
      "https://www.linkedin.com/company/coolmadeco",
      "https://www.facebook.com/coolmadeco"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial AC Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tower AC Rental",
            "description": "High-capacity tower air conditioners for large open spaces, trade fairs, and exhibitions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portable AC Rental",
            "description": "Flexible, mobile cooling solutions for temporary setups and events."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ductable AC Systems",
            "description": "Centralized cooling systems for factories, manufacturing plants, and large commercial facilities."
          }
        }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cool Made & Co.",
    "legalName": "Cool Made & Co. Private Limited",
    "url": "https://coolmadeco.com",
    "logo": "https://coolmadeco.com/logo.png",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Cool Made & Co. Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98740-23696",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
    "slogan": "Kolkata's Premier Commercial Cooling Partner"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide residential AC rentals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Cool Made & Co. specializes exclusively in high-tonnage B2B and institutional requirements. We do not offer residential AC rental services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum capacity for rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services are designed for commercial-scale requirements, typically starting from 5-ton units for smaller commercial spaces to 500+ tons for large trade fairs and industrial installations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide 24/7 support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide round-the-clock technical support and maintenance services for all our commercial AC rental clients."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve trade fairs, exhibitions, warehouses, factories, manufacturing plants, corporate events, data centers, pharmaceutical facilities, and other commercial establishments."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
