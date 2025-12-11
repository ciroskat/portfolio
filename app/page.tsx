import Image from "next/image";
import NextLogo from "../public/next.svg";
import VercelLogo from "../public/vercel.svg";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', color: 'var(--foreground)' }}>
      <main style={{ maxWidth: '768px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8rem 4rem', background: 'var(--background)' }}>
        <Image
          src={NextLogo}
          alt="Next.js logo"
          width={100}
          height={20}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>
            Hi this is Ciro's Portfolio.
          </h1>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Looking for a starting point or more instructions? Head over to{" "}
            <a href="https://vercel.com/templates?framework=next.js" style={{ fontWeight: 500 }}>
              Templates
            </a>{" "}
            or the{" "}
            <a href="https://nextjs.org/learn" style={{ fontWeight: 500 }}>
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: '2rem' }}>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1.25rem', background: 'var(--foreground)', color: 'var(--background)', borderRadius: '9999px', gap: '0.5rem', textDecoration: 'none' }}
          >
            <Image src={VercelLogo} alt="Vercel logomark" width={16} height={16} />
            Deploy Now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1.25rem', border: '1px solid #171717', borderRadius: '9999px', gap: '0.5rem', textDecoration: 'none', color: 'var(--foreground)' }}
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
