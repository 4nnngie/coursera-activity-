const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... Se pueden añadir más registros de empleados aquí
    ]; 

     // Función para mostrar todos los empleados
     function displayEmployees() {
        const totalEmployees = employees.map(employee =>
          `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`
        ).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
      }
      

  function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
} 
 
function findEmployeeBySpecialization() {
    const jsEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
    if (jsEmployees.length === 0) {
        document.getElementById('employeesDetails').innerHTML = '<p>No se encontraron empleados con especialización en JavaScript.</p>';
    }  else {
        const result = jsEmployees.map(employee =>  `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`
    ).join(''); 
     document.getElementById('employeesDetails').innerHTML = result;
    }
}


