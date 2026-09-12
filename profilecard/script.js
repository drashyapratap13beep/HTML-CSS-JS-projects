const form = document.getElementById('profile-form');
const nameInput = document.getElementById('name-area');
const profileUrlInput = document.getElementById('profile-url');
const professionInput = document.getElementById('profession-area');
const bioInput = document.getElementById('text-area');

const profileImage = document.getElementById('profile-image');
const cardName = document.getElementById('card-name');
const cardDob = document.getElementById('card-dob');
const cardProfession = document.getElementById('card-profession');
const cardBio = document.getElementById('card-bio');

const defaultImage = profileImage.src;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim() || 'Unknown User';
  const profession = professionInput.value.trim() || 'Profession';
  const bio = bioInput.value.trim() || 'No bio provided.';
  const imageUrl = profileUrlInput.value.trim();

  cardName.textContent = name;
  cardProfession.textContent = profession;
  cardBio.textContent = bio;

  if (imageUrl) {
    profileImage.src = imageUrl;
  } else {
    profileImage.src = defaultImage;
  }

  if (cardDob) {
    cardDob.textContent = cardDob.textContent || 'No DOB';
  }
});
