const wishContainer = document.getElementById('wish-container');
const contentContainer = document.getElementById('content-container');

function wish() {
  const nameInput = document.getElementById('name-input');
  const nameSpace = document.getElementById('name-space');

  contentContainer.style.display = 'none';
  nameSpace.innerHTML = nameInput.value;
  wishContainer.style.display = 'flex';
}

function closeWish() {
  wishContainer.style.display = 'none';
  contentContainer.style.display = 'flex';
}
