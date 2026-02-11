import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const { error } = await supabase.from('restaurants').select('id').limit(1);

  if (error) {
    console.error('Keep-alive ping failed:', error.message);
    return res.status(500).json({ ok: false, error: error.message });
  }

  return res.status(200).json({ ok: true, timestamp: new Date().toISOString() });
}
