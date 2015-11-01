var SalaryService = {

	getSalary: function(salary, callback) {
		$.ajax({
		  url: '/api/salary', //end-point to backend
		  data: {'salary': salary},
		  success: function(result) {
                for(var i=0; i < result.length; i++){
                    parseFloat (result[i]);    
                }
		  	callback(result);
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	}
	
};