// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('✅ Ejecutando seed...');
//   // Roles base
//   const adminRole = await prisma.role.upsert({
//     where: { role_name: 'ADMIN' },
//     update: {},
//     create: {
//       role_name: 'ADMIN',
//       role_permissions: 'ALL',
//     },
//   });

//   await prisma.role.upsert({
//     where: { role_name: 'USER' },
//     update: {},
//     create: {
//       role_name: 'USER',
//       role_permissions: 'READ_ONLY',
//     },
//   });

//   // Credenciales base
//   const adminCred = await prisma.credential.create({
//     data: {
//       password_hash: 'hashed_password_admin', // usa bcrypt en prod
//     },
//   });

//   // Usuario administrador
//   const adminUser = await prisma.users.upsert({
//     where: { user_email: 'admin@example.com' },
//     update: {
//       user_name: 'Daniel',
//       user_last_name: 'Barquero',
//       user_national_id: '123456789',
//       user_birth_date: new Date('1990-01-01'),
//       id_role: adminRole.id_role,
//       id_credential: adminCred.id_credential,
//     },
//     create: {
//       user_email: 'admin@example.com',
//       user_name: 'Daniel',
//       user_last_name: 'Barquero',
//       user_national_id: '123456789',
//       user_birth_date: new Date('1990-01-01'),
//       role: { connect: { id_role: adminRole.id_role } },
//       credential: { connect: { id_credential: adminCred.id_credential } },
//     },
//   });

//   console.log('✅ Seed ejecutado con éxito');
// }

// main()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
