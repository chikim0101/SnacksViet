//clear all input fields when reset button clicked
function reset() {
    document.getElementById("form-button").reset(); 
}

//validate input fields when send button clicked
function send() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        var arr = document.getElementsByTagName('input');
        console.log(arr); 
        var first_name = arr[0].value;
        var last_name = arr[1].value;
        var age = arr[2].value;
        var address = arr[3].value;
        var phone = arr[4].value;
        var check1 = arr[5].checked;
        var quantity1 = arr[6].value;
        var check2 = arr[7].checked;
        var quantity2 = arr[8].value;
        var check3 = arr[9].checked;
        var quantity3 = arr[10].value; 
        event.stopImmediatePropagation();

        //alert if age is not a number or age is negative or greater than 200
        if (isNaN(age) || !( age > 0 && age<200 )) {
            alert( "Age must be a number between 0 and 200!" );
            return false;
        }

        //check for Vietnamese phone number
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (vnf_regex.test(phone) == false) {
            alert("Invalid phone number!");
            return false;
        }

        //aleart if none of food item is chosen
        if (check1 || check2 || check3 ) {          
        } else{
            alert("At least 1 item must be chosen!");
            return false;
        }

        //alert if food item is chosen but quantity is not given
        if (check1 && !quantity1) {
            alert("Please specify quantity for bánh tráng!");
            return false;
        }
        if (check2 && !quantity2) {
            alert("Please specify quantity for xiên bẩn!");
            return false;
        }
        if (check3 && !quantity3) {
            alert("Please specify quantity for coffee!");
            return false;
        }

        //alert if quantity number is not a number or a negative number
        if (isNaN(quantity1) || isNaN(quantity2) || isNaN(quantity3) || (quantity1) <0 || (quantity2) <0 || (quantity3) <0) {
            alert("Order quantity must be a number greater than 0!");
            return false;
        }

        var choice = confirm('Confirm your order');
        //confirm order message
        if (choice == 1) {
            alert("Order sent, we will contact you soon. Thank you!");
            form.reset(); 
        }
        return true; 
    });
}