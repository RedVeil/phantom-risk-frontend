/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config({ path: ".env" });
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  env:{
    RPC_URL:process.env.RPC_URL,
    ADDR_PLEB:process.env.ADDR_PLEB,
    ADDR_PHANTOM_RISKV1:process.env.ADDR_PHANTOM_RISKV1
  }
});
