import { getContact } from "@/lib/kv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Contact() {
  const contact = await getContact();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{contact ?? "Contact information not found in KV store."}</p>
        </CardContent>
      </Card>
    </main>
  );
} 