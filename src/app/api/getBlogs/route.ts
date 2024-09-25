export const revalidate = 60;

export async function GET() {
  const res = await fetch(
    "https://atlas-cms.atlascorp.io/api/blogs?populate=*&sort[0]=createdAt:desc"
  );

  const { data } = await res.json();

  return Response.json([data[0], data[1]]);
}
