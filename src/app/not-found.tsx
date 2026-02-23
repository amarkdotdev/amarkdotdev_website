import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-zinc-100">Page not found</h1>
      <p className="mt-4 max-w-md text-zinc-400">
        How about the homepage or the contact section?
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full bg-cyan-300/95 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
        >
          Homepage
        </Link>
        <Link
          href="/#contact"
          className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
