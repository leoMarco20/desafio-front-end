var ghpages = require('gh-pages');
ghpages.publish('dist', { repo : "https://leoMarco20:"+process.argv[2]+"@github.com/leoMarco20/desafio-front-end.git" }, ()=>{ console.log("deployed!") });