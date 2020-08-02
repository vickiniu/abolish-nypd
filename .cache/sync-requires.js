const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/pages/404.tsx"))),
  "component---src-pages-contact-reps-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/pages/contact-reps.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/pages/index.tsx"))),
  "component---src-pages-peoples-budget-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/pages/peoples-budget.tsx"))),
  "component---src-pages-resources-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/pages/resources.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/Users/vicki/web/abolish-nypd/src/templates/post.tsx")))
}

