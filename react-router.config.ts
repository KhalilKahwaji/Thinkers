import { vercelPreset } from '@vercel/react-router/vite';
import type { Config } from '@react-router/dev/config';

export default {
  // SSR by default. Set to false if you intentionally want SPA mode.
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;