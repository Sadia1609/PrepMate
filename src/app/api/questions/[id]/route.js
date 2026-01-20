import { questions } from "@/data/questions";

export async function GET(req, { params }) {
  const { id } = await params;

  const q = questions.find((x) => x.id === id);

  if (!q) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });
  }

  return Response.json(q);
}
