let btn = document.querySelector('#new-quote');
let box = document.querySelector('.quote');
let writer = document.querySelector('.writer');

// Quotes collection
const quotesArray = [
      {
        quote: `"The best way to predict the future is to create it."`,
        writer: "Abraham Lincoln"
      },
      {
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        writer: "Albert Einstein"
      },
      {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        writer: "Nelson Mandela"
      },
      {
        quote: `"Believe you can and you're halfway there."`,
        writer: "Theodore Roosevelt"
      },
      {
        quote: `"The only way to do great work is to love what you do."`,
        writer: "Steve Jobs"
      },
      {
        quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
        writer: "Thomas Edison"
      },
      {
        quote: `"Be the change that you wish to see in the world."`,
        writer: "Mahatma Gandhi"
      },
      {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        writer: "Winston Churchill"
      },
      {
        quote: `"It does not matter how slowly you go as long as you do not stop."`,
        writer: "Confucius"
      },
      {
        quote: `"The only true wisdom is in knowing you know nothing."`,
        writer: "Socrates"
      },
      {
        quote: `"Our greatest glory is not in never falling, but in rising every time we fall."`,
        writer: "Confucius"
      },
      {
        quote: `"The way to get started is to quit talking and begin doing."`,
        writer: "Walt Disney"
      },
      {
        quote: `"You miss 100% of the shots you don't take."`,
        writer: "Wayne Gretzky"
      },
      {
        quote: `"Don't watch the clock; do what it does. Keep going."`,
        writer: "Sam Levenson"
      },
      {
        quote: `"If you can dream it, you can achieve it."`,
        writer: "Zig Ziglar"
      },
      {
        quote: `"A goal without a plan is just a wish."`,
        writer: "Antoine de Saint-Exupéry"
      },
      {
        quote: `"You must be the change you wish to see in the world."`,
        writer: "Mahatma Gandhi"
      },
      {
        quote: `"The two most important days in your life are the day you are born and the day you find out why."`,
        writer: "Mark Twain"
      },
      {
        quote: `"Don't let yesterday take up too much of today."`,
        writer: "Will Rogers"
      },
      {
        quote: `"Happiness is not something ready made. It comes from your own actions."`,
        writer: "Dalai Lama"
      },
    ];

btn.addEventListener('click', ()=> {
    const random = Math.floor(Math.random() * quotesArray.length);
    box.innerText = quotesArray[random].quote;
    writer.innerText = quotesArray[random].writer;
})