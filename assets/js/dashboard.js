document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");
    const closeBtn = document.getElementById("closeSidebar");

    // Open Sidebar
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.add("open");
        toggleBtn.style.display = "none"; // Hide burger icon
    });

    // Close Sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("open");
        toggleBtn.style.display = "block"; // Show burger icon again
    });
});
