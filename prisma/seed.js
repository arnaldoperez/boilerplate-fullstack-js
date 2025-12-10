import prisma from "./client.js";

async function seedPosts() {
  const user=await prisma.user.create({data:{email:"arnaldo@test.com","name":"arnaldo"}})
  const posts=[
  {
    title: "Exploring the Alps",
    content: "A detailed guide on the best hiking trails in the Swiss Alps.",
  },
  {
    title: "The Art of Baking",
    content: "Learn how to bake the perfect sourdough bread from scratch.",
  },
  {
    title: "Introduction to Quantum Computing",
    content: "A beginner-friendly post explaining the basics of quantum computers.",
  },
  {
    title: "Urban Gardening",
    content: "Tips and tricks for growing your own vegetables in a small city apartment.",
  },
  {
    title: "A Journey Through Ancient Rome",
    content: "Discover the history and architecture of the Roman Empire.",
  },
  {
    title: "The Future of Artificial Intelligence",
    content: "An in-depth look at the current state and future possibilities of AI.",
  },
  {
    title: "Mastering a New Language",
    content: "Effective strategies for learning a new language quickly.",
  },
  {
    title: "DIY Home Decor",
    content: "Creative and budget-friendly ideas to decorate your home.",
  },
  {
    title: "The Science of Sleep",
    content: "Understand the importance of sleep and how to improve its quality.",
  },
  {
    title: "Financial Planning for Millennials",
    content: "A guide to managing your finances and investing for the future.",
  }
  ].map(post=>({...post, authorId:user.id}))
  await prisma.post.createMany({data:posts})
}

Promise.all([seedPosts()])
.then(()=>console.log("Seeding completado"))
.catch(error=>console.error({error}))
.finally(async()=>await prisma.$disconnect())
