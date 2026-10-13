// Illustrated portrait of "Mother Ruth", the example creator shown in the hero.
// Original artwork (not a photo of a real person); swap the <svg> for an <img> to use a real photo.
export default function RuthAvatar({ size = 58 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--sand)', flex: 'none', background: '#E8CDA8' }}>
      <svg width="100%" height="100%" style={{ display: 'block' }} viewBox="0 0 100 100" role="img" aria-label="Illustrated portrait of Mother Ruth">
<defs><linearGradient id="rbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F1E4D3"/><stop offset="1" stopColor="#E0B987"/></linearGradient></defs>
<rect width="100" height="100" fill="url(#rbg)"/>
<path d="M6 100C9 78 28 70 50 70s41 8 44 30z" fill="#6B4226"/>
<path d="M36 71.5L50 90l14-18.5C58 68 42 68 36 71.5z" fill="#FBF6EF"/>
<path d="M43 58h14v13c-4 4-10 4-14 0z" fill="#7A4A2E"/>
<ellipse cx="33.5" cy="50" rx="3" ry="4.2" fill="#8B5636"/><ellipse cx="66.5" cy="50" rx="3" ry="4.2" fill="#8B5636"/>
<ellipse cx="50" cy="46" rx="16.5" ry="19.5" fill="#94603C"/>
<path d="M30.5 45C27 26 41 12 52 12c15 0 22 14 18 33-4-9-10-14-20-14s-16 5-19.5 14z" fill="#C8923F"/>
<path d="M33 38c6-9 16-12 26-9M37 31c5-5 12-7 19-6M31.5 43c1-3 2.5-6 4.5-8" fill="none" stroke="#A9724A" strokeWidth="1.6" strokeLinecap="round"/>
<path d="M64 20c9 0 14 6 11 14-3 5-9 6-13 3 6-1 8-6 5-9-2-2-5-3-3-8z" fill="#B27E2E"/>
<path d="M40.5 46.5q3.2 2.4 6.4 0M53.1 46.5q3.2 2.4 6.4 0" fill="none" stroke="#2E1B10" strokeWidth="1.8" strokeLinecap="round"/>
<path d="M39.5 42.6q4-2 7.5-.6M53 42q3.5-1.4 7.5.6" fill="none" stroke="#3A2214" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M50 48.5c-.8 3-1.4 4.4-2.4 5.4.8.7 3.6.7 4.8 0-1-1-1.6-2.4-2.4-5.4z" fill="#82502F" opacity=".7"/>
<path d="M43.8 57c4 3.4 8.4 3.4 12.4 0" fill="none" stroke="#3A1F14" strokeWidth="1.7" strokeLinecap="round"/>
<ellipse cx="40" cy="53.5" rx="3.4" ry="2.1" fill="#D17A5C" opacity=".28"/><ellipse cx="60" cy="53.5" rx="3.4" ry="2.1" fill="#D17A5C" opacity=".28"/>
<circle cx="33.3" cy="55.6" r="2.1" fill="#F3D9A4"/><circle cx="66.7" cy="55.6" r="2.1" fill="#F3D9A4"/>
</svg>
    </div>
  )
}
