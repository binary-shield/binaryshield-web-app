import { Card } from "@/components/ui/card";
import { BookOpen, Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IEbook } from "../types";

interface Props {
  ebook: IEbook;
}

export default function EbookCard({ ebook }: Props) {
  return (
    <Link key={ebook.id} href={`/ebook/${ebook.id}`}>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out h-full border-border bg-card">
        {/* Cover Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            fill
            src={ebook.cover}
            alt={ebook.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {ebook.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {ebook.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {ebook.description}
          </p>

          {/* Author */}
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>by {ebook.author}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm border-t border-border pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{ebook.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="h-4 w-4" />
                <span>{(ebook.downloads / 1000).toFixed(1)}k</span>
              </div>
            </div>
            <div className="text-muted-foreground">{ebook.pages} pages</div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
