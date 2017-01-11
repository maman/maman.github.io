module.exports = {
    paths: {
        public: './dist',
        watched: ['./src'],
    },
    files: {
        javascripts: {joinTo: 'main.js'},
        stylesheets: {joinTo: 'main.css'},
    },
    sourceMaps: 'absoluteUrl',
};
