export default async function Page() {
  // Fetch data directly in a Server Component
  // Forward fetched data to your Client Component
  return <div>This is a static page. It should be cached in the edge. But it is not.</div>;
}

export const dynamic = 'error';
export const runtime = 'experimental-edge';
