import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">spotifyQ</h3>
          <p className="text-sm text-gray-500">
            Tired of passing your phone around at parties? Invite friends to
            line up songs to your spotify live playing queue
          </p>
        </div>
        <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
          <button className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none">
            <Link href="/api/authorize">
              <p>Login with Spotify</p>
            </Link>
          </button>
        </form>
      </div>
    </main>
  );
}
