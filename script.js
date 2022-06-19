function showPosts() {
    document.getElementById('post').innerHTML = '';
    for (i = 0; i < posts.length; i++) {
        showPostsTemplate(i);
    }
    renderSuggestions()
}

function renderSuggestions() {
    document.getElementById('suggestion').innerHTML = '';
    for (i = 0; i < suggestions.length; i++) {
        renderSuggestionsTemplate(i);
    }
}

function likePost(i) {
    posts[i]['likes']++;
    document.getElementById(`likes${i}`).innerHTML = `<div>Gefällt ${posts[i]['likes']} Mal</div>`;
    document.getElementById(`likePost${i}`).innerHTML = `<img onclick="dislikePost(${i})" class="Icons noHoverEffect" src="img/heartRed.png">`;
}

function dislikePost(i) {
    posts[i]['likes']--;
    document.getElementById(`likes${i}`).innerHTML = `<div>Gefällt ${posts[i]['likes']} Mal</div>`;
    document.getElementById(`likePost${i}`).innerHTML = `<img onclick="likePost(${i})" class="Icons" src="img/favorite-3-48.png">`;
}

function comment(i) {
    let input = document.getElementById(`commentInput${i}`).value;
    posts[i]['comments'].push(input);
    posts[i]['commetnsUsers'].push('v__rob__');
    openComments(i);
}

function openComments(i) {
    openCommentsTemplate(i)
}

function closeComments(i) {
    closeCommentsTemplate(i)
}

function follow(i) {
    document.getElementById(`follow${i}`).innerHTML = `<div onclick="unfollow(${i})">Gefolgt</div>`;
}

function unfollow(i) {
    document.getElementById(`follow${i}`).innerHTML = `<div onclick="follow(${i})">Folgen</div>`;
}

function showalert() {
    alert("Funktion ist noch nicht eingebunden!")
}

//function search() {
//    let search = document.getElementById('search').value;
//    search = search.toLowerCase();
//
//    let result = document.getElementById('searchfield');
//    result.innerHTML = '';
//
//    for (let i=0; i < suggestions.length; i++) {
//       let name = suggestions['suggestionName'];
//        if (name.toLowerCase().includes(search)) {
//            result.innerHTML += `<div>${name}</div>`
//        }      
//    }
//}
