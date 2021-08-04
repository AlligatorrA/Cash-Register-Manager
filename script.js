const billAmt = document.querySelector(".bill-amount");
const nextbtn = document.querySelector(".next-Button");
const cashCont = document.querySelector(".cash-Cont");
const cashGiven = document.querySelector(".cash-given");
const checkbtn = document.querySelector(".check-button");
const message = document.querySelector("#err-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
cashCont.style.display = "none"
nextbtn.addEventListener("click", displayCont)
function displayCont() {
    if (billAmt.value == 0) {
        showMessage("Please enter number greater than 0")
        cashCont.style.display = "none"
    } else if(billAmt.value > 0){
        cashCont.style.display = "block"
    }
        
   

        checkbtn.addEventListener("click", validateBillAndCashAmount)
        function validateBillAndCashAmount() {
            message.style.display = "none";


            if (billAmt.value > 0) {
                if (cashGiven.value >= billAmt.value) {
                    const amtToBeReturned = cashGiven.value - billAmt.value;
                    console.log(amtToBeReturned);
                    calculateChange(amtToBeReturned);
                }
                else {
                    showMessage("cash is less than bill");
                }
            }
            else {
                showMessage("Please Enter Valid Bill Amount");
            }
        };
        function calculateChange(amtToBeReturned) {
            for (let i = 0; i < availableNotes.length; i++) {
                const numberOfNotes = Math.trunc(
                    amtToBeReturned / availableNotes[i]
                );
                amtToBeReturned %= availableNotes[i];
                noOfNotes[i].innerText = numberOfNotes;
            }
        }

        function showMessage(msg) {
            message.style.display = "block";
            message.innerText = msg;
        }


     
 } // }
