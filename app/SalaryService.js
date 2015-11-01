var SalaryService = {

	getSalary: function(salary) {
        var result = [0,0,0];   
        var totalINSS = 0.0;
        var totalIrpf = 0.0;
        var baseSalary = salary-totalINSS;
       
            
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
        
        
                //deduçao irpf.
                 totalIRPF = 0.0;
	            
	             if (baseSalary >= 1903.99 && baseSalary <= 2826.65){
	                  totalIRPF = (baseSalary * 0.075) - 142.80 ;
	             }
                  else if(baseSalary >= 2826.66 && baseSalary <= 3751.05){
                     totalIRPF =  (baseSalary * 0.15) - 354.80 ;
	             }
                  else if(baseSalary >= 3751.06 && baseSalary <= 4664.68){
                      totalIRPF =  (baseSalary * 0.225) - 636.13 ;
	             }
	               else if(baseSalary > 4664.68){
	                 totalIRPF = (baseSalary * 0.275) - 869.36;
	            }
        
               result[0]=totalINSS.toFixed(2);
               result[1]=totalIRPF.toFixed(2);
               result[2]=(salary - totalINSS)-totalIRPF.toFixed(2);
        
        
            return result;
      }
        return null;
    }

	
};

module.exports = SalaryService;