$("#formvalidation").validate({
    rules:{
      fname:{
              minlength: 3,
              number: false,
          },
          lname:{
              minlength: 3
          },
          email:{
              email:true
          },
          address:{
  
              required:true,
          }
      },
  
      messages: {
          fname:{
          required: "Please enter your name",
          minlength:"Name at least 3 characters",
          number:"Didn't enter numbers",
          },
          lname:{
              required:"Please enter your last name",
              minlength: "Name at least 3 characters"
          },
          email: "Please Enter your email correctly",
          address: "please enter valid address"
      },
  
      submitHandler: function(form) {
        form.submit();
      }
     });