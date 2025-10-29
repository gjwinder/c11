Avenir font installation

This folder is for hosting licensed font files that your project can load via @font-face.
Avenir is a commercial font and cannot be distributed here. To enable Avenir in the app:

1. Purchase the appropriate webfont or desktop license for Avenir from a licensed vendor (e.g. FontShop, Linotype, MyFonts).
2. Add the font files to this folder. Suggested filenames used by the project:
   - avenir-regular.woff2
   - avenir-regular.woff
   - avenir-700.woff2
   - avenir-700.woff

   You can also use .ttf files, but woff/woff2 are recommended for web delivery.

3. If you use different filenames or a different folder, update the @font-face src URLs in
   `src/lists/customerViewList.vue` (or your global stylesheet) to point to the correct paths.

4. Restart the dev server if it's running so the files are served from /fonts.

If you don't have a Avenir license or want a free alternative, consider using a Google Font
(e.g. Poppins, Inter, Nunito) or continue to fall back to system fonts.

Note on licensing: Ensure your use of Avenir conforms to the license you purchased (number of pageviews, domains, bundling, etc.). If you need help picking an open-source substitute, tell me which visual tone you're after (geometric/modern, humanist, neutral) and I can recommend one and update the CSS to load it via Google Fonts.