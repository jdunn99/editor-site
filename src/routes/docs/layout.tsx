import { Slot, component$ } from "@builder.io/qwik";
import {
  useLocation,
  useContent,
  useDocumentHead,
} from "@builder.io/qwik-city";
import { Menu } from "~/components/menu";
import { TableOfContents } from "~/components/toc";
export default component$(() => {
  const { menu } = useContent();
  const { url } = useLocation();

  const { frontmatter } = useDocumentHead();

  return (
    <div class=" h-screen">
      <div class="mx-auto flex h-full max-w-screen-2xl">
        <Menu />
        <div class="prose relative mx-auto w-full max-w-screen-lg overflow-auto scroll-smooth">
          <div class="relative min-h-screen break-words px-5 pb-16 pt-7">
            <Slot />
          </div>
        </div>
        <TableOfContents route={frontmatter.slug} />
      </div>
    </div>
  );
});
