import { defineEventHandler, sendRedirect, getRequestURL } from "h3";

export default defineEventHandler((event) => {
    if (event.method !== "GET") return;

    const url = getRequestURL(event);
    const pathname = url.pathname;

    if (pathname === "/") return;

    if (
        pathname.startsWith("/_nuxt") ||
        pathname.startsWith("/_ipx") ||
        pathname.startsWith("/_assets") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/_debug") ||
        pathname === "/favicon.ico" ||
        pathname.includes(".") // файлы с расширением (robots.txt, sitemap.xml и т.д.)
    ) {
        return;
    }

    return sendRedirect(event, "/", 302);
});
