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

const targetFile = isProduction
  ? 'src/environments/environment.prod.ts'
  : 'src/environments/environment.ts';

fs.writeFileSync(targetFile, content);
console.log(`${targetFile} generated from env variables (${process.env.VERCEL_ENV})`);
