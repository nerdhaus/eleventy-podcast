module.exports = {
    env: process.env.ELEVENTY_ENV,
    timestamp: new Date(),
    netlify: process.env.NETLIFY,
    context: process.env.CONTEXT,
    branch: process.env.BRANCH,
    commit: process.env.COMMIT_REF
}
