import { NextRequest, NextResponse } from 'next/server'

// Enable Edge Runtime
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const { command } = await request.json();

  let result;
  switch (command.toLowerCase()) {
    case 'help':
      result = 'Available commands: about, skills, projects, contact';
      break;
    case 'about':
      result = "I'm a Priest by Vocation, Developer by Passion, Cyber Defender by Obsession.";
      break;
    case 'skills':
      result = 'JavaScript, Python, SQL, Network Security, Penetration Testing';
      break;
    case 'projects':
      result = '1. Online Library Platform\n2. Business Portfolios\n3. With Joyful Lips Lyrics Portal\n4. Certificate Generators';
      break;
    case 'contact':
      result = `
[#] GitHub:  github.com/neiljay
[@] Email:   hello@neiljay.com
{D} Discord: neiljay
`;
      break;
    default:
      result = `Command not found: ${command}. Type "help" for a list of commands.`;
  }

  return NextResponse.json({ result });
}
