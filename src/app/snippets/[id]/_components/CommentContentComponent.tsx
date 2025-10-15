import CodeBlockComponent from "./CodeBlockComponent";

export default function CommentContentComponent({
  content,
}: {
  content: string;
}) {
  // integrate auto detect language later
  const commentParts = content.split(/(```[\w-]*\n[\s\S]*?\n```)/g);

  return (
    <div className="max-w-none text-white">
      {commentParts.map((part, i) => {
        if (part.startsWith("```")) {
          const match = part.match(/```([\w-]*)\n([\s\S]*?)\n```/);

          if (match) {
            const [, language, code] = match;
            return (
              <CodeBlockComponent language={language} code={code} key={i} />
            );
          }
        }

        return part.split("\n").map((line, lineIdx) => (
          <p key={lineIdx} className="mb-4 text-gray-300 last:mb-0">
            {line}
          </p>
        ));
      })}
    </div>
  );
}
