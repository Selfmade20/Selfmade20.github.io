var availableBalance = 10000;
console.log("availableBalance", availableBalance);

var withdrawalAmount = 9000;
console.log("withdrawalAmount", withdrawalAmount);

var balance = availableBalance - withdrawalAmount

function withdrawalAmount(availableBalance) {

      if(availableBalance == withdrawalAmount){
            //balance = subtract(availableBalance, withdrawalAmount);
            alert ("Wait while your transaction is processed")           
            return "Withdrawn";
        }
        else if (availableBalance < withdrawalAmount){
            return "Insufficient funds";
        }
        else {
            console.log("Insufficient funds");
        }
    }
    //console.log(withdraw(9000));
    var total = balance
    console.log("Current balance", total);


