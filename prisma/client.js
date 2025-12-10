import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/client.js'
import "dotenv/config"

 // eslint-disable-next-line
const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export default prisma