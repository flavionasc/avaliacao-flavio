var SalaryController = {
	
	init: function() {
		SalaryController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			SalaryController.calculateSalary(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateSalary: function(form) {
		var 
			salary = parseFloat(form.salary.value),
            result = [0,0,0]
		
		var callback = function(result) {
			SalaryController.showResult(result);			
		};
		
		SalaryService.getSalary(salary, callback);
	},
	
	showResult: function(result) {
		var INSSResult = document.querySelector('.INSS');
         INSSResult.innerHTML = result[0];
        var IRPFResult = document.querySelector('.IRPF');
         IRPFResult.innerHTML = result[1];
        var liquid = document.querySelector('.liquid');
         liquid.innerHTML = result[2];
        //spanResult.innerHTML = result.toFixed(2);
       
	}

};

//initialization
SalaryController.init();