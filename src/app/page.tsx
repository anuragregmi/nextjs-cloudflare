import { getAboutUs, getTitle } from "@/lib/kv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const runtime = 'edge';
export const dynamic = "force-dynamic";

export default async function Home() {
  const [title, aboutUs] = await Promise.all([
    getTitle(),
    getAboutUs(),
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle>{title ?? "Welcome to our site!"}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{aboutUs ?? "About us content not found in KV store."}</p>
        </CardContent>
      </Card>
    </main>
  );
}
