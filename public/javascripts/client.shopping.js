(() => {
    var isCurrent = location.href.indexOf('current') != -1;
    var isSized = location.search == '?sized' || location.search == '?sized=true' && location.search != '?sized=false';
    var isGitHubHost = location.href.indexOf('github') != -1;

    if (isSized) {
        document.getElementById('main-container').classList.add('size-containers')
        document.getElementById('main-container').classList.add('fade')
        document.getElementById('main-container').classList.remove('without-fade')
    }

    setTimeout(() => {
        makeRequest('search');
    }, 400)
    
    setTimeout(() => {
        makeRequest('shopping-actions');
    }, 800)

    setTimeout(() => {
        makeRequest('sellers-carousel');
    }, 950)

    setTimeout(() => {
        makeRequest('highlight-by-department');
    }, 1100)

    setTimeout(() => {
        makeRequest('highlight-banners');
    }, 1800)
    
    setTimeout(() => {
        makeRequest('shopping-banner');
    }, 2000)

    

    function makeRequest (dataType) {
        var url = isGitHubHost ? `/flickering-test/${dataType}` : `/${dataType}`;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                var container = document.getElementById(dataType);

                if (!isSized) {
                    container.innerHTML = "";
                    setTimeout(() => {
                        container.innerHTML = data;
                        container.getElementsByClassName('fade')[0].classList.remove('hide');
                    }, 100);
                }else {
                    container.innerHTML = data;
                }
                
                if (isCurrent) {
                    container.getElementsByClassName('fade')[0].classList.remove('hide');
                }else {
                    setTimeout(() => {
                        container.getElementsByClassName('fade')[0].classList.remove('hide');
                    }, 50)
                }
            })
            .catch(error => console.error(error)); 
    }
})()