$(function(){

  function Register (name,initial){
    this.inputName = name;
    this.inputInitial = initial;
    this.transaction = 0;
  };

  Register.prototype.balance = function(deposit){
    return this.inputInitial = this.inputInitial + deposit;
  };

  $("form#register").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var totalInitial = parseInt($("#initial").val());
    var newUser = new Register (username,totalInitial);

    $("#nameOutput").text(newUser.inputName);
    $("#initialOutput").text(newUser.inputInitial);

    $("#transaction").click(function(){
    var depositInput = parseInt($("#deposit").val());
    var withdrawInput = $("#withdraw").val();
    var result = newUser.balance(depositInput);

    $("#balance").text(result);
    console.log(result);
    });

  });
});
