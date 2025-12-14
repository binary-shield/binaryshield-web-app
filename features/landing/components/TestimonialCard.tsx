import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";

interface Props {
  text: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ text, name, title }: Props) {
  return (
    <Card className="h-full bg-card border-border/40 p-6 flex flex-col">
      <CardContent className="p-0 flex-1 space-y-4">
        <MessageSquareQuote className="h-10 w-10 text-primary" />
        <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
      </CardContent>
      <CardFooter className="p-0 mt-6 block">
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="h-0.5 w-full bg-border/50 mt-4"></div>
      </CardFooter>
    </Card>
  );
}
