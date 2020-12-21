### Reference

** Implementing Babel **
- Use Babel To Compile Javascript Files from ES6 to ES5
- https://www.codementor.io/@iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o

- https://mykeels.medium.com/node-how-to-handle-your-dist-files-9667f47316ab

- https://dev.to/ganeshmani/configuring-babel-for-node-js-express-server-35hp

- https://medium.com/@agavitalis/setting-up-a-nodejs-express-application-with-babel-642fe0dd45a5


** Instructions ** 

- Install dev dependencies:

`npm install --save-dev babel-cli babel-preset-es2015 rimraf`

- Create a `. babelrc’ file with these contents:

`{
  "presets": ["es2015"]
}`

- Set up Babel in package.json

 ```html
”main": "index.js",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
  "start": "npm run build && node dist/index.js"
},
```

- Build the dist folder and run with `npm run start`

- Deploy to the build version of this project with `sh deploy.sh`. See [instructions here](https://stackoverflow.com/questions/56638277/build-and-publish-dist-folder-to-github-pages)

- Generate public SSH key. See comment from [mr1528](https://github.com/facebookresearch/deepmask/issues/23) and [this article](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- After the key has been generated, use pwd, cd and cat in cli to open the public key
- This is [how to add the key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) here [on my Github account](https://github.com/settings/keys)