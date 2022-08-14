const quotes = [
  {
    quote: "Don't sit down and wait for the opportunities to come. Get up and make them",
    author: "Madam C.J. Walker"
  },
  {
    quote: "If you don't build your dream, someone else will hire you to help them build theirs",
    author: "Dhirubhai Ambani"
  },
  {
    quote: "What would you do if you weren't afraid",
    author: "Sheryl Sandberg"
  },
  {
    quote: "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out",
    author: "Steve Jobs, CEO and co-founder of Apple Inc"
  },
  {
    quote: "Do what you love and success will follow. Passion is the fuel behind a successful career",
    author: "Meg Whitman, CEO of Quibi"
  },
  {
    quote: "Don’t worry about failure. You only have to be right once.",
    author: "Drew Houston, co-founder and CEO of Dropbox"
  },
  {
    quote: "I got lucky because I never gave up the search. Are you quitting too soon? Or are you willing to pursue luck with a vengeance too",
    author: "Jill Konrath, sales strategist"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney, co-founder of The Walt Disney Company"
  },
  {
    quote: "Train people well enough so they can leave, treat them well enough so they don’t want to.",
    author: "Richard Branson, founder of Virgin Group"
  },
  {
    quote: "Quality means doing it right when no one is looking.",
    author: "Henry Ford, founder of the Ford Motor Company"
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;