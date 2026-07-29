export type ProjectCategory = 'Fashion' | 'Beauty' | 'Luxury' | 'Commercial' | 'Motion';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  coverImage: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
  videos?: string[];
  keyTakeaways: {
    creative: string;
    workflow: string;
    business: string;
  };
  // Extended case study fields — present on full brand case studies
  projectOverview?: string;
  brandOverview?: string;
  businessGoal?: string;
  creativeDirection?: string;
  creativeStrategy?: string;
  campaignConcept?: string;
  aiImageProduction?: string;
  aiVideoProduction?: string;
  websiteDigital?: string;
  contentSystem?: string;
  campaignAssets?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: 'motion-reel',
    title: 'Motion Reel',
    category: 'Motion',
    description: "A showcase of AI-generated motion direction — demonstrating what's possible when creative direction meets generative video.",
    coverImage: '/ai-visuals/shot-92.jpg',
    challenge:
      'Demonstrating the range of AI motion capability — from fashion and editorial to commercial and atmospheric — without a client brief or production budget.',
    solution:
      'Built a self-directed motion piece using AI video generation with full creative direction: framing, pacing, colour temperature, and subject movement designed from scratch. No location. No crew.',
    deliverables: [
      'AI-generated motion direction',
      'Full creative brief and visual language',
      'Campaign-ready video output',
      'Demonstrates fashion, editorial, and commercial registers',
    ],
    gallery: [],
    videos: ['/ai-visuals/video-14.mp4'],
    keyTakeaways: {
      creative:
        'AI motion works when the director knows what they want before the generation starts. Framing, light temperature, subject movement, and pacing are all creative decisions — not algorithmic ones.',
      workflow:
        'A single motion piece built without a crew, location, or production budget — demonstrating what AI video direction can produce when the brief is clear and the creative eye is consistent.',
      business:
        'For brands that need campaign-quality video content at a fraction of traditional production cost, AI motion direction is the most underused tool in the current market.',
    },
  },
  {
    id: 'black-mini-dress',
    title: 'Black Mini Dress',
    category: 'Fashion',
    description: 'Complete e-commerce shoot for a keyhole-neckline mini dress, studio-consistent across every angle.',
    coverImage: '/ai-visuals/shot-13.jpg',
    challenge:
      'The brand needed high-volume studio imagery for a hero SKU (a keyhole-neckline black mini dress) with consistent lighting, posing, and background across multiple model shots for both web and social use.',
    solution:
      'Built a locked studio template: controlled white background, signature top-light with soft fill, and a clear posing brief. Every frame followed the same visual rules, making the set feel like a single unified shoot regardless of the angle.',
    deliverables: [
      'Hero studio shots across 7 angles and poses',
      'Consistent white-background model imagery',
      'Social-ready crops (1:1, 4:5, 9:16)',
      'Packaged for e-commerce product pages',
    ],
    gallery: [
      '/ai-visuals/shot-02.png',
      '/ai-visuals/shot-03.png',
      '/ai-visuals/shot-05.png',
      '/ai-visuals/shot-11.jpg',
      '/ai-visuals/shot-12.jpg',
      '/ai-visuals/shot-13.jpg',
      '/ai-visuals/shot-15.jpg',
    ],
    videos: ['/ai-visuals/video-03.mp4', '/ai-visuals/video-04.mp4'],
    keyTakeaways: {
      creative:
        'A strong studio template (consistent light, background, and posing rules) turns individual shots into a coherent product story. The garment sells itself when the environment stays invisible.',
      workflow:
        'Locking the lighting and background parameters first, then batching all model poses in sequence, eliminates drift across a multi-angle shoot and saves significant revision time.',
      business:
        'Consistent studio imagery across a hero SKU directly reduces return rates. Customers who see the garment clearly from multiple angles know exactly what they are buying.',
    },
  },
  {
    id: 'navy-crochet-co-ord',
    title: 'Navy Crochet Co-ord',
    category: 'Luxury',
    description: 'Studio and resort editorial for a navy crochet knit set: from clean white-background shots to luxury poolside campaigns.',
    coverImage: '/ai-visuals/shot-26.jpg',
    challenge:
      'A single garment (a navy crochet tank and wide-leg knit pants co-ord) needed to work across two very different contexts: clean studio e-commerce imagery and aspirational luxury editorial at resort locations.',
    solution:
      'Shot the collection in two distinct visual registers. Studio shots delivered product clarity for the website. Then the same co-ord was taken to luxury pool and resort settings (Côte d\'Azur architecture, infinity pools, Mediterranean light) to build the aspirational layer the brand needed for campaign content.',
    deliverables: [
      'Full studio e-commerce set (7 model shots, white background)',
      'Luxury resort editorial (10 location hero images)',
      'Mediterranean outdoor campaign imagery',
      'Multi-platform format exports',
    ],
    gallery: [
      '/ai-visuals/shot-36.png',
      '/ai-visuals/shot-04.png',
      '/ai-visuals/shot-09.png',
      '/ai-visuals/shot-14.jpg',
      '/ai-visuals/shot-16.jpg',
      '/ai-visuals/shot-20.jpg',
      '/ai-visuals/shot-23.jpg',
      '/ai-visuals/shot-10.png',
      '/ai-visuals/shot-24.jpg',
      '/ai-visuals/shot-25.jpg',
      '/ai-visuals/shot-26.jpg',
      '/ai-visuals/shot-27.jpg',
      '/ai-visuals/shot-28.jpg',
      '/ai-visuals/shot-29.jpg',
      '/ai-visuals/shot-30.jpg',
      '/ai-visuals/shot-31.jpg',
    ],
    videos: [
      '/ai-visuals/video-01.mp4',
      '/ai-visuals/video-02.mp4',
      '/ai-visuals/video-06.mp4',
      '/ai-visuals/video-07.mp4',
    ],
    keyTakeaways: {
      creative:
        'The same garment reads completely differently depending on its environment. A clean studio shot sells the product; a luxury location shot sells the lifestyle. Both are necessary, and both can come from a single production plan.',
      workflow:
        'Separating the studio and editorial phases makes each more controlled. Studio first (product clarity), then location (campaign story). Trying to do both simultaneously creates visual compromise in both directions.',
      business:
        'Brands that show the same piece in multiple contexts (product page and campaign) convert at higher rates because customers can see both what they are buying and who they are buying into.',
    },
  },
  {
    id: 'white-linen-co-ord',
    title: 'White Linen Co-ord',
    category: 'Fashion',
    description: 'Studio e-commerce set for a white linen structured crop top and maxi skirt. Clean, consistent, scalable.',
    coverImage: '/ai-visuals/shot-17.jpg',
    challenge:
      'White and cream garments are among the hardest to shoot well at scale. Fabric texture, shadow detail, and tonal range all collapse under poor lighting, making identical white pieces look inconsistent across a product catalogue.',
    solution:
      'Developed a high-key studio setup tuned specifically for light-coloured linen, retaining fabric texture and natural drape while keeping backgrounds clean. The same model, light, and posing brief carried across all garment variants in the collection.',
    deliverables: [
      'Studio e-commerce shots across 6 styles and poses',
      'White and cream garment variants with consistent tonal rendering',
      'Full-length and cropped formats',
      'Web and social-ready exports',
    ],
    gallery: [
      '/ai-visuals/shot-06.png',
      '/ai-visuals/shot-07.png',
      '/ai-visuals/shot-17.jpg',
      '/ai-visuals/shot-18.jpg',
      '/ai-visuals/shot-19.jpg',
      '/ai-visuals/shot-35.png',
    ],
    videos: ['/ai-visuals/video-05.mp4'],
    keyTakeaways: {
      creative:
        'Light-coloured garments require lighting setups that reveal texture, not just shape. A flat, overlit studio destroys the linen quality that makes the piece worth buying.',
      workflow:
        'Building a tonal reference image first (establishing exactly how the white should render before shooting any model frames) saves significant post-production correction across a multi-piece catalogue.',
      business:
        'Accurate colour and texture rendering for light garments directly reduces returns. Customers know linen wrinkles; they return items when the fabric quality looks different online than in-hand.',
    },
  },
  {
    id: 'pom-pom-summer-set',
    title: 'Pom-Pom Summer Set',
    category: 'Fashion',
    description: 'Studio campaign for a white spaghetti-strap cami and pom-pom trim shorts. Playful, clean, summer-ready.',
    coverImage: '/ai-visuals/shot-21.jpg',
    challenge:
      'A textured summer co-ord (white cami with pom-pom detail shorts) needed studio imagery that communicated the playful character of the piece while keeping the background clean for e-commerce use.',
    solution:
      'Shot the set against a consistent white studio background with warm directional light that picked up the pom-pom texture and natural fabric drape. Posing was kept relaxed and natural to match the summer mood of the garment.',
    deliverables: [
      'Studio e-commerce shots (3 hero images)',
      'Detail shots highlighting pom-pom trim',
      'Full-length and mid-body crops',
      'Summer campaign social formats',
    ],
    gallery: [
      '/ai-visuals/shot-08.png',
      '/ai-visuals/shot-21.jpg',
      '/ai-visuals/shot-22.jpg',
    ],
    videos: ['/ai-visuals/video-08.mp4'],
    keyTakeaways: {
      creative:
        'Texture-forward pieces need lighting that makes the detail visible without making the image feel busy. The pom-pom trim is the design signature. The shot fails if it reads as background noise.',
      workflow:
        'For small-detail garments, always capture dedicated detail frames in the same session. Product pages that include macro shots of signature details consistently outperform those that show only full-body hero images.',
      business:
        'Seasonal pieces have short windows. Fast studio production that doesn\'t require location bookings means summer imagery is live when the season starts, not three weeks into it.',
    },
  },
  {
    id: 'white-circle-detail-set',
    title: 'White Circle-Detail Set',
    category: 'Luxury',
    description: 'Outdoor editorial for a white spaghetti-strap top and shorts with circle appliqué detail, shot at Mediterranean pool and villa.',
    coverImage: '/ai-visuals/shot-37.jpg',
    challenge:
      'A white linen summer set with a distinctive circle-detail appliqué needed campaign imagery that went beyond studio. The brand needed aspirational location content to position the piece for a luxury summer audience.',
    solution:
      'Shot the collection against two Mediterranean settings: an infinity pool with geometric architecture and a whitewashed villa with bougainvillea. Both locations matched the palette and tone of the garment, making the clothing and the environment feel designed for each other.',
    deliverables: [
      'Outdoor campaign editorial (2 location hero images)',
      'Mediterranean architecture and pool setting imagery',
      'Natural light styling with accessory direction',
      'Instagram and campaign-ready formats',
    ],
    gallery: [
      '/ai-visuals/shot-37.jpg',
      '/ai-visuals/shot-38.jpg',
    ],
    videos: ['/ai-visuals/video-09.mp4'],
    keyTakeaways: {
      creative:
        'Location choice is styling. When the architecture, light, and palette of the setting match the garment, the image stops looking like a product photo and starts looking like a world the audience wants to be in.',
      workflow:
        'Outdoor editorial shoots require a location brief as detailed as the garment brief. Confirming light direction, background palette, and setting mood before arriving eliminates the variables that derail on-location production.',
      business:
        'Aspirational location imagery earns disproportionately more reach on social platforms. A strong campaign outdoor shot typically outperforms clean studio imagery by 3–5x on saves and shares, the metric that drives new audience discovery.',
    },
  },
  {
    id: 'pink-linen-set',
    title: 'Pink Linen Set',
    category: 'Fashion',
    description: 'Studio e-commerce shoot for a blush pink linen kimono-jacket and shorts set. Oversized silhouette, relaxed summer styling.',
    coverImage: '/ai-visuals/shot-33.png',
    challenge:
      'A blush pink linen co-ord with an oversized kimono jacket needed studio imagery that communicated the relaxed, wearable fit of the silhouette without losing the softness of the colour or the texture of the fabric.',
    solution:
      'Shot front and side angles against a clean white studio background with soft, even lighting that preserved the delicate pink tone. Sandal styling kept the mood easy and summer-appropriate without distracting from the garment.',
    deliverables: [
      'Studio e-commerce shots (front and side hero images)',
      'Full-length styling with accessory direction',
      'Colour-accurate light pink fabric rendering',
      'Web and catalogue-ready exports',
    ],
    gallery: [
      '/ai-visuals/shot-33.png',
      '/ai-visuals/shot-34.png',
    ],
    videos: ['/ai-visuals/video-10.mp4'],
    keyTakeaways: {
      creative:
        'Soft pastel garments require extremely controlled colour temperature in studio lighting. A single degree shift toward cool or warm can make blush pink read as grey or salmon. Neither is what the customer is buying.',
      workflow:
        'For relaxed-fit silhouettes, side and three-quarter angles are as important as front-facing shots. They communicate the oversized proportion that makes the piece wearable, which front shots often flatten.',
      business:
        'Accurate colour rendering is the highest-value investment in linen e-commerce photography. Pink garments have among the highest return rates when photographed under mismatched lighting, and among the highest retention when the colour is accurate.',
    },
  },
  {
    id: 'benphos',
    title: 'Benphos',
    category: 'Commercial',
    description: 'Industrial brand film for a phosphate processing company — built to communicate operational scale and investment credibility to international B2B buyers and investors.',
    coverImage: '/ai-visuals/shot-41.jpg',
    challenge:
      'Benphos Phosphates Industries — a newly established integrated phosphate beneficiation and fertilizer complex backed by Topic International Trading (30+ years in fertilizer and phosphate trading) — was entering an international export market dominated by established names. With a 100,000 ton/year initial production capacity and a two-phase expansion plan, the company had infrastructure that matched the ambition. What it lacked was content that communicated that scale. International buyers and investors needed to see the facility before any commercial relationship could begin.',
    solution:
      'Built a brand film structured as a hierarchy of scale: aerial establishing shots capturing the full facility footprint against the Egyptian landscape, followed by ground-level conveyor and processing sequences that demonstrated operational sophistication, then worker-led machinery shots and flotation process detail for technical credibility. The film moves from "what is the scale of this operation" to "how precisely is it run" — the sequence a serious investor or B2B buyer actually needs to follow to develop conviction.',
    deliverables: [
      'Full industrial brand film',
      'Aerial overview footage of facility and surrounding landscape',
      'Ground-level processing and flotation sequences',
      'Worker and operational detail shots',
      'Investor-grade assets for international B2B presentations',
    ],
    gallery: [
      '/ai-visuals/shot-41.jpg',
    ],
    videos: ['/ai-visuals/video-16.mp4'],
    keyTakeaways: {
      creative:
        'Industrial scale is a visual argument. The aerial shot — facility against desert and open sky — makes a claim that no spec sheet can: this is real, it is large, and it is serious. The film earns every technical close-up by establishing that scale first.',
      workflow:
        'Heavy industrial shoots require a strict shot hierarchy: aerials first to establish the geography, then ground-level sequences while equipment is running, then detail and worker shots. Running the order any other way means missing operational moments that cannot be recreated on command.',
      business:
        'For a B2B export company entering international markets, a film that shows real operations at real scale compresses the sales cycle. Benphos is competing against established phosphate producers — the content needs to remove doubt before the first conversation, not during it.',
    },
    projectOverview: 'An investor-grade brand film and visual content package for Benphos Phosphates Industries — a newly established phosphate beneficiation and fertilizer complex entering international export markets. The engagement produced a complete brand film: aerial facility overview to ground-level processing detail, structured to function as the company\'s primary investor relations and B2B sales asset. Scope: brand film, facility imagery, and a full visual foundation for investor outreach and trade channels.',
    campaignAssets: 'Industrial brand film (68 seconds, 16:9, 1920×1080) for investor presentations and B2B digital channels. Aerial facility overview stills for website and presentation decks. Ground-level processing and flotation imagery for technical documentation. All assets formatted for conference display, investor deck, and digital distribution.',
    brandOverview: 'Benphos Phosphates Industries is an integrated phosphate beneficiation and fertilizer production company based in Giza, Egypt, 90% owned by Topic International Trading — a company with over 30 years of experience in international fertilizer and phosphate trading. Benphos was founded to close the gap between Egypt\'s abundant phosphate rock resources and the downstream processing infrastructure needed to export finished, high-value product to international markets. Phase One: a 100,000 ton/year phosphate beneficiation plant using advanced flotation technology to upgrade ore from 21–22% P₂O₅ to 29–30%. Phase Two: a 60,000 ton/year compound fertilizer production facility. Vision: to become a regional producer of upgraded Rock Phosphate products and phosphate-based mineral fertilizers.',
    businessGoal: 'Create content that communicated operational scale, technical credibility, and investment-grade ambition to international phosphate buyers and financial partners — giving a newly established company the visual authority of an operation already at full capacity. The content needed to perform at the level of an established global producer from the first investor conversation.',
    creativeDirection: 'Scale as the opening argument. The film begins with the kind of aerial establishing shot that no competitor can fake: the actual facility, at full operational scale, against the Egyptian landscape. Everything that follows — conveyor systems, flotation process, worker sequences — earns its credibility from having established that scale first. Dark, industrial, precise. No lifestyle, no voiceover optimism.',
    creativeStrategy: 'Structured the film as a hierarchy that mirrors how a serious investor or B2B buyer actually builds conviction: Scale (is this a real operation?) → Process (is it technically credible?) → People (is it properly run?). Aerial first, ground-level second, detail third. Each layer assumes the previous one has been accepted. The film does not pitch — it demonstrates.',
    campaignConcept: 'The integrated phosphate value chain — from Egyptian desert rock to export-ready product — visualised as a single continuous argument. Not a startup with ambition, but an operation already in motion. The film answers the investor\'s first question ("does this actually exist?") in the opening three seconds, then systematically answers every question that follows.',
    aiImageProduction: 'Facility-scale imagery: aerial overview of the full plant footprint against the Egyptian desert, ground-level processing and conveyor sequences, flotation plant detail shots. Industrial visual language — utilitarian framing, operational lighting, no staging or set dressing. The environment is the subject.',
    aiVideoProduction: 'Industrial brand film at 1920×1080 (16:9) for conference, presentation, and B2B digital delivery. Duration 68 seconds. Aerial establishing → conveyor and processing sequences → flotation process detail → worker and operational shots. Cut to demonstrate scale and precision simultaneously. Delivered at 37MB for digital distribution.',
    websiteDigital: 'We built Benphos a digital presence that matches the ambition of the operation — a clean, authoritative investor-facing website anchored by the brand film, supported by facility imagery structured for maximum credibility. Every page decision was made with one audience in mind: an international buyer or financial partner arriving with no prior knowledge of the company. The site moves them from "what is this?" to "I want to speak to someone" without friction. Investor-grade typography, deliberate white space, and zero visual noise — the kind of web presence that makes a newly established company feel like an institution.',
    contentSystem: 'Delivered an investor-grade brand content package: brand film, facility imagery, and a visual identity foundation deployable across investor relations, trade events, and B2B digital channels. The content functions as a trust document as much as a marketing asset.',
    results: 'The Benphos brand film provided the company\'s international investor outreach and B2B sales process with a visual foundation that matched the scale of the operation itself. Deployed across investor presentations, trade channels, and the company\'s digital presence — giving Benphos the content credibility to compete in international phosphate markets from its first year of operation.',
  },
  {
    id: 'ailah-co',
    title: 'Ailah Co',
    category: 'Fashion',
    description: 'Complete studio e-commerce catalogue for a debut fashion collection — linen sets, crochet co-ords, structured dresses and separates across 23 campaign-quality images.',
    coverImage: '/ai-visuals/shot-100.png',
    challenge:
      'Ailah Co was launching its debut collection with no photography budget and a live deadline. The collection spanned multiple garment types — linen strapless sets, structured asymmetric separates, crochet co-ords, keyhole mini dresses — in multiple colorways. To launch a functional e-commerce store, they needed full coverage: consistent studio imagery for every SKU, styled cohesively enough to read as a single shoot across all 23 pieces.',
    solution:
      'Designed a locked studio template around one model, one lighting setup, and one background: white seamless, warm directional light calibrated to catch fabric texture without creating shadow drama, minimal styling throughout (gold jewelry, tan leather slides). Then shot the full collection in sequence — polka dot linen sets, black keyhole mini dress, cream structured separates, navy crochet co-ords — capturing front, side, and back angles for each piece. The result is 23 images that read as one coherent catalogue, fully ready to publish across web and social from day one.',
    deliverables: [
      '23 studio e-commerce images across the full debut collection',
      'Linen sets, crochet co-ords, mini dresses, and structured separates',
      'Front, side, and back angles per garment',
      'Consistent studio system across all colorways',
      'Web and social-ready exports at full resolution',
    ],
    gallery: [
      '/ai-visuals/shot-93.png',
      '/ai-visuals/shot-94.png',
      '/ai-visuals/shot-95.png',
      '/ai-visuals/shot-96.png',
      '/ai-visuals/shot-97.png',
      '/ai-visuals/shot-98.png',
      '/ai-visuals/shot-99.png',
      '/ai-visuals/shot-100.png',
      '/ai-visuals/shot-101.png',
      '/ai-visuals/shot-102.png',
      '/ai-visuals/shot-103.png',
      '/ai-visuals/shot-104.png',
      '/ai-visuals/shot-105.png',
      '/ai-visuals/shot-106.png',
      '/ai-visuals/shot-107.png',
      '/ai-visuals/shot-108.png',
      '/ai-visuals/shot-109.png',
      '/ai-visuals/shot-110.png',
      '/ai-visuals/shot-111.png',
      '/ai-visuals/shot-112.png',
      '/ai-visuals/shot-113.png',
      '/ai-visuals/shot-114.png',
      '/ai-visuals/shot-115.png',
    ],
    videos: [],
    keyTakeaways: {
      creative:
        'A locked studio template is the difference between a product gallery and a brand catalogue. Same model, same light, same background — the creative decisions are made once, not shot by shot. That consistency is what makes a debut collection read like a fully-resourced brand rather than a series of individual product photos.',
      workflow:
        'For multi-SKU debut catalogues, shooting by garment category — all linen sets first, then all dresses, then all crochet — minimises transitions and keeps the lighting locked per fabric type. Linen and crochet need different light distances to render texture correctly; switching between them mid-session costs both time and quality.',
      business:
        'A debut brand\'s first visual impression is permanent. 23 consistent, campaign-quality images at launch means every channel — website, Instagram, wholesale decks — looks equally considered. The alternative is launching with uneven content and spending the next year correcting the first impression.',
    },
    projectOverview: 'A complete studio e-commerce imagery library for Ailah Co\'s debut collection launch — 23 campaign-quality product shots across the full range: strapless linen sets, structured asymmetric separates, crochet co-ords, and keyhole mini dresses. The engagement covered the full production pipeline: studio template design, garment sequencing, and multi-angle coverage per SKU — delivered as a launch-ready visual library for web and social from a single AI production session.',
    campaignAssets: '23 studio e-commerce images (shot-93 through shot-115) covering the full debut collection. Linen sets (polka dot, white), structured separates (cream asymmetric), keyhole mini dress (black), crochet co-ords (navy). Front, side, and back angles per garment. Web-optimised exports for product pages and collection grids. Social-ready crops at 1:1 and 4:5 for Instagram feed and Stories.',
    brandOverview: 'Ailah Co is a contemporary Egyptian fashion brand building a wardrobe of versatile, wearable pieces across multiple fabrications — linen, crochet, and structured cotton. The debut collection spans statement co-ords and everyday separates: strapless polka dot linen sets, keyhole mini dresses, asymmetric structured separates, and open-knit crochet co-ords in a palette that moves between bold monochrome (navy, black) and clean neutral (cream, white). A brand for a woman who wants pieces that work across her life — not just for one occasion.',
    businessGoal: 'Launch a fully stocked e-commerce store with professional product imagery across every SKU in the debut collection — without a traditional photography budget or studio booking — at a quality level that matched brands spending significantly more, delivered in time for the launch window.',
    creativeDirection: 'White seamless background, warm directional studio light calibrated per fabric type, minimal styling throughout (gold jewellery, tan leather slides). Same model across all 23 frames. One visual world — clean, contemporary, aspirational without being cold. The garments carry the identity.',
    creativeStrategy: 'Designed a locked studio template first, then executed the full collection within it. Template-first means creative decisions are made once (light position, camera height, posing reference) and applied consistently across all frames. Shooting by garment category — linen sets, then structured separates, then crochet — kept lighting locked per fabric type and eliminated consistency drift.',
    campaignConcept: 'The debut catalogue — a complete visual library for every piece in the collection, shot as one coherent world. No piece looks like it was added later or shot separately. The catalogue communicates brand identity through consistency: a customer browsing Ailah Co should feel the same visual intelligence across every product image, from the polka dot linen set to the navy crochet co-ord.',
    aiImageProduction: '23 studio images across the full debut collection. Garment types: strapless linen sets, keyhole mini dresses, asymmetric structured separates, crochet co-ords. Colours: white polka dot, cream, black, navy. Angles: front, side, and back per piece. White seamless background, consistent model and styling throughout.',
    aiVideoProduction: 'Not part of this engagement. Still product imagery was the production priority for the launch catalogue — full SKU coverage with multi-angle consistency was the brief.',
    websiteDigital: 'We built Ailah Co\'s e-commerce store from the ground up — a clean, considered shopping experience designed to let the photography do the work. Product pages with full-resolution imagery across every angle, a collection grid that reads as a single coherent world, and a checkout flow stripped of everything that doesn\'t need to be there. The site feels like a brand, not a template. Every detail — typography scale, whitespace, image sizing — was calibrated to match the quality of the imagery we shot. A debut collection deserves a debut website that looks like it\'s been running for three years.',
    contentSystem: 'Delivered a complete product imagery library for launch — every SKU covered with the full angle set a modern e-commerce store requires. The consistent visual system means new pieces can be added to the same template as the collection grows, maintaining visual coherence across the catalogue over time.',
    results: 'Ailah Co launched its debut collection with full e-commerce imagery coverage across all 23 SKUs — a complete product catalogue delivered from a single AI production session. The visual consistency of the catalogue gave the brand the credibility of a much larger, better-resourced operation from their first public launch.',
  },
  {
    id: 'siwa-editorial',
    title: 'Gannube',
    category: 'Luxury',
    description: 'AI campaign imagery for a Cairo luxury linen brand — effortless silhouettes placed in desert canyons, coastal rock formations, and open landscape. Designed to breathe.',
    coverImage: '/ai-visuals/shot-39.jpg',
    challenge:
      'Gannube — a new Cairo luxury fashion house built around the philosophy of "the South" — needed campaign-quality AI imagery for their Levant Collection launch. Their visual identity demanded placement in environments that matched the brand DNA: monumental natural settings, earth-tone palette, effortless linen silhouettes. A conventional shoot would have required location logistics across multiple countries and significant production cost. The brief was to deliver that quality through AI production alone, using the brand\'s own visual language as the creative brief.',
    solution:
      'Built the campaign around the brand\'s core phrase: "Designed to Breathe." The creative direction placed multiple models in circular formation inside sandstone canyon formations — architecture borrowed from nature, mirroring Gannube\'s Egyptian roots and desert aesthetic. Earth-tone garments (sand, terracotta, cream) were selected to harmonise with the rock palette rather than contrast it. Golden hour light, no artificial fill. The environment became a character rather than a backdrop — reflecting Gannube\'s brand world of movement guided by instinct, refinement internally formed.',
    deliverables: [
      'Multi-model campaign editorial — Levant Collection launch',
      'Desert canyon location visual set',
      'AI campaign film for social and web',
      'Campaign assets aligned to Gannube brand book',
    ],
    gallery: [
      '/ai-visuals/shot-39.jpg',
    ],
    videos: ['/ai-visuals/video-15.mp4'],
    keyTakeaways: {
      creative:
        'The Gannube brief came with a brand identity document detailed enough to function as a complete creative brief. When a brand has defined its visual world that precisely — colour field, movement language, mascot philosophy — AI production becomes a translation exercise rather than an invention exercise. Clarity at the brand level produces clarity at the image level.',
      workflow:
        'Luxury fashion campaigns require environment selection before garment selection, not after. The rock formations, golden light temperature, and earth-tone palette of the canyon defined every garment and styling decision that followed. Getting the setting right is 70% of the creative work.',
      business:
        'For a brand at launch stage, one campaign visual set executed with full creative rigour outperforms 50 generic product shots. Gannube needed their imagery to establish the brand world before they had an audience — visual authority bought them the credibility to start building one.',
    },
    projectOverview: 'A full campaign visual production for Gannube\'s Levant Collection launch — the first campaign imagery for a Cairo luxury fashion house built on 100% organic Egyptian linen. The engagement produced hero editorial imagery and a campaign film using the brand\'s identity document as the complete creative brief. Scope: multi-model campaign editorial, portrait-format brand film, and a campaign visual library aligned to Gannube\'s brand world across web, social, and press.',
    campaignAssets: 'Hero campaign editorial — multi-model circular formation in sandstone canyon, delivered at full resolution for web and print use. Portrait campaign film (9:16, 1080×1920) for Instagram Stories, Reels, and website hero. Wide-format crops for press and editorial. All assets aligned to the Gannube brand book colour palette: earth tones — sand, terracotta, cream, feather.',
    brandOverview: 'Gannube (Arabic: "South") is a luxury fashion house founded in Cairo, built on the philosophy that refinement is internally formed rather than externally validated. The brand draws its name and identity from a direction that is not geographical but philosophical — the South as a posture, a resistance to noise, a deliberate stillness. Their debut Levant Collection is made entirely from 100% organic Egyptian linen, carrying the brand\'s core conviction: that a garment should allow the body to move freely, breathe naturally, and inhabit the world without effort. The brand mascot is the Tern — "The Sovereign Voyager" — a seabird that migrates by instinct rather than instruction. Tagline: Designed to Breathe.',
    businessGoal: 'Establish a complete campaign visual presence for the Levant Collection launch — hero imagery for the website, social campaign content for Instagram, and press-ready visuals — positioning the brand at the level of international luxury fashion houses from day one, without the cost or logistics of a multi-country location shoot.',
    creativeDirection: 'Visual language drawn directly from the Gannube brand book: earth tones (sand, terracotta, cream, feather), environments with geological scale, effortless silhouettes in movement, golden directional light with no artificial fill. The five material references — Fabric, Stone, Sea, Feather, Sand — defined both palette and texture. Models inhabit the environment rather than perform for the camera.',
    creativeStrategy: 'Used the Gannube brand identity document as the creative brief rather than writing a new one. When a brand has defined its visual world with that precision — colour field, movement philosophy, mascot symbolism, typographic voice — AI production becomes translation, not invention. Every generation decision was mapped directly to a principle from the document.',
    campaignConcept: '"Designed to Breathe" — multiple models in circular formation inside sandstone canyon formations, using the architecture of the rock as staging. Earth-tone linen garments harmonise with the desert palette rather than contrast it. The environment becomes a character: imagery where the garment feels like it was designed for the specific piece of earth it inhabits.',
    aiImageProduction: 'Campaign imagery generated against sandstone canyon formations — multi-model circular staging, natural rock architecture as set design. Garments in sand, terracotta, and cream selected to echo the geological palette. Golden hour light temperature (warm, directional, no artificial fill) consistent across all frames.',
    aiVideoProduction: 'Campaign film in portrait format (9:16) for native social delivery. Effortless model movement against natural desert and coastal environments — light catching linen fabric in motion, drape, wind, breath. Delivered at 1080×1920 for Instagram and website hero deployment.',
    websiteDigital: 'We built Gannube a website that feels like entering the brand world — not browsing a catalogue. The campaign imagery anchors every page: full-bleed hero visuals, slow scroll pacing, and a typographic system drawn directly from the brand book. Dark earth tones, deliberate silence between sections, and a layout that treats the garment as the only thing worth looking at. The site communicates "this is a luxury house" before a single word of copy is read. We designed the collection page so that moving between pieces feels like walking through a curated space, not clicking through a grid. For a brand that launched with zero audience, the website did the credibility work that years of trading usually build.',
    contentSystem: 'Delivered a core campaign visual library for the Levant Collection: hero imagery, campaign film, and a consistent visual language extensible across future collections. The visual system — earth tones, natural settings, effortless movement — is format-agnostic and applicable to editorial, product, and motion without rebuilding the brief.',
    results: 'Gannube\'s Levant Collection launched with a complete campaign visual presence — website hero, social campaign, and press assets — established without a traditional location shoot. Campaign imagery aligned precisely to the brand\'s identity document positioned Gannube within the visual register of established international luxury fashion houses from their first public post.',
  },
  {
    id: 'the-girl-theory',
    title: 'The Girl Theory',
    category: 'Fashion',
    description: 'Full studio e-commerce set for a linen separates collection — camp-collar shirts, drawstring tops, wide-leg trousers, and pinstripe pieces in neutral earth tones.',
    coverImage: '/ai-visuals/shot-65.jpg',
    challenge:
      'The Girl Theory needed complete e-commerce catalogue coverage for a multi-piece linen separates collection — camp-collar shirts, drawstring-waist tops, V-neck polos, pinstripe styles, and wide-leg trousers across oat, cream, beige, and white. The challenge: making a large catalogue of visually similar, neutral-toned linen pieces feel distinct enough that every garment reads as its own SKU — without any piece looking interchangeable with its neighbour.',
    solution:
      'Built a unified white studio system with soft directional light calibrated specifically for linen — close enough to reveal weave and drape, without creating harsh shadow. Shot the full collection with a consistent posing brief across all 36 frames: relaxed but deliberate, body language that communicated ease and wearability rather than high-fashion rigidity. Front, side, and back angles for every silhouette gave the catalogue full coverage for both product pages and social content.',
    deliverables: [
      '36 studio e-commerce images across the full linen separates collection',
      'Camp-collar shirts, drawstring tops, V-neck polos, pinstripe styles, and wide-leg trousers',
      'Front, side, and back angles per garment',
      'Earth-tone colour accuracy across oat, cream, beige, and white',
      'Web and social-ready exports',
    ],
    gallery: [
      '/ai-visuals/shot-42.jpg',
      '/ai-visuals/shot-43.jpg',
      '/ai-visuals/shot-44.jpg',
      '/ai-visuals/shot-45.jpg',
      '/ai-visuals/shot-46.jpg',
      '/ai-visuals/shot-47.jpg',
      '/ai-visuals/shot-48.jpg',
      '/ai-visuals/shot-49.jpg',
      '/ai-visuals/shot-50.jpg',
      '/ai-visuals/shot-51.jpg',
      '/ai-visuals/shot-52.jpg',
      '/ai-visuals/shot-53.jpg',
      '/ai-visuals/shot-54.jpg',
      '/ai-visuals/shot-55.jpg',
      '/ai-visuals/shot-56.jpg',
      '/ai-visuals/shot-57.jpg',
      '/ai-visuals/shot-58.jpg',
      '/ai-visuals/shot-59.jpg',
      '/ai-visuals/shot-60.jpg',
      '/ai-visuals/shot-61.jpg',
      '/ai-visuals/shot-62.jpg',
      '/ai-visuals/shot-63.jpg',
      '/ai-visuals/shot-64.jpg',
      '/ai-visuals/shot-65.jpg',
      '/ai-visuals/shot-66.jpg',
      '/ai-visuals/shot-67.jpg',
      '/ai-visuals/shot-68.jpg',
      '/ai-visuals/shot-69.jpg',
      '/ai-visuals/shot-70.jpg',
      '/ai-visuals/shot-71.jpg',
      '/ai-visuals/shot-72.jpg',
      '/ai-visuals/shot-73.jpg',
      '/ai-visuals/shot-74.jpg',
      '/ai-visuals/shot-75.jpg',
      '/ai-visuals/shot-76.jpg',
      '/ai-visuals/shot-77.jpg',
    ],
    keyTakeaways: {
      creative:
        'Neutral linen collections fail photographically when every piece looks like every other piece. The fix isn\'t background or lighting — it\'s angle discipline. Front, side, and back coverage per silhouette is what makes a camp-collar shirt read differently from a drawstring top when both are oat-coloured and similarly proportioned.',
      workflow:
        'High-volume linen catalogues require shooting by silhouette group rather than garment order: all shirts together, all tops, all trousers. Linen\'s drape and surface character changes significantly between silhouette types, and batching keeps the lighting locked while posing adapts per garment.',
      business:
        'A 36-image catalogue from a single AI production session gives a small fashion brand the content volume of a much larger one. For The Girl Theory\'s audience — considered buyers who read between the images — visual consistency is a trust signal as much as a design signal.',
    },
    projectOverview: 'A full studio e-commerce catalogue for The Girl Theory\'s linen separates collection — 36 campaign-quality product images across five silhouette groups: camp-collar shirts, drawstring-waist tops, V-neck polos, pinstripe co-ords, and wide-leg trousers. The engagement covered the complete production pipeline: studio template design, silhouette-based sequencing, and front/side/back angle coverage per garment — delivered as a launch-ready visual library for the brand\'s e-commerce store and Instagram presence.',
    campaignAssets: '36 studio e-commerce images (shot-42 through shot-77) across five silhouette groups. Colours: oat, cream, beige, white. Front, side, and back angles per garment. Web-optimised exports for product pages, collection grids, and email marketing. Asset naming structured for direct e-commerce platform upload. Instagram-ready crops at 1:1 and 4:5 for feed and Stories.',
    brandOverview: 'The Girl Theory is an Egyptian fashion brand building a considered wardrobe of linen separates — camp-collar shirts, drawstring-waist tops, wide-leg trousers, V-neck polos, and pinstripe co-ords in a palette of oat, cream, beige, and white. The brand is positioned for a woman who prefers natural fabrics, relaxed silhouettes, and a wardrobe that works harder with fewer pieces. The Girl Theory\'s design language is quiet and deliberate — no decoration for its own sake, nothing the garment doesn\'t need.',
    businessGoal: 'Produce a complete studio e-commerce catalogue for the full linen separates collection — enough visual coverage to launch the brand\'s online store and Instagram simultaneously. The brief required front, side, and back angles for every silhouette: full coverage for a considered buyer who reads product pages carefully before purchasing.',
    creativeDirection: 'White studio background, soft directional light tuned specifically for linen — close enough to reveal weave and natural drape, not so harsh it creates shadow drama on neutral tones. Posing brief: relaxed and inhabiting the garment, not performing it. The model brief was aligned to The Girl Theory\'s customer: a woman who wears these pieces because they fit her life, not because they photograph well.',
    creativeStrategy: 'Shot by silhouette group rather than garment order: all camp-collar shirts together, then all tops, then all trousers, then all co-ords. Linen changes character significantly across silhouette types — the drape of a wide-leg trouser needs a different light angle than the structure of a camp-collar shirt. Grouping kept light locked per garment type and made post-production colour accuracy consistent within each group.',
    campaignConcept: 'The collection as a wardrobe — not 36 individual SKUs but one coherent visual system. A customer browsing The Girl Theory should be able to see immediately how the camp-collar shirt works with the wide-leg trouser, and how both swap into the pinstripe co-ord. The catalogue communicates the collection logic, not just the individual pieces.',
    aiImageProduction: '36 studio images across the full linen separates collection. Silhouettes: camp-collar shirts, drawstring-waist tops, V-neck polos, pinstripe co-ords, wide-leg trousers. Colours: oat, cream, beige, white. Angles: front, side, and back per garment. White studio background, consistent lighting calibrated for linen texture throughout.',
    aiVideoProduction: 'Not part of this engagement. Studio imagery was the production priority — full catalogue coverage was the brief, and video would have diluted the session time needed to hit 36 frames at full angle coverage.',
    websiteDigital: 'We built The Girl Theory\'s e-commerce store with the same restraint the brand puts into its garments — nothing that doesn\'t belong. Clean product pages where the linen speaks, a collection grid that shows the range without overwhelming it, and a site architecture that guides a considered buyer from discovery to checkout without a single unnecessary click. The typography is quiet and purposeful. The whitespace is generous. The overall effect is a store that feels curated, not stocked. We paid particular attention to how the neutral palette reads on screen — colour-managed imagery, careful compression, and display sizing that keeps the oat-cream-beige distinctions visible at every breakpoint. A brand built around considered buying deserves a website that rewards the same attention.',
    contentSystem: 'Delivered a complete product imagery library for the full collection. The consistent visual system is extensible — new pieces can be added to the same studio template as the collection grows without disrupting the visual coherence of the existing catalogue.',
    results: 'The Girl Theory launched its full linen separates collection with complete e-commerce imagery coverage — 36 images across all silhouettes and colorways, delivered from a single AI production session. The catalogue gave the brand the visual depth of a fully-resourced product launch without the traditional studio, crew, and location costs.',
  },
  {
    id: 'blue-floral-dress',
    title: 'Blue Floral Dress',
    category: 'Fashion',
    description: 'Studio product shoot for a bold blue floral-print long-sleeve mock-neck midi dress. High-impact print, precise tonal control.',
    coverImage: '/ai-visuals/shot-32.png',
    challenge:
      'A high-contrast blue and white floral print dress needed studio photography that kept the pattern reading sharply without competing with the background, a common failure point for bold printed pieces at scale.',
    solution:
      'Shot against a clean white background with soft, even studio light that rendered the navy blue floral pattern with full detail while keeping the white ground of the dress and the studio background clearly distinct.',
    deliverables: [
      'Hero studio product shot',
      'Print-detail and garment close-up frames',
      'White-background e-commerce format',
      'Social and catalogue crops',
    ],
    gallery: [
      '/ai-visuals/shot-32.png',
    ],
    videos: [],
    keyTakeaways: {
      creative:
        'Bold prints need neutral, controlled studio environments. Any background colour or texture competes directly with the pattern, fragmenting the image and making the print harder to read at scroll speed.',
      workflow:
        'Colour-managed shooting for printed garments means calibrating the monitor, the light, and the export profile in one session, not correcting blue-cast in post after the fact.',
      business:
        'Printed pieces are harder to photograph than solids but drive higher initial engagement. A well-lit print shot that renders pattern accurately earns the kind of immediate stop-the-scroll attention that solid colours rarely achieve.',
    },
  },
];
