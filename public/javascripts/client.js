(() => {
    var isCurrent = location.href.indexOf('current') != -1;
    var isSized = location.search == '?sized' || location.search == '?sized=true' && location.search != '?sized=false';
    var isGitHubHost = location.href.indexOf('github') != -1;

    if (isCurrent && !isSized) {
        document.getElementById('main-container').classList.remove('size-containers')
    }

    setTimeout(() => {
        makeRequest('header');
        makeRequest('account-balance');
    }, 400)
    
    setTimeout(() => {
        makeRequest('inline-actions');
    }, 500)

    setTimeout(() => {
        makeRequest('banners');
        makeRequest('credit-card-balance');
        makeRequest('lending');
    }, 800)

    function makeRequest (dataType) {
        var url = isGitHubHost ? `/flickering-test/${dataType}` : `/${dataType}`;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                var container = document.getElementById(dataType);

                container.innerHTML = data;
                
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