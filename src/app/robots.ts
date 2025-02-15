import type { MetadataRoute } from 'next';

// NOTE:
// - Required for static export
// - Can't use with `next dev --turbopack`
//   https://github.com/vercel/next.js/issues/68667#issuecomment-2620662928
// See more: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/private/',
    },
    sitemap: 'https://cloudydaiyz.com/sitemap.xml',
  };
}
