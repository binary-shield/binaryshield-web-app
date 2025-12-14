"use client"

interface ContentRendererProps {
  content: string;
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0) {
        const ListTag = listType === 'ol' ? 'ol' : 'ul';
        elements.push(
          <ListTag 
            key={`list-${elements.length}`} 
            className={`space-y-3 my-6 ${listType === 'ol' ? 'list-decimal' : 'list-disc'} ml-6 text-muted-foreground`}
          >
            {currentList.map((item, i) => (
              <li key={i} className="leading-relaxed pl-2">
                {processInlineFormatting(item)}
              </li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    const processInlineFormatting = (text: string) => {
      const parts: (string | JSX.Element)[] = [];
      let remaining = text;
      let key = 0;

      while (remaining.length > 0) {
        // Bold text **text**
        const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
        if (boldMatch && boldMatch.index !== undefined) {
          if (boldMatch.index > 0) {
            parts.push(remaining.substring(0, boldMatch.index));
          }
          parts.push(
            <strong key={`bold-${key++}`} className="font-bold text-foreground">
              {boldMatch[1]}
            </strong>
          );
          remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
          continue;
        }

        // Inline code `code`
        const codeMatch = remaining.match(/`(.*?)`/);
        if (codeMatch && codeMatch.index !== undefined) {
          if (codeMatch.index > 0) {
            parts.push(remaining.substring(0, codeMatch.index));
          }
          parts.push(
            <code key={`code-${key++}`} className="px-2 py-0.5 bg-muted rounded text-sm font-mono text-primary">
              {codeMatch[1]}
            </code>
          );
          remaining = remaining.substring(codeMatch.index + codeMatch[0].length);
          continue;
        }

        parts.push(remaining);
        break;
      }

      return <>{parts}</>;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Empty line
      if (!trimmed) {
        flushList();
        if (elements.length > 0) {
          elements.push(<div key={`space-${index}`} className="h-3" />);
        }
        return;
      }

      // H1
      if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-4xl md:text-5xl font-bold mt-10 mb-6 text-foreground">
            {trimmed.substring(2)}
          </h1>
        );
        return;
      }

      // H2
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-3xl md:text-4xl font-bold mt-8 mb-5 text-foreground">
            {trimmed.substring(3)}
          </h2>
        );
        return;
      }

      // H3
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-2xl md:text-3xl font-bold mt-7 mb-4 text-foreground">
            {trimmed.substring(4)}
          </h3>
        );
        return;
      }

      // H4
      if (trimmed.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} className="text-xl md:text-2xl font-bold mt-6 mb-3 text-foreground">
            {trimmed.substring(5)}
          </h4>
        );
        return;
      }

      // H5
      if (trimmed.startsWith('##### ')) {
        flushList();
        elements.push(
          <h5 key={index} className="text-lg md:text-xl font-bold mt-5 mb-2 text-foreground">
            {trimmed.substring(6)}
          </h5>
        );
        return;
      }

      // Bullet list (- or *)
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmed.substring(2));
        return;
      }

      // Numbered list
      const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (numberedMatch) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(numberedMatch[1]);
        return;
      }

      // Blockquote
      if (trimmed.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-6 italic text-muted-foreground bg-muted/30">
            {processInlineFormatting(trimmed.substring(2))}
          </blockquote>
        );
        return;
      }

      // Horizontal rule
      if (trimmed === '---' || trimmed === '***') {
        flushList();
        elements.push(
          <hr key={index} className="my-8 border-border" />
        );
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={index} className="text-muted-foreground leading-relaxed my-4 text-base md:text-lg">
          {processInlineFormatting(trimmed)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return <div className="content-renderer">{renderContent()}</div>;
}
