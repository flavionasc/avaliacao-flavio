var SalaryService = {

	getIndex: function(salary) {
            
        var totalINSS = 0.0;
        var totalIRPF = 0.0;
             
                //deduçao inss.
	             if(salary < 1399.13){

	                  totalINSS = (salary * (8/100)) - salary;
	            }
	             else if (salary > 1399.12 && salary < 2331.89){
	                  totalINSS = (salary * (9/100)) - salary;
	             }
                  else if(salary > 2331.89 && salary < 4663.76){
                      totalINSS = (salary * (11/100))- salary;
	             }
	               else if(salary > 4663.75){
	                 totalINSS = (salary - 513.02);
	            }
        
        
                //deduçao irpf.
                  if(salary < 1903.99){

	                  totalIRPF = salary;
	            }
	             else if (salary > 1903.99 && salary < 2826.65){
	                  totalIRPF =  (salary * (7.5/100))- salary - 142.80 ;
	             }
                  else if(salary > 2826.66 && salary < 3751.05){
                      totalIRPF =  (salary * (15/100))- salary - 354.80 ;
	             }
                  else if(salary > 3751.06 && salary < 4664.68){
                      totalIRPF = (salary * (22.5/100))- salary - 636.13 ;
	             }
	               else if(salary > 4664.68){
	                 totalIRPF =  (salary * (27.5/100))- salary - 869.36 ;
	            }
        
        
        return salary - (totalINSS + totalIRPF);
      },

 
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};

module.exports = SalaryService;