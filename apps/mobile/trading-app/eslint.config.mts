import { baseConfig } from "@trading-platform/eslint-config/base";
import { reactConfig } from "@trading-platform/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
