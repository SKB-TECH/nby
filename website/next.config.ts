import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(projectRoot, '..');

const nextConfig: NextConfig = {
    output: 'standalone',
    turbopack: {
        root: existsSync(path.join(workspaceRoot, 'pnpm-workspace.yaml'))
            ? workspaceRoot
            : projectRoot,
    },
};

export default withNextIntl(nextConfig);
