// Business Logic
function ruby (num1, num2, num3, num4, num5) {
  if (Math.round((num1 + num2 + num3 + num4 + num5) / 5) === 1) {
    return true;
  };
};

function javascript (num1, num2, num3, num4, num5) {
  if (Math.round((num1 + num2 + num3 + num4 + num5) / 5) === 2) {
    return true;
  };
};

function python (num1, num2, num3, num4, num5) {
  if (Math.round((num1 + num2 + num3 + num4 + num5) / 5) === 3) {
    return true;
  };
};


// User Interface Logic
$(document).ready(function() {
  $("#languageForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $("#name").val();
    const companiesInput= parseInt($("#companies").val());
    const syntaxInput= parseInt($("#syntax").val());
    const debugInput= parseInt($("#debug").val());
    const frameworkInput= parseInt($("#framework").val());
    const adjectiveInput= parseInt($("#adjective").val());

    if (ruby(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)) {
      $("#languageForm").hide();
      $(".imgResult").html("<img src='img/ruby.jpeg' class='card-img' alt='Image of Ruby language on computer'>");
      $(".name").text(nameInput);
      $(".langResult").text("RUBY!");
      $(".urlResult").html("<a href='https://www.ruby-lang.org/en/documentation/quickstart/'>Learn more here!</a>");
      $("#result").show();


    } else if (javascript(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)){
      $("#languageForm").hide();
      $("#result").text("You should study JavaScript!");
    } else if (python(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)){
      $("#languageForm").hide();
      $("#result").text("You should study Python!");
    } else {
      $("#languageForm").hide();
      $("#result").text("You should study Go!");
    };
  });
});