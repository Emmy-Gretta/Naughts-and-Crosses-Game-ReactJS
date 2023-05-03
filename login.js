let client_id = '87d43aae2e244508a78323e41ac5f294';
let redirect_uri = 'http://localhost:5000/callback';

let app = express();

app.get('/login', function(req, res) {
   let state = generateRandomString(16);
   let scope = 'user-read-private user-read-email';
   res.redirect('https://accounts.spotify.com/aurhorize?' + 
      querystring.stringfy({
         response_type: 'code',
         client_id: client_id,
         scope: scope,
         redirect_uri: redirect_uri,
         state: state
      }));
});