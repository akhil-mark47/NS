// This is a placeholder file since we're not using Supabase in this project
// You can safely remove this file if you don't need Supabase integration

import { createClient } from '@supabase/supabase-js';

// Use dummy values for the Supabase client
const supabaseUrl = 'https://example.supabase.co';
const supabaseKey = 'your-anon-key';

// Create a mock client that doesn't actually connect to Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// If you need to use Supabase in the future, uncomment and configure these lines:
/*
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);
*/