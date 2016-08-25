$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      // console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);

      array.push(values);

      $('.totalSalary').text(totalSal());

      totalSal();

    });

    

    function totalSal() {
      var total = 0;
      array.forEach(function(element) {
        total += parseInt(element.salary);

      });
      // console.log(total);
      return total;
    }


    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeeid + ' '  + empInfo.jobtitle + ' ' + empInfo.salary + '</p>' + '<button id="' + 'deleteThis" '+  ' data-Salary="' + empInfo.salary + '" > Delete</button>');
    }

    $('#container').on('click','button', function() {
      var personPrice = $(this).data("salary");
      var totalPrice = $(totalSal());
      var newTotal = totalPrice[0] - personPrice;

      $('.totalSalary').append(newTotal);
      $(this).parent().remove();
      
      // console.log(totalPrice[0]);
      // console.log($(this).data("salary"));
      // console.log(newTotal);
      // console.log(typeof totalPrice);
      // console.log('total price',totalPrice);
      // console.log('total price', totalPrice[0]);
      // console.log(typeof personPrice);
      totalSal();
    });

});
