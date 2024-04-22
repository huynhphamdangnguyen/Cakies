import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yufglqdaueconkaetoki.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZmdscWRhdWVjb25rYWV0b2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MjQ1MjMsImV4cCI6MjAyOTMwMDUyM30.L6upK461mzO_HC5nRJGJcebcQJNoHj52ctGY2mZRLH8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)