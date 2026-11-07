/**
 * Community pages (local SEO). Copy is written to Fair Housing advertising
 * guidance: describe places, homes and amenities, never the people who live
 * there ("family-friendly", "safe", "perfect for young professionals" etc. are
 * avoided on purpose). Schools are named factually and linked to official
 * sources instead of being rated.
 *
 * Fact-check every line before launch and add Saba's own local insight —
 * unique, first-hand detail is what makes these pages rank.
 */

export type Community = {
  slug: string;
  name: string;
  county: string;
  tagline: string;
  intro: string;
  highlights: string[];
  homes: string;
  schools: { note: string; links: { label: string; href: string }[] };
  commute: string;
  nearby: string[];
  /** Saba's first-hand perspective. Leave undefined to show a placeholder. */
  localTake?: string;
};

const ohioReportCard = { label: 'Ohio School Report Cards', href: 'https://reportcard.education.ohio.gov/' };

const all: Community[] = [
  {
    slug: 'westerville',
    name: 'Westerville',
    county: 'Franklin & Delaware Counties',
    tagline: 'Historic Uptown charm with quick access to all of Columbus.',
    intro:
      'Westerville blends a walkable, historic Uptown district with established neighborhoods, newer subdivisions and an extensive park and trail system — all about 15 miles northeast of downtown Columbus.',
    highlights: [
      'Uptown Westerville’s locally owned shops, restaurants and seasonal events',
      'Home of Otterbein University',
      'Inniswood Metro Gardens, Alum Creek trails and nearby Hoover Reservoir',
      'Quick access to I-270, I-71 and the Polaris shopping and dining corridor',
    ],
    homes:
      'Housing ranges from classic homes near Uptown to mid-century ranches, 1990s–2000s two-stories and newer construction on the edges of town, plus condos and townhomes.',
    schools: {
      note:
        'Most of Westerville is served by Westerville City Schools, which also covers parts of Genoa, Blendon, Plain and Sharon townships, Minerva Park and Columbus. District lines don’t follow city limits, so always confirm by address.',
      links: [
        { label: 'Westerville City Schools', href: 'https://www.westerville.k12.oh.us/' },
        ohioReportCard,
      ],
    },
    commute: 'Roughly 20–30 minutes to downtown Columbus by car, depending on route and traffic.',
    nearby: ['genoa-township', 'lewis-center', 'galena', 'gahanna'],
  },
  {
    slug: 'genoa-township',
    name: 'Genoa Township',
    county: 'Delaware County',
    tagline: 'Wooded lots and lake access just north of Westerville.',
    intro:
      'Genoa Township wraps around the western shore of Hoover Reservoir, offering a quieter, more spacious setting with Westerville amenities minutes away.',
    highlights: [
      'Hoover Reservoir shoreline, nature preserves and township parks',
      'Larger lots and established, tree-lined subdivisions',
      'Close to Polaris, Westerville and I-71',
    ],
    homes:
      'Expect a mix of 1980s–2000s two-stories, custom homes on larger lots and newer communities.',
    schools: {
      note:
        'Genoa Township is split between Westerville City, Olentangy Local and Big Walnut Local school districts — the district depends on the exact address.',
      links: [
        { label: 'Genoa Township schools info', href: 'https://genoatwp.com/about/schools.php' },
        ohioReportCard,
      ],
    },
    commute: 'Typically 25–35 minutes to downtown Columbus.',
    nearby: ['westerville', 'galena', 'lewis-center', 'sunbury'],
  },
  {
    slug: 'lewis-center',
    name: 'Lewis Center',
    county: 'Delaware County',
    tagline: 'Newer neighborhoods next to Polaris and two great parks.',
    intro:
      'Lewis Center, largely within Orange Township, is known for its newer subdivisions and convenient location between Polaris, I-71 and the parks of southern Delaware County.',
    highlights: [
      'Minutes to Polaris Fashion Place and the Polaris Parkway corridor',
      'Highbanks Metro Park and Alum Creek State Park nearby',
      'Easy I-71 access north and south',
    ],
    homes:
      'Predominantly 1990s-to-present two-stories and ranches in planned communities, with a growing number of townhomes and new builds.',
    schools: {
      note: 'Much of Lewis Center is served by Olentangy Local Schools; confirm by address.',
      links: [{ label: 'Olentangy Schools', href: 'https://www.olentangy.k12.oh.us/' }, ohioReportCard],
    },
    commute: 'Typically 20–30 minutes to downtown Columbus via I-71.',
    nearby: ['westerville', 'powell', 'genoa-township', 'delaware'],
  },
  {
    slug: 'powell',
    name: 'Powell',
    county: 'Delaware County',
    tagline: 'A lively downtown core surrounded by parks and newer homes.',
    intro:
      'Powell pairs a small, walkable downtown with well-kept neighborhoods and easy access to some of Central Ohio’s favorite attractions.',
    highlights: [
      'Downtown Powell restaurants, shops and community events',
      'Near the Columbus Zoo and Aquarium and the Scioto River',
      'Extensive park and bike-path network',
    ],
    homes:
      'Mostly 1990s-to-present single-family homes, from starter two-stories to larger custom homes.',
    schools: {
      note: 'Powell is largely served by Olentangy Local Schools; some addresses fall in other districts.',
      links: [{ label: 'Olentangy Schools', href: 'https://www.olentangy.k12.oh.us/' }, ohioReportCard],
    },
    commute: 'Typically 25–35 minutes to downtown Columbus.',
    nearby: ['dublin', 'lewis-center', 'delaware', 'worthington'],
    localTake:
      'Powell has been Saba’s home for 16 years — so this is a neighbor’s perspective, not just market data. Saba has helped clients buy and sell right here in Powell, including investment purchases. Ask about specific subdivisions, nearby new construction, and what homes like yours are selling for.',
  },
  {
    slug: 'galena',
    name: 'Galena',
    county: 'Delaware County',
    tagline: 'Village character on the north end of Hoover Reservoir.',
    intro:
      'Galena is a small, historic village near the north end of Hoover Reservoir, surrounded by growing neighborhoods and open land.',
    highlights: [
      'A small, historic village center',
      'Hoover Reservoir and nearby nature preserves',
      'A short drive to Westerville and Sunbury',
    ],
    homes:
      'A blend of historic village homes, newer subdivisions and homes on acreage in the surrounding township.',
    schools: {
      note: 'Galena is served by Big Walnut Local Schools; confirm by address.',
      links: [{ label: 'Big Walnut Local Schools', href: 'https://www.bwls.net/' }, ohioReportCard],
    },
    commute: 'Typically 30–40 minutes to downtown Columbus.',
    nearby: ['sunbury', 'genoa-township', 'westerville'],
  },
  {
    slug: 'sunbury',
    name: 'Sunbury',
    county: 'Delaware County',
    tagline: 'A classic town square and some of the region’s newest homes.',
    intro:
      'Sunbury centers on a traditional town square and has seen significant new-home construction, with I-71 and the Tanger Outlets close by.',
    highlights: [
      'Historic town square and local restaurants',
      'Alum Creek State Park close by',
      'Quick access to I-71 and the Tanger Outlets area',
    ],
    homes:
      'Many newer subdivisions and new-construction communities, plus older homes near the square and rural properties.',
    schools: {
      note: 'Sunbury is served by Big Walnut Local Schools; confirm by address.',
      links: [{ label: 'Big Walnut Local Schools', href: 'https://www.bwls.net/' }, ohioReportCard],
    },
    commute: 'Typically 30–40 minutes to downtown Columbus.',
    nearby: ['galena', 'genoa-township', 'delaware'],
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    county: 'Delaware County',
    tagline: 'A historic county seat with a thriving downtown.',
    intro:
      'The City of Delaware offers a historic, walkable downtown, Ohio Wesleyan University and a wide range of housing at the northern edge of the metro.',
    highlights: [
      'Downtown Delaware’s restaurants, shops and events',
      'Ohio Wesleyan University',
      'Delaware State Park and Alum Creek nearby',
    ],
    homes:
      'Everything from historic homes near downtown to new-construction neighborhoods on the city’s edges.',
    schools: {
      note: 'Most of the city is served by Delaware City Schools; nearby addresses may be Olentangy or Buckeye Valley.',
      links: [{ label: 'Delaware City Schools', href: 'https://www.dcs.k12.oh.us/' }, ohioReportCard],
    },
    commute: 'Typically 35–45 minutes to downtown Columbus.',
    nearby: ['powell', 'lewis-center', 'sunbury'],
  },
  {
    slug: 'new-albany',
    name: 'New Albany',
    county: 'Franklin & Licking Counties',
    tagline: 'Georgian architecture, white fences and a growing job center.',
    intro:
      'New Albany is known for its consistent Georgian-style architecture, miles of leisure trails and a fast-growing business park — including proximity to Intel’s planned Ohio campus.',
    highlights: [
      'Walkable Market Square and Rose Run Park',
      'Extensive leisure-trail network',
      'New Albany International Business Park and Intel’s planned Ohio site nearby',
    ],
    homes:
      'Mostly 1990s-to-present traditional homes, from townhomes to large estate properties.',
    schools: {
      note: 'Much of New Albany is served by New Albany-Plain Local Schools; some addresses are in other districts.',
      links: [{ label: 'New Albany-Plain Local Schools', href: 'https://www.napls.us/' }, ohioReportCard],
    },
    commute: 'Typically 20–30 minutes to downtown Columbus via SR-161 and I-270.',
    nearby: ['gahanna', 'westerville'],
  },
  {
    slug: 'gahanna',
    name: 'Gahanna',
    county: 'Franklin County',
    tagline: 'Creekside dining and parks, minutes from the airport.',
    intro:
      'Gahanna offers established neighborhoods, the Creekside district along Big Walnut Creek and quick access to John Glenn Columbus International Airport.',
    highlights: [
      'Creekside district restaurants and events along Big Walnut Creek',
      'Ohio’s “Herb Capital,” with the Ohio Herb Education Center',
      'Close to the airport, I-270 and Easton',
    ],
    homes:
      'Largely 1960s–2000s ranches, split-levels and two-stories, with some newer infill and condos.',
    schools: {
      note: 'Gahanna is largely served by Gahanna-Jefferson Public Schools; confirm by address.',
      links: [{ label: 'Gahanna-Jefferson Public Schools', href: 'https://www.gjps.org/' }, ohioReportCard],
    },
    commute: 'Typically 15–25 minutes to downtown Columbus.',
    nearby: ['new-albany', 'westerville'],
  },
  {
    slug: 'worthington',
    name: 'Worthington',
    county: 'Franklin County',
    tagline: 'A historic village green and tree-lined streets.',
    intro:
      'Founded in 1803, Worthington is known for Old Worthington’s historic village green, a popular farmers market and mature, tree-lined neighborhoods.',
    highlights: [
      'Old Worthington’s shops, restaurants and Saturday farmers market',
      'Olentangy Trail access and community parks',
      'Central location between downtown Columbus and Polaris',
    ],
    homes:
      'Historic homes near the village green, mid-century ranches and colonials, and a limited supply of newer homes.',
    schools: {
      note: 'Worthington is largely served by Worthington City Schools; confirm by address.',
      links: [{ label: 'Worthington City Schools', href: 'https://www.worthington.k12.oh.us/' }, ohioReportCard],
    },
    commute: 'Typically 15–25 minutes to downtown Columbus.',
    nearby: ['powell', 'westerville', 'lewis-center'],
  },
  {
    slug: 'dublin',
    name: 'Dublin',
    county: 'Franklin, Delaware & Union Counties',
    tagline: 'Bridge Park energy, historic charm and a strong job base.',
    intro:
      'Dublin pairs a historic district along the Scioto River with the newer Bridge Park neighborhood, extensive parks and a large corporate employment base on Columbus’s northwest side.',
    highlights: [
      'Bridge Park and Historic Dublin dining, shops and riverfront parks',
      'Home of the Dublin Irish Festival and the Memorial Tournament at Muirfield Village',
      'Miles of paved bike paths and a large park system',
      'Easy access to I-270 and US-33',
    ],
    homes:
      'Mostly 1970s-to-present single-family neighborhoods, from established subdivisions to golf-course and estate homes, plus condos and newer construction.',
    schools: {
      note: 'Much of Dublin is served by Dublin City Schools; some addresses fall in Hilliard, Olentangy or other districts — confirm by address.',
      links: [{ label: 'Dublin City Schools', href: 'https://www.dublinschools.net/' }, ohioReportCard],
    },
    commute: 'Typically 20–30 minutes to downtown Columbus.',
    nearby: ['powell', 'hilliard', 'worthington'],
  },
  {
    slug: 'hilliard',
    name: 'Hilliard',
    county: 'Franklin County',
    tagline: 'A historic downtown, rail-trail living and quick freeway access.',
    intro:
      'Hilliard, on Columbus’s west side, combines the revitalized Old Hilliard district with established neighborhoods, newer subdivisions and easy access to I-270.',
    highlights: [
      'Old Hilliard’s local restaurants, shops and community events',
      'The Heritage Rail Trail for walking, running and biking',
      'Close to Tuttle Crossing shopping and I-270',
    ],
    homes:
      'A wide mix: older homes near Old Hilliard, 1970s–2000s ranches and two-stories, and newer subdivisions and townhomes on the edges of town.',
    schools: {
      note: 'Hilliard City Schools serves Hilliard along with parts of Columbus, Dublin and nearby townships — confirm by address.',
      links: [{ label: 'Hilliard City Schools', href: 'https://www.hilliardschools.org/' }, ohioReportCard],
    },
    commute: 'Typically 20–30 minutes to downtown Columbus.',
    nearby: ['dublin', 'powell', 'worthington'],
  },
];

// Saba's primary service areas first (home page shows the first six).
const order = ['westerville', 'powell', 'delaware', 'sunbury', 'gahanna', 'hilliard', 'dublin', 'lewis-center', 'genoa-township', 'galena', 'new-albany', 'worthington'];
export const communities: Community[] = order.map((slug) => all.find((c) => c.slug === slug)!).filter(Boolean);

export const communityBySlug = (slug: string) => communities.find((c) => c.slug === slug);
