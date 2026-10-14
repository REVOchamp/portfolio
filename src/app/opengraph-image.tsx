import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Karol Ziółkowski — Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          border: '1px solid #27272a',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 800,
            marginBottom: 16,
            letterSpacing: '-2px',
          }}
        >
          KAROL ZIÓŁKOWSKI
        </div>
        <div
          style={{
            color: '#a1a1aa',
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          Web Developer & Next.js Freelancer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}