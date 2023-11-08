export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">
        A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer.
      </h1>
      <p className="text-sm opacity-50">
        Hello, I would be happy to assist you with that. I believe that the best
        way to go about this would be to set the X-Robots-Tag HTTP header to
        noindex. This will cause search engines to not index your site. If you
        would like to read up more on why this is the case check out this 
        <a href="https://vercel.com/docs/deployments/preview-deployments#search-engine-indexing"> article </a> 
        If you have any more questions or if for some reason this doesnt work
        for you, dont hesitate to reach out. I am happy to help anyway I can!
        Svea
      </p>
    </div>
  );
}
