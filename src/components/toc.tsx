import { component$ } from "@builder.io/qwik";
import { SECTIONS } from "~/lib/toc";

interface TOCProps {
  route: keyof typeof SECTIONS;
}

export const TableOfContents = component$(({ route }: TOCProps) => {
  return (
    <div class="hidden w-64 flex-shrink-0   py-3 lg:flex">
      <nav class="flex h-full w-full flex-col px-4">
        <p class="pt-4 text-lg font-bold">On this page</p>
        <ul>
          {SECTIONS[route].map((section) => (
            <li key={section}>
              <a href={`#${section.toLocaleLowerCase().replace(/ /g, "-")}`}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});
