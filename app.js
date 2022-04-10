const reviewsArr = document.querySelector('#reviews-array');
const reviewText = document.querySelector('#review-text');
const reviewForm = document.querySelector('#review-form');

function createReview(text) {
  const reviewBody = `
  <article class="review">
    <div class="image-icon">
      <img
        class="profile-image"
        src="https://variety.com/wp-content/uploads/2017/09/gordon_ramsay.png?w=1024"
        alt="profile-image"
      />
      <p><b>Gordon Ramsay</b></p>
    </div>
    <p>
      ${text}
    </p>
  </article>`;

  return reviewBody;
}

reviewForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newReview = createReview(reviewText.value);
  reviewsArr.innerHTML = reviewsArr.innerHTML + newReview;
  reviewText.value = '';
});
