browserify ./StartApp.js -g [ envify --NODE_ENV production ] -t babelify -g uglifyify | uglifyjs --compress --mangle > ./bundle.js
pause