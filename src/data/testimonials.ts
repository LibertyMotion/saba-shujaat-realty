/**
 * Client reviews — copied from Saba's Zillow profile (all 5.0). Quoted word for word;
 * the two longest are excerpted with "…" (nothing reworded) and an emoji-encoding
 * artifact was removed. The FTC's 2024 rule bans fake or altered reviews, so never
 * change meaning. Reviewers shown by first name + initial,
 * or as "Zillow reviewer" where the profile used a username.
 * Use `ids` on <Testimonials> to choose which appear on each page.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  context: string;
  source: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    id: 'shukria',
    quote:
      'Working with Saba to sell my house was a great experience from start to finish. She was professional, knowledgeable, and always responsive to my questions. Her attention to detail and dedication really stood out, and she worked hard to get the best possible outcome. Selling a home can be stressful, but Saba made the entire process smooth and reassuring. I would highly recommend her to anyone looking to sell or buy a home.',
    name: 'Shukria G.',
    context: 'Sold a home in Powell, OH · 2025',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'muzaffar',
    quote:
      '8 years ago Saba Shujaat helped my wife and I buy our very first house! We loved our house and built many memories in it but it was time for a change. We had such a great experience with our first house that we, once again, chose Saba as our realtor to help us sell our house and also to help us buy a new one too. Like before, she made the process from selling for the first time to purchasing our new house a smooth & streamlined one. We would highly recommend her for anyone looking to buy or sell a house!',
    name: 'Zillow reviewer',
    context: 'Bought & sold in Hilliard, OH · 2021',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'waqas',
    quote:
      'I am grateful for the support and expertise Saba brought to the table. Her negotiation skills were top-notch, resulting in a successful purchase. She was always prompt in communication and ensured I felt informed at every step. Her professionalism and responsiveness exceeded my expectations. If you’re looking for a dedicated and knowledgeable realtor, look no further.',
    name: 'Waqas A.',
    context: 'Bought land in Marysville, OH · 2023',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'dana',
    quote:
      'Saba was very helpful in the sale of my condo and was responsive to all of my concerns/questions. Her input in getting the condo ready for sale and marketing plan enabled a quick sale at a competitive market rate. I would highly recommend Saba as a real estate agent.',
    name: 'Dana',
    context: 'Sold a condo in Dublin, OH · 2021',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'relocation',
    quote:
      'We were moving from Virginia to Columbus Ohio… She used to go to places, turn her camera on and show us the properties. … I called her every time we see a house we like online only to find out she already knows pros and cons and is ready to take us for a tour. We finally decided to build!! She knows the builders, prices and locations. During the painful road of building a house, she always answers our questions, gives us valuable information and is there every step of the way. I didn’t know a good realtor only but I also gained a friend. Thank you Saba.',
    name: 'Zillow reviewer',
    context: 'Relocated from Virginia · built new in Dublin, OH · 2023',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'syed',
    quote:
      'I recently had the pleasure of working with Saba to purchase a rental property in Columbus, OH, and I couldn’t be more satisfied with the experience. … Saba took the time to understand my needs and preferences, guiding me through the process with expert advice and insightful recommendations. … Communication was seamless; Saba was always available to answer my questions and provided regular updates on the progress. Their negotiation skills ensured that I got the best deal possible, and their thorough knowledge of the local market was invaluable.',
    name: 'Syed A.',
    context: 'Bought an investment property in Powell, OH · 2024',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'delaware',
    quote:
      'Working with Saba, our real estate agent, was a highly positive experience. She effectively guided us through the process of purchasing a new home, showcasing her professional capabilities and expertise. Her assistance was invaluable, making the typically complex task of home buying much smoother and more manageable. We appreciated her diligent work and would highly recommend her services to others.',
    name: 'Zillow reviewer',
    context: 'Bought a home in Delaware, OH · 2023',
    source: 'Zillow',
    rating: 5,
  },
  {
    id: 'fatou',
    quote:
      'Finding the perfect space can be daunting, but with Saba helping me out, the entire process was smooth! From the very first conversation, she impressed me with her in-depth knowledge of the market and genuine interest in finding a property that truly fit my needs and budget! If you’re looking for a realtor who goes the extra mile and truly prioritizes your needs, look no further! I highly recommend Saba to anyone seeking a stress-free and successful real estate experience.',
    name: 'Zillow reviewer',
    context: 'Bought & sold a home · 2023',
    source: 'Zillow',
    rating: 5,
  },
];

export const pickTestimonials = (ids?: string[]) =>
  ids ? (ids.map((id) => testimonials.find((t) => t.id === id)).filter(Boolean) as Testimonial[]) : testimonials;
