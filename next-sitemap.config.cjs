/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pnwcubedrafters.com',
  generateRobotsTxt: true,
  // Write into the static export directory. The default (public/) is copied into
  // out/ during `next build`, which runs before this postbuild step, so files
  // written there would never reach the deployed site.
  outDir: 'out',
};
