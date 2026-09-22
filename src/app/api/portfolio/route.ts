import { NextResponse } from "next/server";
import { queryApiProjects } from "@/lib/portfolio-api";

export const dynamic = "force-static";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Content-Type": "application/json; charset=utf-8",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET() {
  // Return complete portfolio catalogue with work-wise images and metadata
  const response = queryApiProjects({ limit: 0 });
  return NextResponse.json(response, {
    headers: corsHeaders,
  });
}
