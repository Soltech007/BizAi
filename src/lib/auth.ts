import { NextRequest } from 'next/server'
import { supabase } from './supabase'

export async function verifyAuth(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { authenticated: false, error: 'No token provided' }
    }

    const token = authHeader.substring(7)
    
    const { data: { user }, error } = await supabase.auth.getUser(token)
    
    if (error || !user) {
      return { authenticated: false, error: 'Invalid token' }
    }

    return { authenticated: true, user }
  } catch (error) {
    return { authenticated: false, error: 'Auth verification failed' }
  }
}