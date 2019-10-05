var ghpages = require('gh-pages');
ghpages.publish('dist', func(){ console.log("deployed!") });