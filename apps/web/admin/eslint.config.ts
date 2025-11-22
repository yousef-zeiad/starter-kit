import {
  baseConfig,
  restrictEnvAccess,
} from "@trading-platform/eslint-config/base";
import { nextjsConfig } from "@trading-platform/eslint-config/nextjs";
import { reactConfig } from "@trading-platform/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
