/**
 * Webhook Server
 *
 * @author Payant Support <hello@payant.ng>
 * @version 1.0.0
 */

const express       =   require('express');
const bodyParser    =   require('body-parser');
let   app 	    = 	express();

app.use(bodyParser.json());

app.get('/webhook', (req, res) => {
	if(req.query.type === 'subscribe' && req.query.verify_token === 'VerifyToken') {
		console.log("Token validation successful.");
    	res.status(200).send(req.query.challenge);
	}else {
		console.error("Token validation failed. Make sure the validation tokens match.");
    	res.sendStatus(403);  
	}
});

app.post('/webhook', (req, res) => {
	var data = req.body;

	console.log("Data received: ", data);

	//Lastly send back a 200
	res.sendStatus(200);
})

app.listen(process.env.PORT || 8005);

