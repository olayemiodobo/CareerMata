
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const jobList = document.getElementById("job-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageNumbers = document.getElementById("page-numbers");
 
 
    // Ensure all required elements exist before proceeding
    if (!jobList || !prevBtn || !nextBtn || !pageNumbers) {
        console.error("One or more required elements are missing. Check your HTML!");
        return; // Stop execution if elements are missing
    }
 
 
    let jobIndex = 0;
    const jobsPerPage = 6;
 
 
    const jobs = [
        { title: "Cybersecurity Analyst", link: "#" },
        { title: "Vulnerability Manager", link: "#" },
        { title: "Cloud Security Engineer", link: "#" },
        { title: "DevOps Security Engineer", link: "#" },
        { title: "Information Security Consultant", link: "#" },
        { title: "Penetration Tester", link: "#" },
        { title: "SOC Analyst", link: "#" },
        { title: "IT Security Manager", link: "#" },
        { title: "Risk Analyst", link: "#" },
        { title: "Compliance Officer", link: "#" },
        { title: "Incident Response Specialist", link: "#" },
        { title: "Threat Intelligence Analyst", link: "#" },
        { title: "Security Architect", link: "#" }
    ];
 
 
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    let currentPage = 1;
 
 
    function loadJobs() {
        jobList.innerHTML = ""; // Clear existing jobs
        const start = (currentPage - 1) * jobsPerPage;
        const end = start + jobsPerPage;
 
 
        for (let i = start; i < end && i < jobs.length; i++) {
            const job = jobs[i];
 
 
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
 
 
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <button onclick="window.location.href='${job.link}'">Apply</button>
            `;
 
 
            jobList.appendChild(jobCard);
        }
 
 
        updatePagination();
    }
 
 
    function updatePagination() {
        pageNumbers.innerHTML = "";
 
 
        prevBtn.style.display = currentPage > 1 ? "inline-block" : "none";
        nextBtn.style.display = currentPage < totalPages ? "inline-block" : "none";
 
 
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            pageBtn.classList.add("page-btn");
 
 
            if (i === currentPage) {
                pageBtn.classList.add("active");
            }
 
 
            pageBtn.addEventListener("click", function () {
                currentPage = i;
                loadJobs();
            });
 
 
            pageNumbers.appendChild(pageBtn);
 
 
            if (i === totalPages - 1) {
                const dots = document.createElement("span");
                dots.textContent = "....";
                pageNumbers.appendChild(dots);
            }
        }
    }
 
 
    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            loadJobs();
        }
    });
 
 
    nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadJobs();
        }
    });
 
 
    // Sidebar Toggle (only if elements exist)
    if (toggleBtn && sidebar && closeBtn) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.add("open");
            toggleBtn.style.display = "none";
        });
 
 
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("open");
            toggleBtn.style.display = "block";
        });
    }
 
 
    loadJobs();
 });
 
 
 