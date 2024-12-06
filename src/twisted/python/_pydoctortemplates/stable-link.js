// If the documentation isn't stable or latest, insert a stable link
if ((window.location.pathname.indexOf('/stable/') == -1) && (window.location.pathname.indexOf('/latest/') == -1)) {
    // Give the user a link to this page, but in the stable version of the docs.
    var link = document.getElementById('current-docs-link');
    var href = window.location.pathname.replace(/\/\d+\.\d+\.\d+\/api\//, '/stable/api/');
    // And make it visible
    if (href.toString() != window.location.pathname.toString()){
        var container = document.getElementById('current-docs-container');
        container.style.display = "";
        link.href = href;
        delete link;
        delete container;
    }
}