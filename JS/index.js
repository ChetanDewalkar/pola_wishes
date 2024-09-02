const wishContainer = document.getElementById('wish-container');
const contentContainer = document.getElementById('content-container');
const nameInput = document.getElementById('name-input');

function wish() {
  const nameSpace = document.getElementById('name-space');

  if (nameInput.value.trim().length == 0) {
    const message = document.getElementById('message');
    message.innerHTML = 'Please enter name!';
    message.style.color = 'red';
    message.style.display = 'block';
  } else {
    contentContainer.style.display = 'none';
    nameSpace.innerHTML = nameInput.value;
    wishContainer.style.display = 'flex';
    wishContainer.className = 'animate__animated animate__zoomIn ';
  }
}

function closeWish() {
  contentContainer.style.display = 'flex';
  wishContainer.style.display = 'none';
  nameInput.value = '';
  message.style.display = 'none';
}
