var SalaryService = {

	getIndex: function(salary, callback) {
		$.ajax({
		  url: '/api/salary', //end-point to backend
		  data: {'salary': salary},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};