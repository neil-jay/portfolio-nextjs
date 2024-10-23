'use client'

import { useState, useEffect, useCallback } from 'react'
// import { Terminal } from 'lucide-react'
import Image from 'next/image'

export default function TerminalPortfolio() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>(['Welcome to my portfolio! Type "help" for a list of commands.'])

  const handleCommand = useCallback(async (cmd: string) => {
    const response = await fetch('/api/command', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command: cmd }),
    })
    const data = await response.json()
    return data.result
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await handleCommand(input)
    setOutput(prev => [...prev, `$ ${input}`, result])
    setInput('')
  }

  useEffect(() => {
    const terminal = document.getElementById('terminal')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [output])

  return (
    <div className="min-h-screen flex flex-col bg-black text-green-400 p-4 font-mono">
      <div className="flex-grow flex flex-col items-center justify-start max-w-2xl mx-auto w-full">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-green-400">
          <Image
            src="/neiljay.png"
            alt="neiljay's profile picture"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl mb-6 text-green-400">Neil Jay&#39;s Terminal</h1>
        <div className="w-full bg-gray-900 rounded-lg shadow-lg p-4 mb-6 flex-grow border border-green-400">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div id="terminal" className="text-sm h-80 overflow-y-auto mb-4 whitespace-pre-wrap">
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-transparent focus:outline-none text-green-400"
              aria-label="Terminal input"
            />
          </form>
        </div>
      </div>
      <footer className="text-center text-sm mt-4 text-green-400">
        © 2024 neiljay. All rights reserved.
      </footer>
    </div>
  )
}