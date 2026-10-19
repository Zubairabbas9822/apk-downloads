export default async function handler() {
  const upstream = await fetch(
    "https://github.com/Zubairabbas9822/apk-downloads/releases/download/v1.0/SBox-v1.2.0.apk"
  );
  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream fetch failed", { status: 502 });
  }
  return new Response(upstream.body, {
    status: 200,
    headers: {
      "content-type": "application/vnd.android.package-archive",
      "content-disposition": 'attachment; filename="SBox-v1.2.0.apk"',
      "cache-control": "public, max-age=3600",
    },
  });
}

export const config = { path: "/SBox-v1.2.0.apk" };
