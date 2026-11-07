import { agent, promises } from '../config/site';

export const homeFaqs = [
  {
    q: 'How much is my home worth?',
    a: `It depends on recent nearby sales, current competition, your home’s condition and updates, and today’s buyer demand. Online estimates can be off by tens of thousands of dollars. Request a free market analysis and ${agent.firstName} will send a personalized price range ${promises.valuationTurnaround}.`,
  },
  {
    q: 'Should I sell first or buy first?',
    a: 'It depends on your equity, financing and how much flexibility you need. Options include selling first with a rent-back, buying with a contingency, or bridge financing. We’ll map out the trade-offs for your situation before you commit.',
  },
  {
    q: 'Do I have to sign an agreement to tour homes?',
    a: 'Yes. Since August 2024, buyers working with an agent sign a written agreement before touring homes. It spells out the services and how the agent is paid. Saba will walk you through it line by line and answer every question first.',
  },
  {
    q: 'How long does it take to sell a home in Westerville?',
    a: 'Timing depends on price point, condition, location and season. Well-prepared, well-priced homes generally sell fastest. Your market analysis includes current days-on-market data for your neighborhood.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'Saba serves buyers and sellers across Central Ohio — especially Westerville, Powell, Dublin, Hilliard, Delaware, Sunbury and Gahanna — as well as Lewis Center, Genoa Township, Galena, New Albany, Worthington and the greater Columbus area.',
  },
];

export const sellerFaqs = [
  homeFaqs[0],
  {
    q: 'What should I fix before listing?',
    a: 'Usually less than you think. Focus on repairs an inspector would flag, fresh neutral paint where needed, deep cleaning and curb appeal. Saba will walk through your home and prioritize what actually pays off — and what to skip.',
  },
  homeFaqs[1],
  {
    q: 'What does it cost to sell?',
    a: 'Typical costs include brokerage commission (always negotiable), title and closing fees, any agreed buyer concessions, and payoff of your mortgage. Your consultation includes an estimated net-proceeds sheet so there are no surprises.',
  },
  homeFaqs[3],
];

export const buyerFaqs = [
  homeFaqs[2],
  {
    q: 'How much do I need for a down payment?',
    a: 'Less than many people think — some loan programs allow as little as 0–3.5% down for qualified buyers. A local lender can show you options; Saba can recommend several to compare.',
  },
  {
    q: 'Do I need to be pre-approved before looking?',
    a: 'It’s strongly recommended. Pre-approval tells you your budget, and sellers expect it with any offer. You can still set up listing alerts and talk strategy before you’re pre-approved.',
  },
  {
    q: 'How do I know which school district a home is in?',
    a: 'District boundaries don’t always follow city lines in Central Ohio. Always verify by exact address with the district or the county auditor — Saba will help you confirm before you make an offer.',
  },
];
