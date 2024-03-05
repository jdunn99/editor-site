import { component$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";

export const Menu = component$(() => {
  const { menu } = useContent();
  const { url } = useLocation();

  return (
    <div class="hidden w-72 flex-shrink-0  py-3 lg:flex">
      <nav class="flex h-full w-full flex-col px-4">
        {menu
          ? menu.items?.map((item) => (
              <>
                <h5 class="pt-4 text-lg font-bold">{item.text}</h5>
                <ul>
                  {item.items?.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        class={{
                          "font-semibold text-sky-500":
                            url.pathname === item.href,
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ))
          : null}
      </nav>
    </div>
  );
});
