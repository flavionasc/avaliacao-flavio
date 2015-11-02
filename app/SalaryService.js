var SalaryService = {

	getSalary: function(salary) {
        var result = [0,0,0];   
        var totalINSS = 0.0;
        var totalIRPF = 0.0;
        
       
            
        if (typeof(salary) === 'number'){
                //deduçao inss.
	             if(salary < 1399.13){

	                  totalINSS = salary * 0.08;
	            }
	             else if (salary > 1399.12 && salary <= 2331.88){
	                  totalINSS = salary * 0.09;
	             }
                  else if(salary >= 2331.89 && salary <= 4663.75){
                      totalINSS = salary * 0.11;
	             }
	               else{
	                 totalINSS = 513.02;
	            }
        
                var baseSalary = salary-totalINSS;
                //deduçao irpf.
	            
                 if(salary <= 1903.98) {
				      totalIRPF = 0;
			      } 
	              else if (baseSalary > 1903.98 && baseSalary <= 2826.65){
	                  totalIRPF = (baseSalary * 0.075) - 142.80 ;
	             }
                  else if(baseSalary > 2826.65 && baseSalary <= 3751.05){
                     totalIRPF =  (baseSalary * 0.15) - 354.80 ;
	             }
                  else if(baseSalary > 3751.05 && baseSalary <= 4664.68){
                      totalIRPF =  (baseSalary * 0.225) - 636.13 ;
	             }
	               else{
	                 totalIRPF = (baseSalary * 0.255) - 869.36;
	            }
        
               result[0]=totalINSS.toFixed(2);
               result[1]=totalIRPF.toFixed(2);
               result[2]=baseSalary-totalIRPF.toFixed(2);
        
        
            return result;
      }
        return null;
    }

	
};

module.exports = SalaryService;