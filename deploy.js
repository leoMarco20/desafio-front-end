var ghpages = require('./node_modules_/gh-pages');
ghpages.publish('dist', ()=>{ console.log("deployed!") });