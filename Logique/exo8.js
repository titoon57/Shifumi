const employees = [
    {
      name: 'Jacques',
      children: 0,
      handicap: false,
      salary: 5000,
    },
    {
      name: 'Martine',
      children: 5,
      handicap: false,
      salary: 4800,
    },
    {
      name: 'Jean',
      children: 2,
      handicap: true,
      salary: 3500,
    },
    {
      name: 'Justine',
      children: 1,
      handicap: false,
      salary: 2900,
    },
  ];
  
  function calculateNetSalary(employee) {
    let netSalary = employee.salary * 0.82;
    if (employee.handicap) {
      netSalary += employee.salary * 0.07;
    } else {
      netSalary -= employee.salary * 0.07;
    }
    let taxReduction = employee.children * 0.02;
    if (taxReduction > 0.06) {
      taxReduction = 0.06;
    }
    netSalary -= employee.salary * taxReduction;
    return netSalary;
  }
  
  employees.forEach((employee) => {
    const netSalary = calculateNetSalary(employee);
    console.log(`${employee.name} a un salaire net de ${netSalary}€`);
  });