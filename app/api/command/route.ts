import { NextRequest, NextResponse } from 'next/server'

// Enable Edge Runtime
// export const runtime = 'edge';

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
      result = `
      1. <a href="https://sjrslms.in/" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Online Library Platform</a>
      2. <a href="https://ecoarecaleaf.com" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Eco Areca Leaf Brand</a>
      3. <a href="https://withjoyfullipslyrics.neiljay.com/" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">With Joyful Lips Lyrics Portal</a>
      4. <a href="https://github.com/neil-jay/" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Certificate Generators</a>
      `
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