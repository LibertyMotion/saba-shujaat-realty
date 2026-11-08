/**
 * Client reviews — copied WORD FOR WORD from Saba's Zillow profile
 * (https://www.zillow.com/profile/SabaShujaat), all rated 5.0.
 * Name, date and transaction line are exactly as Zillow displays them, so any
 * visitor can verify each review at the source. Only one change: an emoji that
 * didn't survive copy/paste ("??") was dropped from the fatou8 review.
 * Zillow's auto-generated username "zuser20150511111859294" is shown as "Zillow user".
 *
 * The FTC's 2024 rule bans fake or altered reviews — never edit the text.
 * Add new reviews at the top of the list as they appear on Zillow.
 * Use `ids` on <Testimonials> to choose which appear on each page.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  /** Transaction line exactly as shown on Zillow */
  context: string;
  /** Review date (YYYY-MM-DD) as shown on Zillow */
  date: string;
  source: 'Zillow';
  sourceUrl: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Saba's public reply on Zillow, if any */
  reply?: string;
};

const ZILLOW = 'https://www.zillow.com/profile/SabaShujaat';

export const testimonials: Testimonial[] = [
  {
    id: 'shukria',
    name: 'Shukria Ghaffar',
    date: '2025-02-20',
    context: 'Sold a Single Family home in 2025 in Powell, OH.',
    quote:
      'Working with Saba to sell my house was a great experience from start to finish. She was professional, knowledgeable, and always responsive to my questions. Her attention to detail and dedication really stood out, and she worked hard to get the best possible outcome. Selling a home can be stressful, but Saba made the entire process smooth and reassuring. I would highly recommend her to anyone looking to sell or buy a home.',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'syed',
    name: 'Syed Abbas',
    date: '2024-06-27',
    context: 'Bought a Single Family home in 2024 in Smokey ridge estates, Powell, OH.',
    quote:
      'I recently had the pleasure of working with Saba to purchase a rental property in Columbus, OH, and I couldn’t be more satisfied with the experience. From start to finish, Saba was professional, knowledgeable, and incredibly helpful. Saba took the time to understand my needs and preferences, guiding me through the process with expert advice and insightful recommendations. Their attention to detail and dedication to finding the perfect property made all the difference. Communication was seamless; Saba was always available to answer my questions and provided regular updates on the progress. Their negotiation skills ensured that I got the best deal possible, and their thorough knowledge of the local market was invaluable. Overall, working with Saba was a fantastic experience. I highly recommend them to anyone looking to buy property in Columbus. Their expertise and commitment to client satisfaction are truly top-notch!',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'fatou',
    name: 'fatou8',
    date: '2024-06-25',
    context: 'Bought and sold a home in 2023.',
    quote:
      'Finding the perfect space can be daunting, but with Saba helping me out, the entire process was smooth! From the very first conversation, she impressed me with her in-depth knowledge of the market and genuine interest in finding a property that truly fit my needs and budget! If you’re looking for a realtor who goes the extra mile and truly prioritizes your needs, look no further! I highly recommend Saba to anyone seeking a stress-free and successful real estate experience',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'waqas',
    name: 'Waqas Aslam',
    date: '2024-02-14',
    context: 'Bought a Vacant Land home in 2023 in Marysville, OH.',
    quote:
      'I am grateful for the support and expertise Saba brought to the table. Her negotiation skills were top-notch, resulting in a successful purchase. She was always prompt in communication and ensured I felt informed at every step. Her professionalism and responsiveness exceeded my expectations. If you’re looking for a dedicated and knowledgeable realtor, look no further.',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'relocation',
    name: 'Zillow user',
    date: '2023-05-06',
    context: 'Bought a Single Family home in 2023 in Dublin, OH.',
    quote:
      'We were moving from Virginia to Columbus Ohio and we wanted to get a rent!! I asked in a WhatsApp group about a good realtor that I can contact for help. Her name was posted third. But she was the first to answer. She said “I don’t work with rent, but you called me and I will not let you down.” For sure she never did. She used to go to places, turn her camera on and show us the properties. Long story short, we got the rent but for a family of five it was not convenient. I called her every time we see a house we like online only to find out she already knows pros and cons and is ready to take us for a tour. We finally decided to build!! She knows the builders, prices and locations. During the painful road of building a house, she always answers our questions, gives us valuable information and is there every step of the way. I didn’t know a good realtor only but I also gained a friend. Thank you Saba.',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'delaware',
    name: 'hubingqian2011',
    date: '2023-05-03',
    context: 'Bought a Single Family home in 2023 in Delaware, OH.',
    quote:
      'Working with Saba, our real estate agent, was a highly positive experience. She effectively guided us through the process of purchasing a new home, showcasing her professional capabilities and expertise. Her assistance was invaluable, making the typically complex task of home buying much smoother and more manageable. We appreciated her diligent work and would highly recommend her services to others.',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
  {
    id: 'dana',
    name: 'Dana',
    date: '2022-01-14',
    context: 'Sold a Condo home in 2021 in Shannon heights, Dublin, OH.',
    quote:
      'Saba was very helpful in the sale of my condo and was responsive to all of my concerns/questions. Her input in getting the condo ready for sale and marketing plan enabled a quick sale at a competitive market rate. I would highly recommend Saba as a real estate agent.',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
    reply: 'Thank you Dana! It was a great experience working for the sale of your condo. Thank you for trusting me.',
  },
  {
    id: 'muzaffar',
    name: 'axmuzaffar',
    date: '2021-09-27',
    context: 'Bought and sold a Single Family home in 2021 in Hilliard, OH.',
    quote:
      '8 years ago Saba Shujaat helped my wife and I buy our very first house! We loved our house and built many memories in it but it was time for a change. We had such a great experience with our first house that we, once again, chose Saba as our realtor to help us sell our house and also to help us buy a new one too. Like before, she made the process from selling for the first time to purchasing our new house a smooth & streamlined one. We would highly recommend her for anyone looking to buy or sell a house!',
    source: 'Zillow',
    sourceUrl: ZILLOW,
    rating: 5,
  },
];

export const pickTestimonials = (ids?: string[]) =>
  ids ? (ids.map((id) => testimonials.find((t) => t.id === id)).filter(Boolean) as Testimonial[]) : testimonials;

export const formatReviewDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
