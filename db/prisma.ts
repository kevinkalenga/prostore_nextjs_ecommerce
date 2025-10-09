
// import { Pool, neonConfig } from '@neondatabase/serverless';
// import { PrismaNeon } from '@prisma/adapter-neon';
// import { PrismaClient } from '../lib/generated/prisma';

// // import { PrismaClient } from '@prisma/client';
// import ws from 'ws';

// // Configure WebSocket pour Neon
// neonConfig.webSocketConstructor = ws;

// // Crée un pool de connexions Neon
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// // Lie le pool à Prisma via l’adaptateur Neon
// const adapter = new PrismaNeon(pool);

// // Gestion globale : évite les multiples instances Prisma pendant le dev
// const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// // Instance Prisma unique
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({ adapter }).$extends({
//     result: {
//       product: {
//         price: { compute: (p) => p.price.toString() },
//         rating: { compute: (p) => p.rating.toString() },
//       },
//       cart: {
//         itemsPrice: { compute: (c) => c.itemsPrice.toString() },
//         shippingPrice: { compute: (c) => c.shippingPrice.toString() },
//         taxPrice: { compute: (c) => c.taxPrice.toString() },
//         totalPrice: { compute: (c) => c.totalPrice.toString() },
//       },
//       order: {
//         itemsPrice: { compute: (o) => o.itemsPrice.toString() },
//         shippingPrice: { compute: (o) => o.shippingPrice.toString() },
//         taxPrice: { compute: (o) => o.taxPrice.toString() },
//         totalPrice: { compute: (o) => o.totalPrice.toString() },
//       },
//       orderItem: {
//         price: { compute: (oi) => oi.price.toString() },
//       },
//     },
//   });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

import { PrismaClient } from '../lib/generated/prisma';

// 🧪 Vérifie que l’URL est bien chargée
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is missing from environment variables');
  throw new Error('DATABASE_URL is not defined');
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// ✅ Création d’une instance unique de PrismaClient sans paramètre
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
