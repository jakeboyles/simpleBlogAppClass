var login = require('tiyo-login');
login('jake.boyles@theironyard.com', 'baseball_200', function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result);
});
