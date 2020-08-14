// Business Logic
function ruby (num1,num2,num3,num4,num5) {
  if (Math.round((num1+num2+num3+num4+num5)/5) === 1) {
    return true;
  };
};

function javascript (num1,num2,num3,num4,num5) {
  if (Math.round((num1+num2+num3+num4+num5)/5) === 2) {
    return true;
  };
};

function python (num1,num2,num3,num4,num5) {
  if (Math.round((num1+num2+num3+num4+num5)/5) === 3) {
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
    if (nameInput) {
      if (ruby(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)) {
        $("#languageForm").hide();
        $(".imgResult").html("<img src='img/ruby.jpeg' class='card-img' alt='Image of Ruby language on computer'>");
        $(".name").text(nameInput);
        $(".langResult").text("RUBY!");
        $(".urlResult").html("<a href='https://www.ruby-lang.org/en/documentation/quickstart/'>Learn more here!</a>");
        $("#result").show();
      } else if (javascript(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)){
        $("#languageForm").hide();
        $(".imgResult").html("<img src='img/javascript.jpeg' class='card-img' alt='Image of JavaScript language on computer'>");
        $(".name").text(nameInput);
        $(".langResult").text("JAVASCRIPT!");
        $(".urlResult").html("<a href='https://www.w3schools.com/js/'>Learn more here!</a>");
        $("#result").show();
      } else if (python(companiesInput, syntaxInput, debugInput, frameworkInput, adjectiveInput)){
        $("#languageForm").hide();
        $(".imgResult").html("<img src='img/python.jpeg' class='card-img' alt='Image of Python language on computer'>");
        $(".name").text(nameInput);
        $(".langResult").text("PYTHON!");
        $(".urlResult").html("<a href='https://www.python.org/about/gettingstarted/'>Learn more here!</a>");
        $("#result").show();
      } else {
        $("#languageForm").hide();
        $(".imgResult").html("<img src='img/go.png' class='card-img' alt='Image of Ruby language on computer'>");
        $(".name").text(nameInput);
        $(".langResult").text("GO!");
        $(".urlResult").html("<a href='https://golang.org/doc/install'>Learn more here!</a>");
        $("#result").show();
      };
    } else {
      alert("Your name is important! Please enter it.")
    };
  });
});