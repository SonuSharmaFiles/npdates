<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — npdates.org</title>
        <style>
          body { font-family: system-ui, sans-serif; max-width: 860px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; }
          h1 { font-size: 1.5rem; margin-bottom: 4px; }
          p { color: #555; margin-top: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 24px; }
          th { text-align: left; padding: 10px 14px; background: #f4f4f4; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #555; }
          td { padding: 10px 14px; border-bottom: 1px solid #eee; font-size: 0.9rem; }
          tr:hover td { background: #fafafa; }
          a { color: #e05a1a; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .count { font-size: 0.85rem; color: #888; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs indexed</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td><xsl:value-of select="position()"/></td>
                <td>
                  <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
