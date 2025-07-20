import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    // Forward the message to the Python backend
    const backendRes = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await backendRes.json();
    return NextResponse.json({ reply: data.reply });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { reply: 'Ghost is unavailable. Please try again later.' },
      { status: 500 }
    );
  }
}
