var express = require('express');
var router = express.Router();
var braintree = require('braintree');

router.post('/', function(req, res, next) {
  var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'rppzycv6vk7qspvm',
    publicKey: 'pvhtx6gbqbrwq45r',
    privateKey: 'e67ac19d2d870d67d7bf839b43225dbb'
  });

  // Try to refund transaction

  var newTRefund= gateway.transaction.refund(req.body.transactionid, function(error, result) {
      if (result) {
        console.log(result);
        res.send(result);
      } else {
        console.log(error);
        res.status(500).send(error);
      }
  });
});

module.exports = router;