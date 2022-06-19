function showPostsTemplate(i) {
    let post = posts[i];
    document.getElementById('post').innerHTML += `  <div class="post">
                                                            <div class="postTop">
                                                                <div class="postTopLeft">
                                                                    <div><img class="profilPic" src="${post['logo']}"></div>
                                                                    <div class="postTopLeftText">
                                                                        <div class="author">${post['author']}</div>
                                                                        <div class="location">${post['location']}</div>
                                                                    </div>
                                                                </div>
                                                                <div onclick="showalert()">...</div>
                                                            </div>
                                                            <div>
                                                                <img class="postImg" src="${post['image']}">
                                                            </div>
                                                            <div class="postBottom">
                                                                <div class="postBottomFirstRow">
                                                                    <div class="postBottomLeft">
                                                                        <div id="likePost${i}" >
                                                                        <img onclick="likePost(${i})" class="Icons" src="img/favorite-3-48.png">
                                                                        </div>
                                                                        <div>
                                                                            <img class="Icons" src="img/comment.png" onclick="showalert()">
                                                                        </div>
                                                                     <div>
                                                                            <img class="Icons" src="img/paper-plane-48.png" onclick="showalert()">
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <img class="Icons" src="img/save.png" onclick="showalert()">
                                                                    </div>
                                                                </div>
                                                                <div class="postBottomSecondRow" id="likes${i}">
                                                                    <div>Gefällt ${post['likes']} Mal</div>
                                                                </div>
                                                                <div class="postBottomThirdRow">
                                                                <span class="author">${post['author']}</span> ${post['discription']}
                                                                </div>
                                                                <div class="postBottomForthRow" id="styleComments${i}">
                                                                    <div id="showComments${i}">
                                                                        <div class="showComments" onclick="openComments(${i})">Alle ${post['comments'].length} Kommentare ansehen</div>
                                                                    </div>
                                                                        <div id="allComments${i}"></div>
                                                                </div>
                                                                <div>
                                                                    <input id="commentInput${i}" placeholder="Kommentieren ..." class="commentInput">
                                                                    <button class="postComment" onclick="comment(${i})">Posten</button>
                                                                </div>
                                                            </div>
                                                    </div>`
                                                }


function openCommentsTemplate(i) {
    document.getElementById(`showComments${i}`).innerHTML = `<div class="closeComments" onclick="closeComments(${i})">
                                                                Kommentare schließen
                                                            </div>`;
    document.getElementById(`allComments${i}`).innerHTML = '';
    for (j = 0; j < posts[i]['comments'].length; j++) {
        document.getElementById(`allComments${i}`).innerHTML += `<div class="allComments">
                                                                    <div class="commetnsUsers">${posts[i]['commetnsUsers'][j]}</div> ${posts[i]['comments'][j]}
                                                                </div>`;
    }
    document.getElementById(`styleComments${i}`).classList.add('styleComments');
}

function closeCommentsTemplate(i) {
    document.getElementById(`showComments${i}`).innerHTML = `<div class="showComments" onclick="openComments(${i})">
                                                                Alle ${posts[i]['comments'].length} Kommentare ansehen
                                                             </div>`;
    document.getElementById(`allComments${i}`).innerHTML = ``;
    document.getElementById(`styleComments${i}`).classList.remove('styleComments');
}

function renderSuggestionsTemplate(i) {
    let suggestion = suggestions[i];
    document.getElementById('suggestion').innerHTML += `<div>
                                                            <div class="suggestionProfil">
                                                                <div class="suggestionContentLeft">
                                                                    <img class="suggestionProfilPic" src="${suggestion['suggestionProfilPic']}">
                                                                    <div class="suggestionContentLeftmargin">
                                                                        <div class="suggestionName">
                                                                            ${suggestion['suggestionName']}
                                                                        </div>
                                                                        <div class="suggestionFollower">
                                                                            ${suggestion['suggestionFollower']}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <a href="#" id="follow${i}">
                                                                    <div onclick="follow(${i})">Folgen</div>
                                                                </a>
                                                        </div>`
}

