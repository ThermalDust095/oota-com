AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementsByClassName('search-input')[0];
    var searchBar = document.getElementsByClassName('searchLogo')[0];

    function fun() {
        var searchTerm = searchInput.value;
        console.log(searchTerm);
        window.location.href=`http://127.0.0.1:5500/second.html?item=${searchTerm}`
    }

    searchBar.addEventListener('click', fun);
});
