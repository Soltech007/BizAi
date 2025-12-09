'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestConnectionPage() {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')
  const [result, setResult] = useState<string>('')

  const testConnection = async () => {
    setStatus('testing')
    
    // Check environment variables first
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!url || !key) {
      setStatus('error')
      setResult(`❌ Missing environment variables:\n- SUPABASE_URL: ${url ? '✅' : '❌'}\n- SUPABASE_KEY: ${key ? '✅' : '❌'}`)
      return
    }
    
    try {
      const { data, error } = await supabase.from('blogs').select('count', { count: 'exact' })
      
      if (error) {
        setStatus('error')
        setResult(`Error: ${error.message}`)
      } else {
        setStatus('success')
        setResult(`✅ Connection successful! Found ${data?.length || 0} blogs in database.`)
      }
    } catch (err) {
      setStatus('error')
      setResult(`❌ Connection failed: ${err}`)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Supabase Connection Test</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <button
          onClick={testConnection}
          disabled={status === 'testing'}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
        >
          {status === 'testing' ? 'Testing...' : 'Test Connection'}
        </button>
        
        {result && (
          <div className={`mt-4 p-4 rounded-lg ${
            status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        )}
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Environment Check:</h3>
          <p>URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
          <p>Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
        </div>
      </div>
    </div>
  )
}