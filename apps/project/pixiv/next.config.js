const withWorkbox = require("next-with-workbox");
module.exports = withWorkbox({
    workbox: {
        maximumFileSizeToCacheInBytes: 50000000,
        swSrc: "worker.js",
        force: true,
    },
});