const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The price of excellence is discipline and the price of medioricity is dissappointment, you have a bigger purpose.",
    "Truly letting go of being liked, desired, accepted or approved of may be the greatest revolution of them all.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "A healthy mind does not speak ill of others.",
    "Give up on your dreams and die."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
