import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'hhttps://fzcibqvvqmezdzifdigp.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6Y2licXZ2cW1lemR6aWZkaWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MTQ1MDgsImV4cCI6MjA2NDM5MDUwOH0.ocM69dR2piH4uNeoJOfQMNiCWow-oXXByEXS11iyZa0'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 