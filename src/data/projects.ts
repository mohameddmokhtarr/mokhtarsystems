export type ProjectCategory = 'Fashion' | 'Beauty' | 'Luxury' | 'Commercial';

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
}

export const projects: Project[] = [
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
    id: 'export-factory',
    title: 'Kavé x Mawzoun',
    category: 'Commercial',
    description: 'Brand film for Kavé coffee and Mawzoun trading — from factory floor to premium retail, built for European export markets.',
    coverImage: '/ai-visuals/shot-40.jpg',
    challenge:
      'Kavé and Mawzoun needed a single commercial film that worked across two registers: the raw industrial credibility of a real production facility, and the premium retail identity of a brand positioning itself for European buyers.',
    solution:
      'Shot the full vertical — factory roasting floor, slow-motion coffee bean sequences, and the Kavé retail space with its copper-toned bar and capsule wall. The film moves from origin to brand, giving B2B buyers proof of scale and end consumers a reason to care.',
    deliverables: [
      'Full brand commercial film',
      'Factory and roasting floor sequences',
      'Slow-motion coffee bean product shots',
      'Kavé retail interior campaign footage',
      'Export-market assets for European B2B and retail audiences',
    ],
    gallery: [
      '/ai-visuals/shot-40.jpg',
    ],
    videos: ['/ai-visuals/video-12.mp4'],
    keyTakeaways: {
      creative:
        'The strongest brand films move through scale — from the rawness of production to the polish of retail. Kavé works because it earns the premium identity by first showing the process behind it.',
      workflow:
        'A two-register shoot (industrial + retail) requires two completely different lighting and framing approaches in the same production day. Locking the visual language of each environment in advance is what keeps them feeling like one film rather than two.',
      business:
        'For export brands, a film that shows both the factory and the finished retail experience cuts the sales cycle in half. European buyers need proof of production scale; consumers need a brand they want to be part of.',
    },
  },
  {
    id: 'siwa-editorial',
    title: 'Siwa Editorial',
    category: 'Luxury',
    description: 'Multi-model luxury fashion film shot against dramatic sandstone canyon formations. Earth-tone garments, circular staging, golden desert light.',
    coverImage: '/ai-visuals/shot-39.jpg',
    challenge:
      'A luxury fashion film required a setting that elevated the garments beyond the studio — an environment that felt monumental, natural, and completely unlike anything a conventional shoot could produce.',
    solution:
      'Placed multiple models in a circular formation inside a sandstone canyon, using the architecture of the rock itself as the staging. Earth-tone garments were selected to harmonise with the desert palette, letting the scale of the environment do the storytelling.',
    deliverables: [
      'Multi-model luxury fashion film',
      'Desert canyon location editorial',
      'Full campaign video for social and web',
      'Earth-tone collection campaign assets',
    ],
    gallery: [
      '/ai-visuals/shot-39.png',
    ],
    videos: ['/ai-visuals/video-11.mp4'],
    keyTakeaways: {
      creative:
        'Scale is a creative tool. Placing models inside a space that dwarfs them shifts the viewer\'s attention from product to world — and a world worth inhabiting is worth buying into.',
      workflow:
        'Location-driven campaigns require environment selection before garment selection, not after. The rock formations, light temperature, and palette of the canyon defined every garment and styling decision that followed.',
      business:
        'Luxury fashion films in monumental natural settings earn significantly higher organic reach than studio content. The rarity of the environment signals the rarity of the brand.',
    },
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
