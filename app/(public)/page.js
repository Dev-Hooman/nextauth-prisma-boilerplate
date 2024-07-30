'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to NextAuth Prisma Boilerplate
        </h1>
        <p className="mt-3 text-2xl">
          {session ? `Welcome, ${session.user.email}` : "Please sign in"}
        </p>
        <div className="flex mt-6">
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 font-bold text-white bg-[#facc15] rounded hover:bg-[#facc15]/50"
            >
              Sign out
            </button>
          ) : (
            <div className="flex justify-center items-center gap-4">
                <Link
              href="/login"
              className="px-4 py-2 font-bold text-white bg-[#facc15] rounded hover:bg-[#facc15]/50"
            >
              Sign in
            </Link>
        <Link
              href="/dashboard"
              className="px-4 py-2 font-bold text-white bg-[#facc15] rounded hover:bg-[#facc15]/50"
            >
             Dashboard
            </Link>
              </div>
    
          )}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/Dev-Hooman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Abdul Rehman Sarfaraz {" "}
          <img src="/images/github.svg" alt="Next.js Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
