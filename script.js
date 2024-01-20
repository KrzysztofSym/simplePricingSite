
// document.addEventListener('DOMContentLoaded', function () {
//     const btns = document.querySelectorAll('.select');
    
//     btns.forEach((btn, index) => {
//       btn.addEventListener('click', function () {
//         const card = document.querySelectorAll('.card')[index];
//         card.classList.toggle('selected');
//         btn.classList.toggle('active');
//       });
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.select');
  
  btns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      const cards = document.querySelectorAll('.card');
      
      // Remove 'selected' class from all cards
      cards.forEach(card => {
        card.classList.remove('selected');
      });

      // Add 'selected' class to the clicked card
      const card = cards[index];
      card.classList.add('selected');

      // Remove 'active' class from all buttons
      btns.forEach(b => {
        b.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      btn.classList.add('active');
    });
  });
});
