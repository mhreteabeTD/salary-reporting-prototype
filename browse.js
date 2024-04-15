// Sample data with well-known companies and famous job roles
// Sample data with well-known companies and famous job roles
const salaries = [
    { company: "Google", category: "technology", job: "Software Engineer", medianSalary: 150000 },
    { company: "Apple", category: "technology", job: "Product Designer", medianSalary: 120000 },
    { company: "Microsoft", category: "technology", job: "Data Scientist", medianSalary: 130000 },
    { company: "Amazon", category: "retail", job: "Supply Chain Manager", medianSalary: 110000 },
    { company: "Facebook", category: "technology", job: "Machine Learning Engineer", medianSalary: 140000 },
    { company: "JP Morgan Chase", category: "finance", job: "Investment Banker", medianSalary: 160000 },
    { company: "Pfizer", category: "healthcare", job: "Clinical Research Coordinator", medianSalary: 90000 },
    { company: "Tesla", category: "manufacturing", job: "Automotive Designer", medianSalary: 95000 },
    { company: "Boeing", category: "manufacturing", job: "Aerospace Engineer", medianSalary: 103000 },
    { company: "Walmart", category: "retail", job: "Operations Manager", medianSalary: 88000 },
    { company: "Goldman Sachs", category: "finance", job: "Compliance Officer", medianSalary: 110000 },
    { company: "Intel", category: "technology", job: "Hardware Engineer", medianSalary: 120000 },
    { company: "Disney", category: "entertainment", job: "Creative Director", medianSalary: 135000 },
    { company: "The New York Times", category: "media", job: "Editor", medianSalary: 98000 },
    { company: "Nike", category: "retail", job: "Brand Strategist", medianSalary: 90000 }
];

function renderSalaries(filteredSalaries) {
    const tableBody = document.getElementById('salaryList');
    tableBody.innerHTML = '';
    filteredSalaries.forEach(salary => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${salary.job}</td>
                         <td>${salary.company}</td>
                         <td>$${salary.medianSalary.toLocaleString()}</td>`;
        tableBody.appendChild(row);
    });
}

function filterSalaries() {
    const filterCompany = document.getElementById('filterCompany').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value;

    const filteredSalaries = salaries.filter(s => {
        return (s.company.toLowerCase().includes(filterCompany) &&
                (filterCategory === '' || s.category === filterCategory));
    });

    renderSalaries(filteredSalaries);
}

// Initially render all salaries
document.addEventListener('DOMContentLoaded', () => renderSalaries(salaries));
