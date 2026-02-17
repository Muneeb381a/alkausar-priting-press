// work.js – Alkausar Printing Portfolio Data (100+ items)

const portfolioData = [
  // ═══════════════════════════════════════════════════════════
  // STATIONERY (16 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Premium Business Cards (Foil + UV)",
    description:
      "Thick 400gsm stock with spot UV and rose gold foil. Perfect for professional networking with a luxury touch.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/stack-business-cards-white-surface_23-2148229088.jpg",
      "https://img.freepik.com/free-photo/close-up-business-cards-stack_23-2148229086.jpg",
      "https://img.freepik.com/free-photo/business-cards-mockup_23-2148229084.jpg",
      "https://img.freepik.com/free-photo/luxury-business-cards-gold-foil_23-2148229082.jpg",
    ],
  },
  {
    title: "Embossed Letterheads",
    description:
      "Premium watermarked paper with blind embossing. Ideal for official correspondence with subtle elegance.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/close-up-letterhead-mockup_23-2148229076.jpg",
      "https://img.freepik.com/free-photo/letterhead-mockup_23-2148229074.jpg",
      "https://img.freepik.com/free-photo/embossed-letterhead-stack_23-2148229072.jpg",
    ],
  },
  {
    title: "Custom Die-Cut Envelopes",
    description:
      "Window envelopes in custom sizes and colors with security tint options. Enhances brand identity in mailing.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/envelope-mockup_23-2148229064.jpg",
      "https://img.freepik.com/free-photo/close-up-envelope-mockup_23-2148229062.jpg",
      "https://img.freepik.com/free-photo/die-cut-envelope-design_23-2148229060.jpg",
    ],
  },
  {
    title: "Notepad Sets",
    description:
      "Spiral-bound notepads with personalized covers and perforated pages. Great for office and promotional use.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/notebook-mockup_23-2148229052.jpg",
      "https://img.freepik.com/free-photo/close-up-notebook_23-2148229050.jpg",
      "https://img.freepik.com/free-photo/personalized-notepad-set_23-2148229048.jpg",
    ],
  },
  {
    title: "Compliment Slips",
    description:
      "Custom printed compliment slips on premium paper. Used for short notes or thank-yous in business correspondence.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/compliment-slip-mockup_23-2148229044.jpg",
      "https://img.freepik.com/free-photo/close-up-compliment-slip_23-2148229042.jpg",
      "https://img.freepik.com/free-photo/branded-compliment-slips_23-2148229040.jpg",
    ],
  },
  {
    title: "Sticky Notes Pads",
    description:
      "Branded sticky notes in various sizes with repositionable adhesive. Perfect for office branding.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/sticky-notes-mockup_23-2148229036.jpg",
      "https://img.freepik.com/free-photo/close-up-sticky-notes_23-2148229034.jpg",
      "https://img.freepik.com/free-photo/custom-sticky-pad-set_23-2148229032.jpg",
    ],
  },
  {
    title: "Pocket Folders",
    description:
      "Double-pocket presentation folders with business card slits and gloss lamination for durability.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/pocket-folder-mockup_23-2148229028.jpg",
      "https://img.freepik.com/free-photo/close-up-pocket-folder_23-2148229026.jpg",
      "https://img.freepik.com/free-photo/presentation-folder-design_23-2148229024.jpg",
    ],
  },
  {
    title: "Invoice & Receipt Pads",
    description:
      "Duplicate or triplicate carbonless invoice pads with sequential numbering for professional billing.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/invoice-pad-mockup_23-2148229020.jpg",
      "https://img.freepik.com/free-photo/close-up-invoice-pad_23-2148229018.jpg",
      "https://img.freepik.com/free-photo/carbonless-invoice-set_23-2148229016.jpg",
    ],
  },
  {
    title: "Greeting Cards with Envelopes",
    description:
      "Folded greeting cards on premium cardstock for holidays, birthdays, and corporate events.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/greeting-card-mockup_23-2148229012.jpg",
      "https://img.freepik.com/free-photo/close-up-greeting-card_23-2148229010.jpg",
      "https://img.freepik.com/free-photo/custom-greeting-cards-set_23-2148229008.jpg",
    ],
  },
  {
    title: "Appointment Cards",
    description:
      "Handy reminder cards for clinics, salons, and service businesses on 350gsm stock.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/appointment-card-mockup_23-2148229004.jpg",
      "https://img.freepik.com/free-photo/close-up-appointment-card_23-2148229002.jpg",
    ],
  },
  {
    title: "Loyalty & Membership Cards",
    description:
      "PVC loyalty cards with barcode or QR code printing. Durable and professional for retail.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/loyalty-card-mockup_23-2148229000.jpg",
      "https://img.freepik.com/free-photo/close-up-loyalty-card_23-2148228998.jpg",
    ],
  },
  {
    title: "Desk Calendars",
    description:
      "Wire-bound desk calendars with custom monthly artwork and company branding on each page.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/desk-calendar-mockup_23-2148228992.jpg",
      "https://img.freepik.com/free-photo/close-up-desk-calendar_23-2148228990.jpg",
    ],
  },
  {
    title: "Wall Calendars (A3)",
    description:
      "Large-format full-color wall calendars on gloss art paper with custom artwork for every month.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/wall-calendar-mockup_23-2148228988.jpg",
      "https://img.freepik.com/free-photo/close-up-wall-calendar_23-2148228986.jpg",
    ],
  },
  {
    title: "With-Compliments Stationery Sets",
    description:
      "Matching sets of letterhead, business cards, and envelopes in a unified brand design.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/stationery-set-mockup_23-2148228996.jpg",
      "https://img.freepik.com/free-photo/close-up-stationery-set_23-2148228994.jpg",
    ],
  },
  {
    title: "Rubber Stamps",
    description:
      "Custom self-inking and traditional rubber stamps for company logos, addresses, and official use.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/rubber-stamp-mockup_23-2148228984.jpg",
      "https://img.freepik.com/free-photo/close-up-rubber-stamp_23-2148228982.jpg",
    ],
  },
  {
    title: "Wax Seal Stamp Sets",
    description:
      "Bespoke wax seal stamps with custom monogram or logo design for premium correspondence.",
    category: "stationery",
    images: [
      "https://img.freepik.com/free-photo/wax-seal-mockup_23-2148228980.jpg",
      "https://img.freepik.com/free-photo/close-up-wax-seal_23-2148228978.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // PROMOTIONAL PRINT (16 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "A5 Flyers (Double Sided)",
    description:
      "Bright, full-color flyers on gloss or matte paper for event promotion and marketing campaigns.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/stack-flyers_23-2148229004.jpg",
      "https://img.freepik.com/free-photo/close-up-flyers-stack_23-2148229002.jpg",
      "https://img.freepik.com/free-photo/double-sided-flyer-mockup_23-2148229000.jpg",
    ],
  },
  {
    title: "Large Format Posters (A1 / A0)",
    description:
      "Vivid, weather-resistant posters on vinyl or paper for outdoor advertising and retail events.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/large-poster-mockup_23-2148228996.jpg",
      "https://img.freepik.com/free-photo/close-up-large-poster_23-2148228994.jpg",
      "https://img.freepik.com/free-photo/outdoor-poster-design_23-2148228992.jpg",
    ],
  },
  {
    title: "Tri-Fold Brochures",
    description:
      "Glossy tri-fold brochures for product catalogs, service menus, and company profiles.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/tri-fold-brochure-mockup_23-2148228988.jpg",
      "https://img.freepik.com/free-photo/close-up-tri-fold-brochure_23-2148228986.jpg",
      "https://img.freepik.com/free-photo/marketing-tri-fold_23-2148228984.jpg",
    ],
  },
  {
    title: "Bi-Fold Brochures",
    description:
      "Half-fold brochures on premium stock for simple, elegant product sheets and service guides.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/bi-fold-brochure-mockup_23-2148228980.jpg",
      "https://img.freepik.com/free-photo/close-up-bi-fold_23-2148228978.jpg",
    ],
  },
  {
    title: "Postcards (4×6 & DL)",
    description:
      "Double-sided postcards for direct mail, real estate, and promotional campaigns.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/postcard-mockup_23-2148228972.jpg",
      "https://img.freepik.com/free-photo/close-up-postcard_23-2148228970.jpg",
    ],
  },
  {
    title: "Roll Labels & Sticker Rolls",
    description:
      "Bulk roll stickers for product labeling, price tags, and branding promotions.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/roll-label-mockup_23-2148228964.jpg",
      "https://img.freepik.com/free-photo/close-up-roll-label_23-2148228962.jpg",
    ],
  },
  {
    title: "Bumper Stickers",
    description:
      "Weatherproof vinyl bumper stickers in custom shapes and sizes for vehicles.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/bumper-sticker-mockup_23-2148228956.jpg",
      "https://img.freepik.com/free-photo/close-up-bumper-sticker_23-2148228954.jpg",
    ],
  },
  {
    title: "Table Tents & Menu Cards",
    description:
      "Folded table-top menu cards and promotional tent cards for restaurants and events.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/table-tent-mockup_23-2148228952.jpg",
      "https://img.freepik.com/free-photo/close-up-table-tent_23-2148228950.jpg",
    ],
  },
  {
    title: "Door Hangers",
    description:
      "Custom die-cut door hangers on thick 350gsm cardstock for direct marketing.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/door-hanger-mockup_23-2148228948.jpg",
      "https://img.freepik.com/free-photo/close-up-door-hanger_23-2148228946.jpg",
    ],
  },
  {
    title: "Rack Cards (4×9)",
    description:
      "Slim rack cards for display stands in hotels, visitor centers, and tourism outlets.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/rack-card-mockup_23-2148228944.jpg",
      "https://img.freepik.com/free-photo/close-up-rack-card_23-2148228942.jpg",
    ],
  },
  {
    title: "Z-Fold Leaflets",
    description:
      "Z-fold leaflets for instruction sheets, product guides, and event programs.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/z-fold-leaflet-mockup_23-2148228940.jpg",
      "https://img.freepik.com/free-photo/close-up-z-fold_23-2148228938.jpg",
    ],
  },
  {
    title: "Event Programs & Schedules",
    description:
      "Professionally printed event programs with full-color covers and multiple inner pages.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/event-program-mockup_23-2148228936.jpg",
      "https://img.freepik.com/free-photo/close-up-event-program_23-2148228934.jpg",
    ],
  },
  {
    title: "Gift Vouchers & Certificates",
    description:
      "Security-printed gift vouchers with serial numbers and custom denominations.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/gift-voucher-mockup_23-2148228932.jpg",
      "https://img.freepik.com/free-photo/close-up-gift-voucher_23-2148228930.jpg",
    ],
  },
  {
    title: "Catalogue Sheets (A4 Product Sheets)",
    description:
      "Single or double-sided A4 product sheets with gloss lamination for sales reps.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/product-sheet-mockup_23-2148228928.jpg",
      "https://img.freepik.com/free-photo/close-up-product-sheet_23-2148228926.jpg",
    ],
  },
  {
    title: "Bookmarks",
    description:
      "Custom printed bookmarks on silk or gloss stock with optional ribbon holes.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/bookmark-mockup_23-2148228924.jpg",
      "https://img.freepik.com/free-photo/close-up-bookmark_23-2148228922.jpg",
    ],
  },
  {
    title: "Promotional Mouse Pads",
    description:
      "Full-color sublimated mouse pads with non-slip rubber base for brand visibility.",
    category: "promotional",
    images: [
      "https://img.freepik.com/free-photo/mouse-pad-mockup_23-2148228920.jpg",
      "https://img.freepik.com/free-photo/close-up-mouse-pad_23-2148228918.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BOOKS & PUBLICATIONS (14 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Perfect Bound Softcover Books",
    description:
      "Softcover novels and guides with matte lamination and perfect binding.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/stack-books_23-2148228948.jpg",
      "https://img.freepik.com/free-photo/close-up-stack-books_23-2148228946.jpg",
    ],
  },
  {
    title: "Case Bound Hardcover Books",
    description:
      "Durable hardcovers with foil stamping and cloth wrapping for coffee table books.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/hardcover-book-mockup_23-2148228940.jpg",
      "https://img.freepik.com/free-photo/close-up-hardcover_23-2148228938.jpg",
    ],
  },
  {
    title: "Saddle-Stitched Booklets",
    description:
      "Economical saddle-stitched booklets for catalogs, manuals, and programs.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/saddle-stitched-booklet-mockup_23-2148228932.jpg",
      "https://img.freepik.com/free-photo/close-up-booklet_23-2148228930.jpg",
    ],
  },
  {
    title: "Spiral Bound Notebooks",
    description:
      "Custom spiral bound notebooks with laminated covers for training materials and journals.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/spiral-notebook-mockup_23-2148228924.jpg",
      "https://img.freepik.com/free-photo/close-up-spiral-notebook_23-2148228922.jpg",
    ],
  },
  {
    title: "Children's Picture Books",
    description:
      "Hardcover picture books with full-color illustrations on gloss paper for young readers.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/childrens-book-mockup_23-2148228916.jpg",
      "https://img.freepik.com/free-photo/close-up-childrens-book_23-2148228914.jpg",
    ],
  },
  {
    title: "Cookbooks",
    description:
      "Perfect bound cookbooks with easy-clean laminated covers and full-color food photography.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/cookbook-mockup_23-2148228908.jpg",
      "https://img.freepik.com/free-photo/close-up-cookbook_23-2148228906.jpg",
    ],
  },
  {
    title: "Company Annual Reports",
    description:
      "Professionally printed annual reports with foil covers and premium inner pages.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/annual-report-mockup_23-2148228904.jpg",
      "https://img.freepik.com/free-photo/close-up-annual-report_23-2148228902.jpg",
    ],
  },
  {
    title: "Product Catalogs",
    description:
      "Full-color product catalogs with gloss covers and matte inner pages for B2B and retail.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/product-catalog-mockup_23-2148228900.jpg",
      "https://img.freepik.com/free-photo/close-up-product-catalog_23-2148228898.jpg",
    ],
  },
  {
    title: "Training & Operations Manuals",
    description:
      "Ring-bound or perfect bound manuals with custom tabs and index pages.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/training-manual-mockup_23-2148228896.jpg",
      "https://img.freepik.com/free-photo/close-up-training-manual_23-2148228894.jpg",
    ],
  },
  {
    title: "Magazines & Journals",
    description:
      "Saddle-stitched or perfect bound magazines with full-bleed color on premium gloss.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/magazine-mockup_23-2148228892.jpg",
      "https://img.freepik.com/free-photo/close-up-magazine_23-2148228890.jpg",
    ],
  },
  {
    title: "Thesis & Dissertation Binding",
    description:
      "Hard or soft cover thesis binding with gold foil spine lettering for academic submissions.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/thesis-binding-mockup_23-2148228888.jpg",
      "https://img.freepik.com/free-photo/close-up-thesis-binding_23-2148228886.jpg",
    ],
  },
  {
    title: "Photo Books (Lay-Flat)",
    description:
      "Premium lay-flat photo books on satin or gloss pages for weddings and portfolios.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/photo-book-mockup_23-2148228884.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-book_23-2148228882.jpg",
    ],
  },
  {
    title: "Church & Religious Publications",
    description:
      "Order of service booklets, hymn books, and devotional booklets with quality printing.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/religious-booklet-mockup_23-2148228880.jpg",
      "https://img.freepik.com/free-photo/close-up-religious-booklet_23-2148228878.jpg",
    ],
  },
  {
    title: "Comic Books & Graphic Novels",
    description:
      "Vibrant full-color comic books and graphic novels printed on premium silk paper.",
    category: "books",
    images: [
      "https://img.freepik.com/free-photo/comic-book-mockup_23-2148228876.jpg",
      "https://img.freepik.com/free-photo/close-up-comic-book_23-2148228874.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SIGNAGE & DISPLAY (14 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "PVC Banners (Outdoor Reinforced)",
    description:
      "Reinforced PVC banners with hem and grommets for outdoor events and scaffolding.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/pvc-banner-mockup_23-2148228900.jpg",
      "https://img.freepik.com/free-photo/close-up-pvc-banner_23-2148228898.jpg",
    ],
  },
  {
    title: "Illuminated LED Lightbox Signs",
    description:
      "LED backlit lightbox signs in slim aluminum frames for storefronts and exhibitions.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/lightbox-sign-mockup_23-2148228892.jpg",
      "https://img.freepik.com/free-photo/close-up-lightbox_23-2148228890.jpg",
    ],
  },
  {
    title: "Acrylic Office Directories",
    description:
      "Frosted or clear acrylic directory signs for corporate lobbies and reception areas.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/acrylic-directory-mockup_23-2148228884.jpg",
      "https://img.freepik.com/free-photo/close-up-acrylic-directory_23-2148228882.jpg",
    ],
  },
  {
    title: "Metal Nameplates & Door Signs",
    description:
      "Aluminum or brass nameplates with etched or printed text for office doors and desks.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/metal-nameplate-mockup_23-2148228876.jpg",
      "https://img.freepik.com/free-photo/close-up-metal-nameplate_23-2148228874.jpg",
    ],
  },
  {
    title: "Vehicle Wrap Graphics",
    description:
      "Full or partial vehicle wraps using premium cast vinyl with UV-protective lamination.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/vehicle-wrap-mockup_23-2148228868.jpg",
      "https://img.freepik.com/free-photo/close-up-vehicle-wrap_23-2148228866.jpg",
    ],
  },
  {
    title: "Pull-Up Retractable Banners",
    description:
      "Roll-up banners in aluminum or chrome stands for exhibitions and presentations.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/standee-banner-mockup_23-2148228860.jpg",
      "https://img.freepik.com/free-photo/close-up-standee-banner_23-2148228858.jpg",
    ],
  },
  {
    title: "Foam Board Displays",
    description:
      "Lightweight foam board posters for events, exhibitions, and point-of-sale displays.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/foam-board-mockup_23-2148228856.jpg",
      "https://img.freepik.com/free-photo/close-up-foam-board_23-2148228854.jpg",
    ],
  },
  {
    title: "Correx / Coroplast Boards",
    description:
      "Weatherproof corrugated plastic signs for real estate and outdoor advertising.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/correx-board-mockup_23-2148228852.jpg",
      "https://img.freepik.com/free-photo/close-up-correx-board_23-2148228850.jpg",
    ],
  },
  {
    title: "Exhibition Pop-Up Displays",
    description:
      "Curved or straight fabric pop-up display systems with full-color dye-sub printing.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/pop-up-display-mockup_23-2148228848.jpg",
      "https://img.freepik.com/free-photo/close-up-pop-up-display_23-2148228846.jpg",
    ],
  },
  {
    title: "Window & Glass Decals",
    description:
      "Perforated or frosted window vinyl graphics for storefronts and offices.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/window-decal-mockup_23-2148228844.jpg",
      "https://img.freepik.com/free-photo/close-up-window-decal_23-2148228842.jpg",
    ],
  },
  {
    title: "Pavement A-Frame Signs",
    description:
      "A-frame chalkboard and printed pavement signs for restaurants and retail frontages.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/a-frame-sign-mockup_23-2148228840.jpg",
      "https://img.freepik.com/free-photo/close-up-a-frame_23-2148228838.jpg",
    ],
  },
  {
    title: "Safety & Compliance Signage",
    description:
      "ISO-standard safety signs on rigid PVC or aluminum for factories and offices.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/safety-sign-mockup_23-2148228836.jpg",
      "https://img.freepik.com/free-photo/close-up-safety-sign_23-2148228834.jpg",
    ],
  },
  {
    title: "Mesh Scaffold Banners",
    description:
      "Breathable mesh banners for construction site branding with 55% wind resistance.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/mesh-banner-mockup_23-2148228708.jpg",
      "https://img.freepik.com/free-photo/close-up-mesh-banner_23-2148228706.jpg",
    ],
  },
  {
    title: "Neon-Effect UV Printed Signs",
    description:
      "UV-printed neon-look acrylic signs for bars, restaurants, and retail environments.",
    category: "signage",
    images: [
      "https://img.freepik.com/free-photo/neon-sign-mockup_23-2148228704.jpg",
      "https://img.freepik.com/free-photo/close-up-neon-sign_23-2148228702.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LABELS & STICKERS (12 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Custom Product Labels",
    description:
      "Waterproof glossy labels for bottles, boxes, and jars with die-cut shapes and full color.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/custom-product-label-mockup_23-2148228852.jpg",
      "https://img.freepik.com/free-photo/close-up-product-label_23-2148228850.jpg",
    ],
  },
  {
    title: "Kiss-Cut Sticker Sheets",
    description:
      "Custom shaped stickers on easy-peel sheets for branding and promotions.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/kiss-cut-sticker-mockup_23-2148228844.jpg",
      "https://img.freepik.com/free-photo/close-up-sticker-sheet_23-2148228842.jpg",
    ],
  },
  {
    title: "Foil Stamped Wine Labels",
    description:
      "Elegant metallic foil labels for premium bottles with embossing options.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/foil-wine-label-mockup_23-2148228836.jpg",
      "https://img.freepik.com/free-photo/close-up-wine-label_23-2148228834.jpg",
    ],
  },
  {
    title: "Barcode & QR Code Labels",
    description:
      "Self-adhesive barcode and QR code labels for inventory management.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/barcode-label-mockup_23-2148228828.jpg",
      "https://img.freepik.com/free-photo/close-up-barcode-label_23-2148228826.jpg",
    ],
  },
  {
    title: "Warning & Safety Labels",
    description:
      "Durable vinyl warning and hazard labels for industrial and chemical use.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/warning-label-mockup_23-2148228820.jpg",
      "https://img.freepik.com/free-photo/close-up-warning-label_23-2148228818.jpg",
    ],
  },
  {
    title: "Food & Nutrition Labels",
    description:
      "Compliant food labels with nutrition panels, ingredient lists, and allergen warnings.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/food-label-mockup_23-2148228812.jpg",
      "https://img.freepik.com/free-photo/close-up-food-label_23-2148228810.jpg",
    ],
  },
  {
    title: "Holographic Security Labels",
    description:
      "Tamper-evident holographic stickers for product authentication and anti-counterfeiting.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/holographic-label-mockup_23-2148228808.jpg",
      "https://img.freepik.com/free-photo/close-up-holographic-label_23-2148228806.jpg",
    ],
  },
  {
    title: "Craft Beer & Beverage Labels",
    description:
      "Wet-strength labels for cans and bottles with custom artwork for breweries.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/beer-label-mockup_23-2148228804.jpg",
      "https://img.freepik.com/free-photo/close-up-beer-label_23-2148228802.jpg",
    ],
  },
  {
    title: "Clear Transparent Labels",
    description:
      "See-through labels for a 'no-label' look on glass and plastic packaging.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/clear-label-mockup_23-2148228800.jpg",
      "https://img.freepik.com/free-photo/close-up-clear-label_23-2148228798.jpg",
    ],
  },
  {
    title: "Kraft Brown Paper Labels",
    description:
      "Eco-friendly kraft paper labels for artisan, organic, and handmade products.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/kraft-label-mockup_23-2148228796.jpg",
      "https://img.freepik.com/free-photo/close-up-kraft-label_23-2148228794.jpg",
    ],
  },
  {
    title: "Fabric & Woven Labels",
    description:
      "Woven fabric labels for garments, bags, and textiles with custom thread colors.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/woven-label-mockup_23-2148228792.jpg",
      "https://img.freepik.com/free-photo/close-up-woven-label_23-2148228790.jpg",
    ],
  },
  {
    title: "Die-Cut Shape Stickers",
    description:
      "Precision die-cut stickers in any custom shape — circles, stars, arrows, and more.",
    category: "labels",
    images: [
      "https://img.freepik.com/free-photo/die-cut-sticker-mockup_23-2148228788.jpg",
      "https://img.freepik.com/free-photo/close-up-die-cut-sticker_23-2148228786.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // PACKAGING (22 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Luxury Rigid Perfume Boxes",
    description:
      "Rigid boxes with magnetic closure, velvet lining, and foil stamping for high-end fragrances.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/luxury-perfume-box-mockup_23-2148228812.jpg",
      "https://img.freepik.com/free-photo/close-up-perfume-box_23-2148228810.jpg",
    ],
  },
  {
    title: "Corrugated Shipping Boxes",
    description:
      "Custom printed corrugated boxes in single and double wall for secure e-commerce shipping.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/corrugated-shipping-box-mockup_23-2148228804.jpg",
      "https://img.freepik.com/free-photo/close-up-shipping-box_23-2148228802.jpg",
    ],
  },
  {
    title: "Folding Cartons",
    description:
      "Die-cut folding cartons for cosmetics, pharmaceuticals, and consumer products.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/folding-carton-mockup_23-2148228796.jpg",
      "https://img.freepik.com/free-photo/close-up-folding-carton_23-2148228794.jpg",
    ],
  },
  {
    title: "Magnetic Rigid Gift Boxes",
    description:
      "Premium rigid gift boxes with magnetic closure and custom inserts for luxury gifting.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/magnetic-gift-box-mockup_23-2148228788.jpg",
      "https://img.freepik.com/free-photo/close-up-magnetic-box_23-2148228786.jpg",
      "https://img.freepik.com/free-photo/luxury-gift-packaging_23-2148228784.jpg",
    ],
  },
  {
    title: "Custom Candle Boxes",
    description:
      "Tuck-end boxes with window cut-outs and spot UV for luxury candle products.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/candle-box-mockup_23-2148228780.jpg",
      "https://img.freepik.com/free-photo/close-up-candle-box_23-2148228778.jpg",
    ],
  },
  {
    title: "Mailer Boxes with Logo Print",
    description:
      "White or kraft mailer boxes with full-color interior and exterior print for subscription boxes.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/mailer-box-logo-mockup_23-2148228772.jpg",
      "https://img.freepik.com/free-photo/close-up-mailer-box_23-2148228770.jpg",
    ],
  },
  {
    title: "Jewelry Display Boxes",
    description:
      "Velvet-lined jewelry boxes with foam inserts, ribbon pull, and foil stamping.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/jewelry-display-box-mockup_23-2148228764.jpg",
      "https://img.freepik.com/free-photo/close-up-jewelry-box_23-2148228762.jpg",
    ],
  },
  {
    title: "Custom Pizza Boxes",
    description:
      "Grease-resistant food-safe pizza boxes with full-color custom branding.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/custom-pizza-box-mockup_23-2148228756.jpg",
      "https://img.freepik.com/free-photo/close-up-pizza-box_23-2148228754.jpg",
    ],
  },
  {
    title: "Cosmetic Cream Jars & Packaging",
    description:
      "Coordinated jar labels and folding box packaging sets for skincare and cosmetics.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/cosmetic-jar-box-mockup_23-2148228748.jpg",
      "https://img.freepik.com/free-photo/close-up-cosmetic-packaging_23-2148228746.jpg",
    ],
  },
  {
    title: "Tea & Coffee Tin Boxes",
    description:
      "Metal tin boxes with custom paper label wraps for premium tea and coffee packaging.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/tea-coffee-tin-mockup_23-2148228740.jpg",
      "https://img.freepik.com/free-photo/close-up-tin-box_23-2148228738.jpg",
    ],
  },
  {
    title: "Bakery Pastry Window Boxes",
    description:
      "Kraft or white pastry boxes with clear PVC window for display of cakes and pastries.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/bakery-box-window-mockup_23-2148228732.jpg",
      "https://img.freepik.com/free-photo/close-up-pastry-box_23-2148228730.jpg",
    ],
  },
  {
    title: "Subscription Box Kits",
    description:
      "Custom printed subscription boxes with branded tissue, inserts, and protective padding.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/subscription-box-mockup_23-2148228724.jpg",
      "https://img.freepik.com/free-photo/close-up-subscription-kit_23-2148228722.jpg",
    ],
  },
  {
    title: "Wine & Spirit Gift Boxes",
    description:
      "Elegant wine gift boxes with cardboard dividers and ribbon closures.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/wine-gift-box-mockup_23-2148228716.jpg",
      "https://img.freepik.com/free-photo/close-up-wine-gift_23-2148228714.jpg",
    ],
  },
  {
    title: "Eco-Friendly Kraft Boxes",
    description:
      "Sustainable kraft boxes with recyclable FSC-certified materials and soy ink printing.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/kraft-product-box-mockup_23-2148228708.jpg",
      "https://img.freepik.com/free-photo/close-up-kraft-box_23-2148228706.jpg",
    ],
  },
  {
    title: "Retail Counter Display Boxes",
    description:
      "Counter-top display boxes with tiered shelves for impulse purchases in retail.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/retail-display-box-mockup_23-2148228700.jpg",
      "https://img.freepik.com/free-photo/close-up-counter-display_23-2148228698.jpg",
    ],
  },
  {
    title: "Sleeve & Drawer Slide Boxes",
    description:
      "Sliding drawer boxes with outer sleeve for electronics and luxury items.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/sleeve-drawer-box-mockup_23-2148228684.jpg",
      "https://img.freepik.com/free-photo/close-up-drawer-box_23-2148228682.jpg",
    ],
  },
  {
    title: "Pillow Boxes",
    description:
      "Curved pillow-shaped boxes in various sizes for small gifts and candy.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/pillow-box-mockup_23-2148228676.jpg",
      "https://img.freepik.com/free-photo/close-up-pillow-box_23-2148228674.jpg",
    ],
  },
  {
    title: "Hang-Tab Retail Display Boxes",
    description:
      "Hang-tab boxes for pegboard retail displays with full-color print.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/hanging-display-box-mockup_23-2148228668.jpg",
      "https://img.freepik.com/free-photo/close-up-hanging-box_23-2148228666.jpg",
    ],
  },
  {
    title: "Pharmaceutical Medicine Boxes",
    description:
      "GMP-compliant medicine boxes with braille, variable data, and serialization.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/medicine-box-mockup_23-2148228720.jpg",
      "https://img.freepik.com/free-photo/close-up-medicine-box_23-2148228718.jpg",
    ],
  },
  {
    title: "Custom Paper Shopping Bags",
    description:
      "Branded paper shopping bags with rope handles and full-color printing for boutiques.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/paper-shopping-bag-mockup_23-2148228716.jpg",
      "https://img.freepik.com/free-photo/close-up-shopping-bag_23-2148228714.jpg",
    ],
  },
  {
    title: "Tuck-Top Product Boxes",
    description:
      "Tuck-top style product boxes for electronics, accessories, and cosmetics.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/tuck-top-box-mockup_23-2148228692.jpg",
      "https://img.freepik.com/free-photo/close-up-tuck-box_23-2148228690.jpg",
    ],
  },
  {
    title: "Window Cut-Out Display Boxes",
    description:
      "Product boxes with die-cut PVC windows for in-store product visibility.",
    category: "packaging",
    images: [
      "https://img.freepik.com/free-photo/window-cut-box-mockup_23-2148228660.jpg",
      "https://img.freepik.com/free-photo/close-up-window-box_23-2148228658.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // LARGE FORMAT PRINT (10 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Fabric Tension Displays (SEG)",
    description:
      "Silicon edge graphic fabric displays for trade shows and retail environments.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/fabric-tension-display-mockup_23-2148228712.jpg",
      "https://img.freepik.com/free-photo/close-up-fabric-display_23-2148228710.jpg",
    ],
  },
  {
    title: "Canvas Prints (Gallery Wrapped)",
    description:
      "High-resolution canvas prints with gallery-wrapped edges for offices and hospitality.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/canvas-print-mockup_23-2148228704.jpg",
      "https://img.freepik.com/free-photo/close-up-canvas-print_23-2148228702.jpg",
    ],
  },
  {
    title: "Wallpaper & Wall Murals",
    description:
      "Custom removable or permanent wallpaper murals for offices and retail.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/wall-mural-mockup_23-2148228700.jpg",
      "https://img.freepik.com/free-photo/close-up-wall-mural_23-2148228698.jpg",
    ],
  },
  {
    title: "Floor Graphics & Wayfinding Decals",
    description:
      "Non-slip floor stickers and wayfinding graphics for retail, airports, and events.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/floor-graphic-mockup_23-2148228696.jpg",
      "https://img.freepik.com/free-photo/close-up-floor-graphic_23-2148228694.jpg",
    ],
  },
  {
    title: "Outdoor Billboards",
    description:
      "Large-format billboard prints for roadside advertising on vinyl substrate.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/billboard-mockup_23-2148228692.jpg",
      "https://img.freepik.com/free-photo/close-up-billboard_23-2148228690.jpg",
    ],
  },
  {
    title: "Backlit Film Prints",
    description:
      "Translucent backlit films for illuminated displays and lightboxes in retail.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/backlit-film-mockup_23-2148228688.jpg",
      "https://img.freepik.com/free-photo/close-up-backlit-film_23-2148228686.jpg",
    ],
  },
  {
    title: "Architectural Plans & Blueprints",
    description:
      "Wide-format CAD drawings and architectural blueprints on bond or polyester film.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/blueprint-mockup_23-2148228592.jpg",
      "https://img.freepik.com/free-photo/close-up-blueprint_23-2148228590.jpg",
    ],
  },
  {
    title: "Magnetic Vehicle Signage",
    description:
      "Removable magnetic vehicle signs for temporary branding on company cars and vans.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/magnetic-vehicle-sign-mockup_23-2148228584.jpg",
      "https://img.freepik.com/free-photo/close-up-magnetic-vehicle-sign_23-2148228582.jpg",
    ],
  },
  {
    title: "Fine Art Giclée Prints",
    description:
      "Museum-quality giclée prints on archival cotton rag or canvas for artists and galleries.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/fine-art-print-mockup_23-2148228600.jpg",
      "https://img.freepik.com/free-photo/close-up-fine-art-print_23-2148228598.jpg",
    ],
  },
  {
    title: "Photo Enlargements (Up to A0)",
    description:
      "High-resolution photo enlargements on gloss, matte, or metallic paper.",
    category: "large-format",
    images: [
      "https://img.freepik.com/free-photo/photo-enlargement-mockup_23-2148228596.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-enlargement_23-2148228594.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // APPAREL & FABRIC PRINTING (8 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Custom T-Shirt Printing (DTG)",
    description:
      "Direct-to-garment full-color T-shirt printing with no minimum order.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/custom-tshirt-mockup_23-2148228680.jpg",
      "https://img.freepik.com/free-photo/close-up-tshirt-print_23-2148228678.jpg",
    ],
  },
  {
    title: "Screen Printed Uniforms",
    description:
      "Multi-color screen printed workwear uniforms for teams, schools, and corporations.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/uniform-screen-print-mockup_23-2148228676.jpg",
      "https://img.freepik.com/free-photo/close-up-screen-print_23-2148228674.jpg",
    ],
  },
  {
    title: "Embroidered Polo Shirts",
    description:
      "Digitized logo embroidery on polo shirts and jackets for corporate identity.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/embroidered-polo-mockup_23-2148228672.jpg",
      "https://img.freepik.com/free-photo/close-up-embroidery_23-2148228670.jpg",
    ],
  },
  {
    title: "Sublimation Sports Jerseys",
    description:
      "All-over dye-sublimation sports jerseys for football, cricket, and team sports.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/sports-jersey-mockup_23-2148228668.jpg",
      "https://img.freepik.com/free-photo/close-up-sports-jersey_23-2148228666.jpg",
    ],
  },
  {
    title: "Custom Tote Bags",
    description:
      "Screen printed or sublimated canvas tote bags for retail and eco branding.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/tote-bag-mockup_23-2148228664.jpg",
      "https://img.freepik.com/free-photo/close-up-tote-bag_23-2148228662.jpg",
    ],
  },
  {
    title: "Branded Caps & Hats",
    description:
      "Embroidered or printed caps and bucket hats for promotional giveaways.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/branded-cap-mockup_23-2148228660.jpg",
      "https://img.freepik.com/free-photo/close-up-branded-cap_23-2148228658.jpg",
    ],
  },
  {
    title: "Printed Hoodies & Sweatshirts",
    description:
      "Custom printed and embroidered hoodies for teams, events, and merchandise.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/hoodie-mockup_23-2148228656.jpg",
      "https://img.freepik.com/free-photo/close-up-hoodie-print_23-2148228654.jpg",
    ],
  },
  {
    title: "Custom Aprons",
    description:
      "Printed chef and barista aprons with custom logos for restaurants and cafes.",
    category: "apparel",
    images: [
      "https://img.freepik.com/free-photo/apron-mockup_23-2148228652.jpg",
      "https://img.freepik.com/free-photo/close-up-printed-apron_23-2148228650.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // WEDDING & EVENTS (10 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Wedding Invitation Suites",
    description:
      "Letterpress, foil, or digital wedding invitations with matching envelopes and RSVP cards.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/wedding-invitation-mockup_23-2148228656.jpg",
      "https://img.freepik.com/free-photo/close-up-wedding-invitation_23-2148228654.jpg",
    ],
  },
  {
    title: "Step-and-Repeat Backdrop Banners",
    description:
      "Branded step-and-repeat banners for press events, award ceremonies, and launches.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/step-repeat-banner-mockup_23-2148228652.jpg",
      "https://img.freepik.com/free-photo/close-up-step-repeat_23-2148228650.jpg",
    ],
  },
  {
    title: "Menu Cards & Place Cards",
    description:
      "Elegant folded menu cards and table place cards with foil and custom typography.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/menu-card-mockup_23-2148228648.jpg",
      "https://img.freepik.com/free-photo/close-up-menu-card_23-2148228646.jpg",
    ],
  },
  {
    title: "Event Tickets & Wristbands",
    description:
      "Perforated event tickets with sequential numbering and RFID or QR code wristbands.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/event-ticket-mockup_23-2148228644.jpg",
      "https://img.freepik.com/free-photo/close-up-event-ticket_23-2148228642.jpg",
    ],
  },
  {
    title: "Name Badges & Lanyards",
    description:
      "Custom printed name badges with clip or lanyard for conferences and exhibitions.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/name-badge-mockup_23-2148228640.jpg",
      "https://img.freepik.com/free-photo/close-up-name-badge_23-2148228638.jpg",
    ],
  },
  {
    title: "Table Numbers & Centrepiece Cards",
    description:
      "Custom table number cards for weddings, banquets, and gala dinners.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/table-number-mockup_23-2148228636.jpg",
      "https://img.freepik.com/free-photo/close-up-table-number_23-2148228634.jpg",
    ],
  },
  {
    title: "Award Certificates & Plaques",
    description:
      "Certificate printing with foil seals, embossing, and acrylic award plaques.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/award-certificate-mockup_23-2148228628.jpg",
      "https://img.freepik.com/free-photo/close-up-award-certificate_23-2148228626.jpg",
    ],
  },
  {
    title: "Save-the-Date Cards",
    description:
      "Custom save-the-date cards with matching envelopes for weddings and special events.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/save-the-date-mockup_23-2148228624.jpg",
      "https://img.freepik.com/free-photo/close-up-save-the-date_23-2148228622.jpg",
    ],
  },
  {
    title: "Order of Service Booklets",
    description:
      "Professionally printed ceremony booklets for weddings, funerals, and church services.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/order-of-service-mockup_23-2148228620.jpg",
      "https://img.freepik.com/free-photo/close-up-order-of-service_23-2148228618.jpg",
    ],
  },
  {
    title: "Custom Gift Tags & Wrapping",
    description:
      "Branded gift tags, stickers, and custom wrapping paper for product gifting and events.",
    category: "events",
    images: [
      "https://img.freepik.com/free-photo/gift-tag-mockup_23-2148228616.jpg",
      "https://img.freepik.com/free-photo/close-up-gift-tag_23-2148228614.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SECURITY PRINT (8 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Secure Cheque Books",
    description:
      "Bank-grade security cheque printing with MICR encoding and watermarks.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/cheque-book-mockup_23-2148228624.jpg",
      "https://img.freepik.com/free-photo/close-up-cheque-book_23-2148228622.jpg",
    ],
  },
  {
    title: "Scratch Cards & Lottery Tickets",
    description:
      "Scratch-off promotional and lottery cards with latex coating.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/scratch-card-mockup_23-2148228620.jpg",
      "https://img.freepik.com/free-photo/close-up-scratch-card_23-2148228618.jpg",
    ],
  },
  {
    title: "Official Diplomas & Certificates",
    description:
      "Security-printed certificates with foil seals and guilloche patterns.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/diploma-certificate-mockup_23-2148228616.jpg",
      "https://img.freepik.com/free-photo/close-up-diploma_23-2148228614.jpg",
    ],
  },
  {
    title: "Numbered Raffle Ticket Books",
    description:
      "Numbered raffle ticket books with perforated stubs for fundraisers.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/raffle-ticket-mockup_23-2148228612.jpg",
      "https://img.freepik.com/free-photo/close-up-raffle-ticket_23-2148228610.jpg",
    ],
  },
  {
    title: "Warranty & Guarantee Cards",
    description:
      "Tamper-evident warranty cards with unique serial numbers and holographic overlays.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/warranty-card-mockup_23-2148228608.jpg",
      "https://img.freepik.com/free-photo/close-up-warranty-card_23-2148228606.jpg",
    ],
  },
  {
    title: "PVC ID Cards & Access Passes",
    description:
      "Full-color PVC ID cards with magnetic stripe or barcode for access control.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/id-card-mockup_23-2148228604.jpg",
      "https://img.freepik.com/free-photo/close-up-id-card_23-2148228602.jpg",
    ],
  },
  {
    title: "Counterfoil Receipt Books",
    description:
      "Pre-numbered counterfoil receipt books for cash-and-carry and petty cash transactions.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/receipt-book-mockup_23-2148228600.jpg",
      "https://img.freepik.com/free-photo/close-up-receipt-book_23-2148228598.jpg",
    ],
  },
  {
    title: "Serialized Tags & Hang Tags",
    description:
      "Serialized security hang tags for garments, bags, and high-value goods.",
    category: "security",
    images: [
      "https://img.freepik.com/free-photo/hang-tag-mockup_23-2148228596.jpg",
      "https://img.freepik.com/free-photo/close-up-hang-tag_23-2148228594.jpg",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DIGITAL & PHOTO PRINTING (8 items)
  // ═══════════════════════════════════════════════════════════

  {
    title: "Personalized Photo Calendars",
    description:
      "Wire-bound personal photo calendars with custom photos for each month.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/photo-calendar-mockup_23-2148228580.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-calendar_23-2148228578.jpg",
    ],
  },
  {
    title: "Personalized Photo Mugs",
    description:
      "Sublimation printed mugs with full-wrap 360° custom photo or artwork.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/photo-mug-mockup_23-2148228588.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-mug_23-2148228586.jpg",
    ],
  },
  {
    title: "Custom Phone Cases",
    description:
      "Full-color UV-printed custom phone cases for all major smartphone models.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/phone-case-mockup_23-2148228584.jpg",
      "https://img.freepik.com/free-photo/close-up-phone-case_23-2148228582.jpg",
    ],
  },
  {
    title: "Photo Magnets",
    description:
      "Custom printed fridge magnets with gloss lamination for events and promotions.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/photo-magnet-mockup_23-2148228570.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-magnet_23-2148228568.jpg",
    ],
  },
  {
    title: "Custom Jigsaw Puzzles",
    description:
      "Personalized photo jigsaw puzzles in 200, 500, and 1000-piece versions.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/jigsaw-puzzle-mockup_23-2148228566.jpg",
      "https://img.freepik.com/free-photo/close-up-jigsaw-puzzle_23-2148228564.jpg",
    ],
  },
  {
    title: "Printed Mouse Pads (Custom Photo)",
    description:
      "Full-color custom photo mouse pads with non-slip rubber base.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/photo-mousepad-mockup_23-2148228562.jpg",
      "https://img.freepik.com/free-photo/close-up-photo-mousepad_23-2148228560.jpg",
    ],
  },
  {
    title: "Personalised Cushion Covers",
    description:
      "Sublimation-printed custom cushion covers with photo or artwork for gifts.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/cushion-cover-mockup_23-2148228558.jpg",
      "https://img.freepik.com/free-photo/close-up-cushion-cover_23-2148228556.jpg",
    ],
  },
  {
    title: "Digital Passport & ID Photo Prints",
    description:
      "Standard compliant passport, visa, and ID photo prints with white background.",
    category: "digital",
    images: [
      "https://img.freepik.com/free-photo/passport-photo-mockup_23-2148228554.jpg",
      "https://img.freepik.com/free-photo/close-up-passport-photo_23-2148228552.jpg",
    ],
  },
];

// ─── CATEGORY METADATA ──────────────────────────────────────────────────────
const categoryMeta = {
  stationery: { label: "Stationery", icon: "fas fa-print", count: 16 },
  promotional: {
    label: "Promotional Print",
    icon: "fas fa-bullhorn",
    count: 16,
  },
  books: { label: "Books & Publications", icon: "fas fa-book", count: 14 },
  signage: { label: "Signage & Display", icon: "fas fa-sign", count: 14 },
  labels: { label: "Labels & Stickers", icon: "fas fa-tag", count: 12 },
  packaging: { label: "Packaging", icon: "fas fa-box-open", count: 22 },
  "large-format": {
    label: "Large Format Print",
    icon: "fas fa-expand-arrows-alt",
    count: 10,
  },
  apparel: { label: "Apparel & Fabric", icon: "fas fa-tshirt", count: 8 },
  events: {
    label: "Wedding & Events",
    icon: "fas fa-calendar-check",
    count: 10,
  },
  security: { label: "Security Print", icon: "fas fa-shield-alt", count: 8 },
  digital: { label: "Digital & Photo", icon: "fas fa-camera-retro", count: 8 },
};

// ─── HELPER UTILITIES ────────────────────────────────────────────────────────

/** Get all unique categories */
const getCategories = () => [...new Set(portfolioData.map((p) => p.category))];

/** Filter by category */
const getByCategory = (cat) => portfolioData.filter((p) => p.category === cat);

/** Search by title or description */
const searchPortfolio = (q) => {
  const query = q.toLowerCase();
  return portfolioData.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query),
  );
};

/** Total count */
const totalCount = portfolioData.length;

// Node.js module support
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    portfolioData,
    categoryMeta,
    getCategories,
    getByCategory,
    searchPortfolio,
    totalCount,
  };
}
