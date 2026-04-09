const { composePlugins, withNx } = require('@nx/next');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin(
  '../../libs/shared/translations/src/lib/i18n/request.ts'
);

const nextConfig = {
  nx: {
    svgr: false,
  },
};

module.exports = composePlugins(withNx)(withNextIntl(nextConfig));