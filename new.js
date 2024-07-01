document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('navbarDropdown');
    var dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown menu on click
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        var isMenuVisible = dropdownMenu.style.display === 'block';
        // Hide all dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.style.display = 'none';
        });
        // Show the clicked one
        if (!isMenuVisible) {
            dropdownMenu.style.display = 'block';
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
