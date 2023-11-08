export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">
      When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
      </h1>
      <p className="text-sm opacity-50">
        If I was working with a news company like UBA (yes this is a s/o to my favorite Apple TV show) I would use <a href="https://vercel.com/docs/functions/streaming">edge functions</a> so that when breaking news happens it is shown at the top of the website for users to see.
        If I was working with a company like Macys who has a lot of traffic to their website for Black Friday I would use <a href="https://vercel.com/docs/serverless-functions/introduction">serverless functions</a> so that customer orders could be easily processed since you wouldnt have a continuously running server. If something broke on black friday people could still get their discounts.
        If I was working with a company like Udemy I would use <a href="https://vercel.com/docs/functions/edge-middleware">edge middleware</a> so that I could easily route users to the correct courses based on their authentication type.

      </p>
    </div>
  )
}