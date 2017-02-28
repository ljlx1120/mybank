$(function(){

  function Register (name,initial){
    this.inputName = name;
    this.inputInitial = initial;
    this.transaction = [];
  };

  function Transaction(deposit,withdraw) {
    this.inputDeposit = deposit;
    this.inputWithdraw = withdraw;
  }


  $("form#register").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var totalInitial = parseInt($("#initial").val());
    var newUser = new Register (username,totalInitial);

    $("#nameOutput").text(newUser.inputName);
    $("#initialOutput").text(newUser.inputInitial);

    $("#transaction").click(function(){
    var depositInput = parseInt($("#deposit").val());
    var withdrawInput = parseInt($("#withdraw").val());
    var newTransaction = new Transaction (depositInput,withdrawInput);
    newUser.transaction.push(newTransaction);

    newUser.balance = function (){
      return newUser.inputInitial + (Object.values(newUser.transaction[0])[0]) - (Object.values(newUser.transaction[0])[1]);
    };


    $("#balance").text(newUser.balance());
    console.log(newUser.balance());
    });

  });
});
