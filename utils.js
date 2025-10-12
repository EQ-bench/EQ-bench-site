// Dropdown toggle
const dropdownToggle = document.getElementById('legacyDropdownToggle');
const dropdownMenu = document.getElementById('legacyDropdownMenu');

dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
});

// Prevent dropdown from closing when clicking inside it
dropdownMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});