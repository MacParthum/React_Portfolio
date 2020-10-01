## Heroku Deployed App

https://reactportunc.herokuapp.com/


### Troubleshooting Deployment

https://devcenter.heroku.com/articles/duplicate-build-version
https://devcenter.heroku.com/articles/troubleshooting-node-deploys

The app’s node_modules directory is generated at build time from the dependencies listed in package.json and the lockfile. Therefore, node_modules (and other generated directories like bower_components) shouldn’t be included in source control. Check with the following.

$ git ls-files | grep node_modules
$ echo "node_modules" >> .gitignore
$ git rm -r --cached node_modules
$ git commit -am 'untracked node_modules'