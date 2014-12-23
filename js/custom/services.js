// app services
function MandrillService(){

  // create a new instance of the Mandrill class with your API key
  var m = new mandrill.Mandrill('ESKjcZPEVCA73SCT9ZPtnw');

  // create a variable for the API call parameters
  var params = {
    "message": {
        "from_email": ""
      , "to":[{"email": "andrew.g.conti@gmail.com"}]
      , "subject": "agconti.com: Hey! I just visited your website!"
      , "text": ""
    }
  };
  var sendMessage = function(name, email, message){
    params.message.from_email = email
    params.message.text = [message, "\nYour Robot:", name, email].join("\n")
    return m.messages.send(params, function(res) {
      return res
    }, console.error)
  }

  return {
    send: sendMessage
  }
}

function VelocityService(){
    
    //Velocity must already be loaded on the page
    return window.$.Velocity
}

angular.module("appServices", [])
  .factory('Mandrill', MandrillService)
  .factory('Velocity', VelocityService)

