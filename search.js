const searchForm = document.querySelector('#searchForm');
const searchBar = document.querySelector('#searchBar');
const citizenId = document.querySelector('#citizenId');
const citizenIdForm = document.querySelector('#citizenIdForm');
const submitBtn = document.querySelector('#submitBtn');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const inputValue = searchBar.value;
  citizenId.textContent = inputValue;
  localStorage.setItem('myInputValue', inputValue);
});

submitBtn.addEventListener('click', (event) => {
    const inputValue = searchBar.value;
    citizenId.textContent = inputValue;
    localStorage.setItem('myInputValue', inputValue);
});
