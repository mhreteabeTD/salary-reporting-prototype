// Expanded data for salary estimates
const salaryData = [
    { job: "Software Engineer", company: "Google", education: "bachelor", experience: 3, averageSalary: 130000 },
    { job: "Product Designer", company: "Apple", education: "bachelor", experience: 2, averageSalary: 100000 },
    { job: "Data Scientist", company: "Microsoft", education: "master", experience: 5, averageSalary: 140000 },
    { job: "Supply Chain Manager", company: "Amazon", education: "master", experience: 8, averageSalary: 120000 },
    { job: "Machine Learning Engineer", company: "Facebook", education: "phd", experience: 4, averageSalary: 150000 },
    { job: "Investment Banker", company: "JP Morgan Chase", education: "master", experience: 6, averageSalary: 160000 },
    { job: "Clinical Research Coordinator", company: "Pfizer", education: "bachelor", experience: 3, averageSalary: 85000 },
    { job: "Automotive Designer", company: "Tesla", education: "bachelor", experience: 5, averageSalary: 95000 },
    { job: "Aerospace Engineer", company: "Boeing", education: "master", experience: 7, averageSalary: 130000 },
    { job: "Operations Manager", company: "Walmart", education: "bachelor", experience: 10, averageSalary: 90000 },
    { job: "Compliance Officer", company: "Goldman Sachs", education: "master", experience: 4, averageSalary: 110000 },
    { job: "Hardware Engineer", company: "Intel", education: "phd", experience: 6, averageSalary: 120000 },
    { job: "Creative Director", company: "Disney", education: "master", experience: 9, averageSalary: 135000 },
    { job: "Editor", company: "The New York Times", education: "bachelor", experience: 7, averageSalary: 98000 },
    { job: "Brand Strategist", company: "Nike", education: "master", experience: 5, averageSalary: 90000 },
    { job: "Marketing Manager", company: "Coca-Cola", education: "bachelor", experience: 4, averageSalary: 85000 },
    { job: "Project Manager", company: "Cisco", education: "master", experience: 6, averageSalary: 115000 },
    { job: "Quality Assurance Engineer", company: "Samsung", education: "bachelor", experience: 3, averageSalary: 80000 },
    { job: "Business Analyst", company: "Deloitte", education: "master", experience: 2, averageSalary: 90000 },
    { job: "Human Resources Manager", company: "Oracle", education: "bachelor", experience: 8, averageSalary: 95000 }
];

// Populate dropdowns
document.addEventListener('DOMContentLoaded', function() {
    const jobSelect = document.getElementById('desiredJob');
    const companySelect = document.getElementById('desiredCompany');

    let jobs = new Set();
    let companies = new Set();

    salaryData.forEach(item => {
        jobs.add(item.job);
        companies.add(item.company);
    });

    jobs.forEach(job => {
        let option = document.createElement('option');
        option.value = option.textContent = job;
        jobSelect.appendChild(option);
    });

    companies.forEach(company => {
        let option = document.createElement('option');
        option.value = option.textContent = company;
        companySelect.appendChild(option);
    });
});

function estimateSalary() {
    const experience = parseInt(document.getElementById('experience').value, 10);
    const education = document.getElementById('education').value;
    const desiredJob = document.getElementById('desiredJob').value.toLowerCase();
    const desiredCompany = document.getElementById('desiredCompany').value.toLowerCase();

    const found = salaryData.find(entry => 
        entry.job.toLowerCase() === desiredJob && 
        entry.company.toLowerCase() === desiredCompany &&
        entry.education === education && 
        entry.experience <= experience
    );

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Estimated Salary for a ${desiredJob} at ${desiredCompany} with your experience and education level: $${50000}`;
    
}
