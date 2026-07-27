const METHODS_WITH_BODY = new Set(["POST", "PUT", "PATCH", "DELETE"]);

async function proxy(request: Request, context: { params: Promise<{ path: string[] }> }) {
  const configured = process.env.NBY_API_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!configured) {
    return Response.json(
      { message: "L’adresse du serveur NBY n’est pas configurée. Ajoutez NBY_API_URL dans Coolify." },
      { status: 503 },
    );
  }
  const { path } = await context.params;
  const sourceUrl = new URL(request.url);
  const target = `${configured.replace(/\/+$/, "")}/${path.map(segment => encodeURIComponent(segment)).join("/")}${sourceUrl.search}`;
  try {
    const response = await fetch(target, {
      method: request.method,
      headers: { "Content-Type": request.headers.get("content-type") || "application/json" },
      body: METHODS_WITH_BODY.has(request.method) ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    return new Response(response.body, {
      status: response.status,
      headers: { "Content-Type": response.headers.get("content-type") || "application/json" },
    });
  } catch {
    return Response.json(
      { message: "Le site ne parvient pas à joindre le serveur NBY. Vérifiez NBY_API_URL et l’état du backend." },
      { status: 502 },
    );
  }
}

export const dynamic = "force-dynamic";
export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
