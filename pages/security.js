document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Disable the default action when Ctrl is pressed
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault(); // Disable F12 (DevTools shortcut)
    }
});
// Change the displayed URL without reloading the page
history.pushState(null, "", "/gtcs");
