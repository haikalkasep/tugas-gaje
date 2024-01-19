
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://vpuaipgtgagtfwuvyomk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdWFpcGd0Z2FndGZ3dXZ5b21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2Njg4MDEsImV4cCI6MjAyMTI0NDgwMX0.u9fc85-PvKxLqZ8B-2URHj_Ycr2E0lJApyKYL7SHi2A')