
const path = require('path');
const shared = require('./shared.mermaid.webpack.config');

module.exports = {
    ...shared,
    target: 'web',
    entry: {
        'index': path.join(__dirname, '..', 'markdownPreview', 'index.ts'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist-preview'),
        filename: '[name].bundle.js'
    },
};