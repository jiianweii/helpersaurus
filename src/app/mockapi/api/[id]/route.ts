import { getData } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await getData(params.id);
  const selected = data?.[0].json;

  return NextResponse.json(selected);
}
