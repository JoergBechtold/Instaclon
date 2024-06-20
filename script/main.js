//Javascript for Main
/* Name of my Profile */
let myProfileName = 'Jörg Bechtold';

let posts = [
  {
    authorImg: 'img/news-logo.jpg',
    author: 'Lokale News',
    postImg: 'img/badesee.jpg',
    postText: `Europäische Umweltagentur: Wasserqualität deutscher Badegewässer weiter sehr gut Fast alle deutschen Badegewässer erfüllen die
              Mindestanforderungen der Europäischen Umweltagentur. Nur an sieben der mehr als 2.000 Gewässer wurden Mängel festgestellt.`,
    commentProfile: ['Jens Rödder'],
    comments: ['Außer bei unserem See um die Ecke leider nicht :('],
    commentTime: [14],
    isLiked: true,
    likes: 1,
  },
  {
    authorImg: 'img/wildcat-logo.png',
    author: 'Frankfurt Wildcats',
    postImg: 'img/american-football.jpg',
    postText: `Spannend bis zum Ende - erst gehen die @hof.jokers früh im ersten Quarter in Führung, dann drehen unsere Specialteams das Spiel mit 4 Field Goals.
               Am Ende hält die Defense und sichert den dritten Sieg mit einer Interception.`,
    commentProfile: ['Max Rothe', 'AndySchmitt'],
    comments: [
      'Mega geil! Freue mich so derbe über euren Sieg gegen Hof wurde längst mal wieder zeit! Alles Gute für die weitere Saison lassts krachen! Schelle und Punkte!',
      'Eine Wahnsinns Stimmung im Stadion',
    ],
    commentTime: [4, 1],
    isLiked: true,
    likes: 23,
  },
  {
    authorImg: 'img/profile-picture-6.png',
    author: 'Lewe MG',
    postImg: 'img/post-picture.jpg',
    postText: `Ich war im Urlaub im Monument Valley, einem der beeindruckendsten Orte, die ich je gesehen habe. Die roten Felsformationen und die weiten, offenen Landschaften sind wirklich atemberaubend. Ich habe Sonnenauf- und -untergänge beobachtet, die den Himmel in lebendige Farben tauchten, und die Stille und Schönheit der Natur genossen. Es war eine unvergessliche Reise, die mir noch lange in Erinnerung bleiben wird.`,
    commentProfile: ['DanielDer5.', 'Ramon Deggers'],
    comments: ['Das klingt absolut fantastisch! Monument Valley muss wirklich ein magischer Ort sein.', 'Ich war 2018 da. Einfch wunderschön'],
    commentTime: [12, 10],
    isLiked: true,
    likes: 7,
  },
];

/* Show all posts */
function showPostContent() {
  document.getElementById('main_container').innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    document.getElementById('main_container').innerHTML += /*HTML*/ `
    <div class="post-container">
        <div class="post-headline">
          <div class="post-headline-content">
          <img class="author-img" src="${post['authorImg']}" alt="Autoren Profil Bild" />
          <a href="#">${post['author']}</a>
          </div>
    
        <div>
          <img class="tree-dots-icon" src="img/three-dots-icon.svg" alt="Drei Punkte Icon" />
        </div>
      </div>
    
      <div class="post-content">
        <div class="post-img">
          <img src="${post['postImg']}" alt="Post Bild" />
        </div>
     
        <div class="post-icons padding-left-right">
          <div class="icons-left">
            <img id="heart_icon_like" class="heart-icon-like" src="img/icon-heart.svg" alt="Herz icon" />
            <img src="img/icon-comment.svg" alt="Kommentieren icon" />
            <img src="img/icon-paper-plane.svg" alt="Nachricht icon" />
          </div>
          <div class="icons-right">
            <img src="img/icon-bookmark.svg" alt="Merken icon" />
          </div>
        </div>
    
        <div class="liks-section padding-left-right">
          <h3>Gefällt</h3>
          <p>${post['likes']} Mal</p>
        </div>
    
        <div class="post-text padding-left-right">
          <span>
            ${post['postText']}
          </span>
        </div>
    
        <div  class="comments-section"> 
          <div id="generated_new_comment_container${i}" class="current-comments d-flex-column padding-left-right">
            <!-- Generate Comments -->
          </div>
        </div>
           
        
          <div class="add-new-comment padding-left-right">
            <input class="add-new-comment-input" type="search" name="add-new-comment-input" id="comment_input${i}" placeholder="Kommentar hinzufügen" />
            <button onclick="addNewComment(${i})" class="add-new-comment-button">Posten</button>
          </div>
        </div> 
      </div>
      </div>
      `;

    let generateNewCommentContainer = document.getElementById(`generated_new_comment_container${i}`);

    for (let j = 0; j < post['comments'].length; j++) {
      let comment = post['comments'][j];
      let commentProfile = post['commentProfile'][j];
      let commentTime = post['commentTime'][j];
      generateNewCommentContainer.innerHTML += `
      <div class="d-flex-just-cont-space-between">
        <div class="comment-profile-name-time">
          <div class="d-flex-column">
            <a class="comment-profile" href="#"><nobr>${commentProfile}</nobr></a>
            <p" class="comment-time"><nobr>Vor ${commentTime} Stunden</nobr></p>
          </div>

          <div class="comment-profile-text">
            <span>
              ${comment}
            </span>
          </div>
        </div>

        <div class="comment-heart-icon">
          <img src="img/icon-heart.svg" alt="herz icon" />
        </div>

         <div class="delete-icon">
          <img src="img/xmark-search.svg" alt="Löschen" />
        </div>

        
      </div>
        `;
    }
  }
}

/* Button new comment */
function addNewComment(index) {
  let commentInput = document.getElementById(`comment_input${index}`);
  posts[index]['comments'].push(commentInput.value);
  posts[index]['commentProfile'].push(myProfileName);
  posts[index]['commentTime'].push(1);
  showPostContent();
}
