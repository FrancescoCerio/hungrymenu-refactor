const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async function handler(req, res) {
  const { error } = await supabase.from('restaurants').select('id').limit(1);

  if (error) {
    console.error('Keep-alive ping failed:', error.message);
    return res.status(500).json({ ok: false, error: error.message });
  }

  return res.status(200).json({ ok: true, timestamp: new Date().toISOString() });
};
