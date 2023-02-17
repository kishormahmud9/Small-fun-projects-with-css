import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-5">
      <nav className="flex w-full max-w-[1100px] items-center justify-between rounded-full border border-border-hi bg-[#0d1220]/65 px-4 py-3 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)]">
        <Link href="/" className="flex items-center gap-2.5 font-display text-[17px] font-bold">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-grad-1 font-mono text-[13px] text-white shadow-[0_0_24px_-4px_#5b8cff]">
            {"</>"}
          </span>
          CSS Lab
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {[
            ["Projects", "/#projects"],
            ["Categories", "/#categories"],
            ["About", "/#journey"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-text-dim transition-colors hover:bg-border hover:text-text"
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-text px-4 py-2.5 text-[13.5px] font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
