import { questions } from "@/data/questions";

export async function GET() {
  return Response.json(questions);
}
