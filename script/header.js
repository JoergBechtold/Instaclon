/* Add new Post */

function addNewPost() {
  document.getElementById('body').classList.add('no-scroll');
  document.getElementById('new_post_container').style.display = 'flex';
}

function removeNewPostContainer() {
  document.getElementById('body').classList.remove('no-scroll');
  document.getElementById('new_post_container').style.display = 'none';
}

function doNotClose(event) {
  event.stopPropagation();
}

function closeNewPostContainer() {
  new_post_container.style.display = 'none';
  document.getElementById('body').classList.remove('no-scroll');
}
