import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 64, fontWeight: 800, marginBottom: 16 }}>
          KAROL ZIÓŁKOWSKI
        </div>
        <div style={{ color: '#a1a1aa', fontSize: 24, letterSpacing: '4px', textTransform: 'uppercase' }}>
          Web Developer & Next.js Freelancer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}