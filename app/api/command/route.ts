import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { command } = await request.json()

  let result
  switch (command.toLowerCase()) {
    case 'help':
      result = 'Available commands: about, skills, projects, contact'
      break
    case 'about':
      result = "I'm a passionate developer with a knack for cybersecurity and innovative solutions."
      break
    case 'skills':
      result = 'JavaScript, React, Node.js, Python, SQL, Network Security, Penetration Testing'
      break
    case 'projects':
      result = '1. Secure E-commerce platform\n2. Encrypted messaging app\n3. Vulnerability scanner'
      break
    case 'contact':
      result = `
[#] GitHub:  github.com/neiljay
[@] Email:   hello@neiljay.com
{D} Discord: neiljay
`
      break
    default:
      result = `Command not found: ${command}. Type "help" for a list of commands.`
  }

  return NextResponse.json({ result })
}