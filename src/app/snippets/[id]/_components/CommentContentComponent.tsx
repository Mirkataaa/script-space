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
            const [language, code] = match;
            // replace with code block comp
            return <div key={i}>{language} {code}</div>;
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
