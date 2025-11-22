module.exports = [
  "[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-route-turbo.runtime.dev.js",
      () =>
        require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/@opentelemetry/api",
      () => require("next/dist/compiled/@opentelemetry/api"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/shared/lib/no-fallback-error.external.js",
      () => require("next/dist/shared/lib/no-fallback-error.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );

    module.exports = mod;
  },
  "[externals]/stream [external] (stream, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("stream", () => require("stream"));

    module.exports = mod;
  },
  "[externals]/http [external] (http, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("http", () => require("http"));

    module.exports = mod;
  },
  "[externals]/url [external] (url, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("url", () => require("url"));

    module.exports = mod;
  },
  "[externals]/punycode [external] (punycode, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("punycode", () => require("punycode"));

    module.exports = mod;
  },
  "[externals]/https [external] (https, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("https", () => require("https"));

    module.exports = mod;
  },
  "[externals]/zlib [external] (zlib, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("zlib", () => require("zlib"));

    module.exports = mod;
  },
  "[project]/packages/db/src/client.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "createBrowserClient",
      () => createBrowserClient,
      "createMobileClient",
      () => createMobileClient,
      "supabaseAdmin",
      () => supabaseAdmin,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$76$2e$1_bufferutil$40$4$2e$0$2e$9$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/@supabase+supabase-js@2.76.1_bufferutil@4.0.9/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>",
      );
    /**
     * Get environment variables with proper validation
     */ function getEnvVar(key) {
      const value = process.env[key];
      if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
      }
      return value;
    }
    const supabaseAdmin = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$76$2e$1_bufferutil$40$4$2e$0$2e$9$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      "createClient"
    ])(
      getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
      getEnvVar("SUPABASE_SERVICE_ROLE_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
    function createBrowserClient() {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$76$2e$1_bufferutil$40$4$2e$0$2e$9$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        "createClient"
      ])(
        getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
        getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
          },
        },
      );
    }
    function createMobileClient() {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$76$2e$1_bufferutil$40$4$2e$0$2e$9$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        "createClient"
      ])(
        getEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
        getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
          },
        },
      );
    }
  },
  "[project]/apps/web/landing/src/env.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["env", () => env]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$13$2e$8_typescript$40$5$2e$9$2e$3_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.13.8_typescript@5.9.3_zod@4.1.12/node_modules/@t3-oss/env-nextjs/dist/index.js [app-route] (ecmascript)",
      );
    // import { vercel } from "@t3-oss/env-nextjs/presets-zod";
    // import { authEnv } from "@trading-platform/auth/env";
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/index.js [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/index.js [app-route] (ecmascript)",
      );
    const env = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$13$2e$8_typescript$40$5$2e$9$2e$3_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
      "createEnv"
    ])({
      // extends: [authEnv(), vercel()],
      shared: {
        NODE_ENV:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .enum(["development", "production", "test"])
            .default("development"),
      },
      server: {
        RESEND_API_KEY:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .string()
            .min(1)
            .optional(),
      },
      /**
       * Specify your server-side environment variables schema here.
       * This way you can ensure the app isn't built with invalid env vars.
       */ // server: {
      //   POSTGRES_URL: z.url(),
      // },
      /**
       * Specify your client-side environment variables schema here.
       * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
       */ client: {},
      /**
       * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
       */ experimental__runtimeEnv: {
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
      },
      skipValidation:
        !!process.env.CI || process.env.npm_lifecycle_event === "lint",
    });
  },
  "[project]/apps/web/landing/src/app/api/waitlist/route.ts [app-route] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["GET", () => GET, "POST", () => POST]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/next@16.0.0_babel-plugin-react-compiler@1.0.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/index.js [app-route] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/index.js [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/packages/db/src/client.ts [app-route] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/apps/web/landing/src/env.ts [app-route] (ecmascript)",
      );
    const supabaseAdminClient =
      __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$db$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "supabaseAdmin"
      ];
    const optionalStringField =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "z"
      ]
        .union([
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ].string(),
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ].null(),
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ].undefined(),
        ])
        .transform((value) => {
          if (value == null) return null;
          const trimmed = value.trim();
          return trimmed.length > 0 ? trimmed : null;
        });
    const waitlistSchema =
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
        "z"
      ].object({
        email:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .string()
            .trim()
            .email(),
        full_name:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .string()
            .trim()
            .min(1, "Full name is required"),
        phone: optionalStringField,
        restaurant_name:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .string()
            .trim()
            .min(1, "Restaurant name is required"),
        number_of_locations:
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "z"
          ]
            .number()
            .int()
            .positive("Number of locations must be positive"),
        biggest_challenge: optionalStringField,
      });
    async function POST(request) {
      try {
        const body = await request.json();
        const result = waitlistSchema.safeParse(body);
        if (!result.success) {
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "NextResponse"
          ].json(
            {
              success: false,
              error: "Invalid request payload",
              details:
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
                  "env"
                ].NODE_ENV === "production"
                  ? undefined
                  : result.error.flatten().fieldErrors,
            },
            {
              status: 400,
            },
          );
        }
        const {
          email,
          full_name,
          phone,
          restaurant_name,
          number_of_locations,
          biggest_challenge,
        } = result.data;
        // Insert into database
        // Only store the essential form fields
        // Note: No status field - progression tracked via invited_at and onboarded_at timestamps
        const { data, error } = await supabaseAdminClient
          .from("early_access_waitlist")
          .insert({
            email: email.toLowerCase().trim(),
            full_name,
            phone,
            restaurant_name,
            number_of_locations,
            biggest_challenge,
          })
          .select()
          .single();
        if (error) {
          // Handle duplicate email error
          if (error.code === "23505") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
              "NextResponse"
            ].json(
              {
                success: false,
                error: "Email already registered",
              },
              {
                status: 409,
              },
            );
          }
          console.error("Waitlist insert error:", error);
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "NextResponse"
          ].json(
            {
              success: false,
              error: "Failed to add to waitlist",
              details:
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$landing$2f$src$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
                  "env"
                ].NODE_ENV === "production"
                  ? undefined
                  : {
                      message: error.message,
                      code: error.code,
                      hint: error.hint,
                      details: error.details,
                    },
            },
            {
              status: 500,
            },
          );
        }
        try {
          const functionResult = await supabaseAdminClient.functions.invoke(
            "waitlist-confirm",
            {
              body: {
                email,
                full_name,
                restaurant_name,
                number_of_locations,
                biggest_challenge,
              },
            },
          );
          if (functionResult.error) {
            console.error(
              "Waitlist confirmation function error:",
              functionResult.error,
            );
          }
        } catch (invokeError) {
          console.error("Waitlist confirmation invoke error:", invokeError);
        }
        // Optional: Send confirmation email via Resend
        // await sendConfirmationEmail(email, full_name);
        // Optional: Send notification to Slack
        // await notifySlack({ email, restaurant_name });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "NextResponse"
        ].json({
          success: true,
          data,
        });
      } catch (error) {
        console.error("Waitlist API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "NextResponse"
        ].json(
          {
            success: false,
            error: "Internal server error",
          },
          {
            status: 500,
          },
        );
      }
    }
    async function GET(_request) {
      try {
        // TODO: Add authentication check here
        // const session = await getSession(request);
        // if (!session || session.user.role !== 'admin') {
        //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        // }
        const { data, error } = await supabaseAdminClient
          .from("early_access_waitlist")
          .select("*")
          .order("created_at", {
            ascending: false,
          });
        if (error) {
          console.error("Waitlist fetch error:", error);
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            "NextResponse"
          ].json(
            {
              success: false,
              error: "Failed to fetch waitlist",
            },
            {
              status: 500,
            },
          );
        }
        // Get stats
        const { data: stats } =
          await supabaseAdminClient.rpc("get_waitlist_stats");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "NextResponse"
        ].json({
          success: true,
          data,
          stats,
        });
      } catch (error) {
        console.error("Waitlist GET error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
          "NextResponse"
        ].json(
          {
            success: false,
            error: "Internal server error",
          },
          {
            status: 500,
          },
        );
      }
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d6f69bc._.js.map
