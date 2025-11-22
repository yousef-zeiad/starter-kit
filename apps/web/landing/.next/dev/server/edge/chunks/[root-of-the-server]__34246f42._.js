(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__34246f42._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/web/landing/src/i18n/locales/ar.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"nav":{"brand":"example","exapmle":"example","example":"example"}});}),
"[project]/apps/web/landing/src/i18n/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"nav":{"brand":"example","exapmle":"example","example":"example"}});}),
"[project]/apps/web/landing/src/i18n/request.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.0_babel-plugin-react-compiler@1.0.0_react-dom@19.1.0_react@19_267b99850fbff67002b005c53653277c/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/landing/src/i18n/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    let locale = await requestLocale;
    if (!locale || !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "./locales/ar.json": {
                id: ()=>"[project]/apps/web/landing/src/i18n/locales/ar.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/apps/web/landing/src/i18n/locales/ar.json (json)"))
            },
            "./locales/en.json": {
                id: ()=>"[project]/apps/web/landing/src/i18n/locales/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/apps/web/landing/src/i18n/locales/en.json (json)"))
            }
        }).import(`./locales/${locale}.json`)).default
    };
});
}),
"[project]/apps/web/landing/src/i18n/routing.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "redirect",
    ()=>redirect,
    "routing",
    ()=>routing,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.0_babel-plugin-react-compiler@1.0.0_react-dom@19.1.0_react@19_267b99850fbff67002b005c53653277c/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.0_babel-plugin-react-compiler@1.0.0_react-dom@19.1.0_react@19_267b99850fbff67002b005c53653277c/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [middleware-edge] (ecmascript) <export default as createNavigation>");
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        'en',
        'tr'
    ],
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});
const { Link, redirect, usePathname, useRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(routing);
}),
"[project]/apps/web/landing/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.0_babel-plugin-react-compiler@1.0.0_react-dom@19.1.0_react@19_267b99850fbff67002b005c53653277c/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/landing/src/i18n/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19_267b99850fbff67002b005c53653277c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
const config = {
    // Match only internationalized pathnames
    matcher: [
        "/",
        "/(ar|en)/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__34246f42._.js.map