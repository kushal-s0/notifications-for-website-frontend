
// Function to clear all notifications
function clearNotifications() {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => notification.remove());
}

// Open Sidebar Function
function openSidebar() {
    document.getElementById("notificationSidebar").classList.add("open");
}

// Close Sidebar Function
function closeSidebar() {
    document.getElementById("notificationSidebar").classList.remove("open");
}
