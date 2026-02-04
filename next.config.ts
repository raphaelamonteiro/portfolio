import type { NextConfig } from 'next';
import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl('./next-intl.config.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
