import Link from 'next/link';


export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="text-7xl font-bold mb-4 font-sans max-w-[65%] mx-auto">
        Welcome to My Personal Blog and Note 🥳
      </h1>
      <p className="mt-2 text-lg font-sans">
        Contains my blog, tutorial, cheatsheet, and note
      </p>
      <Link href="/content" className="mt-4 px-4 py-2 bg-fuchsia-400 font-bold font-sans text-white mx-auto rounded-xl hover:bg-fuchsia-600">
        Get Started
      </Link>
    </main>
  );
}
