import { getData } from "@/app/_lib/data-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const data = await getData(id);
  const selected = data?.[0]?.json;

  return NextResponse.json(selected);
}
