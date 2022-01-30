import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div>
        <Head>
          <title>Supabase and NextJs Demo</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-4x1 font-bold mt-20'>
            <a className='text-blue-600' href = '/'>
              Full Stack Application With Tailwind CSS and Supabase in NextJs
            </a>
          </h1>
        </main>
      </div>
    </div>

  )
}
