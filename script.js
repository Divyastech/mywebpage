const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YOU GOT ME";
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjkwaTkxeXBpMGVoZnU3aXV0eGVrbW1uMXB6cDQ3ZWljZHV1bjRiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yc2pHdAoxVOrJ2m5Ha/200.webp";
});

// Make the no button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Generate random positions
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Move the no button to random positions
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
