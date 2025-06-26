//! функция чтоб открывать можно было все кнопки

// const items = document.querySelectorAll('.accordion-item');

// items.forEach(item => {
//   const header = item.querySelector('.accordion-header');
//   const content = item.querySelector('.accordion-content');

//   header.addEventListener('click', () => {
//     const isOpen = item.classList.contains('active');

//     if (isOpen) {
//       content.style.maxHeight = null;
//       item.classList.remove('active');
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       item.classList.add('active');
//     }
//   });
// });



//! функция чтоб можно было за раз открывать только 1 кнопку

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    //! Закрываем все блоки

    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.maxHeight = null;
    });

    //! Если текущий блок был закрыт — открываем

    if (!isOpen) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});