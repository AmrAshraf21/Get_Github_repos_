let theInput = document.querySelector('input[type="text"]'),

 getButton = document.querySelector('.get-button'),
reposData = document.querySelector('.show-data');
console.log();
getButton.onclick = function(){

getRepos()

}
function getRepos(){
if(theInput.value===""){

    reposData.innerHTML = `<span>Please Write GitHub Username. </span>`

}else{
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then(response =>response.json())
    .then(result =>{
        reposData.innerHTML = "";
        result.forEach(repo => {
            let mainDiv = document.createElement('div');

            let repoName = document.createTextNode(repo.name);

            mainDiv.appendChild(repoName);

            let theUrl = document.createElement('a');
            let theUrlText = document.createTextNode('Visit')

            theUrl.append(theUrlText)
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`
            theUrl.target = '_blank';

            mainDiv.appendChild(theUrl)


            let starSpan = document.createElement('span');
            let starText = document.createTextNode(`Stars ${repo.stargazers_count}`);

            starSpan.appendChild(starText)

            mainDiv.appendChild(starSpan)

            mainDiv.classList.add('repo-box');
            reposData.appendChild(mainDiv)
        });
    })

}


}

