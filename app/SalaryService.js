var SalaryService = {

	getIndex: function(salary) {
            
        var totalINSS = 0.0;
        var totalIRPF = salary-totalINSS;
       
             
                //deduçao inss.
	             if(salary < 1399.13){

	                  totalINSS = (salary/100) * 8;
	            }
	             else if (salary > 1399.12 && salary < 2331.89){
	                  totalINSS = (salary/100) * 9;
	             }
                  else if(salary > 2331.88 && salary < 4663.76){
                      totalINSS = (salary/100) * 11;
	             }
	               else if(salary > 4663.75){
	                 totalINSS = 513.02;
	            }
        
        
                //deduçao irpf.
      
        
                  if(salary < 1903.99){

	                  totalIRPF = 0;
	            }
	             else if (salary > 1903.98 && salary < 2826.66){
	                  totalIRPF =  ((totalIRPF/100)*7.5) - 142.80 ;
	             }
                  else if(salary > 2826.65 && salary < 3751.06){
                     totalIRPF =  ((totalIRPF/100)*15) - 354.80 ;
	             }
                  else if(salary > 3751.05 && salary < 4664.69){
                      totalIRPF =  ((totalIRPF/100)*22.5) - 636.13 ;
	             }
	               else {
	                 totalIRPF = ((totalIRPF/100)*27.5)- 869.36;
	            }
        
        return totalINSS;
        return totalIRPF;
        return (salary - totalINSS)-totalIRPF;
      },

 
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};

module.exports = SalaryService;