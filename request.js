var request = require('request');
var fs = require('fs');

request.get('https://pbs.twimg.com/profile_images/647662588457676800/S8-ME1Jb_400x400.png')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('./downloaded.png'));