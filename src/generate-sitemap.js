const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Function to fetch dynamic routes (example)
async function getDynamicRoutes() {
  // Replace with actual logic to fetch dynamic routes from your API or database
  return [
    '/products/1',
    '/products/2',
    '/products/3',
  ];
}

async function generateSitemap() {
  const hostname = 'https://www.saininternet.in';
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
  ];

  const dynamicRoutes = await getDynamicRoutes(); // Fetch dynamic routes

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = new SitemapStream({ hostname });
  const writeStream = fs.createWriteStream(path.resolve(__dirname, 'dist/your-angular-app/sitemap.xml'));
  const pipeline = sitemap.pipe(createGzip()); // Optionally gzip the sitemap

  allRoutes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();

  // Pipe the sitemap stream to the write stream
  pipeline.pipe(writeStream);

  // Wait for the write stream to finish writing
  await streamToPromise(pipeline);

  console.log('Sitemap generated successfully.');
}

generateSitemap().catch(console.error);
