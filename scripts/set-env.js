const fs = require('fs');

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const isProduction = process.env.VERCEL_ENV === 'production';

const content = `export const environment = {
  production: ${isProduction},
  supabaseUrl: '${supabaseUrl}',
  supabaseKey: '${supabaseKey}',
};
`;

fs.writeFileSync('src/environments/environment.prod.ts', content);
console.log(`environment.prod.ts generated from env variables (VERCEL_ENV=${process.env.VERCEL_ENV})`);
