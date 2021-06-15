const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/404.js"))),
  "component---src-pages-about-me-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/about-me.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/index.js"))),
  "component---src-pages-index-old-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/index-old.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/resume.js"))),
  "component---src-pages-service-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/service.js"))),
  "component---src-pages-technical-skills-js": hot(preferDefault(require("/Users/Bryceson/Projects/Coding/personal-website/src/pages/technical-skills.js")))
}

