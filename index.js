function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Возвращаем fetch()
        .then(response => response.json()) 
        .then(data => renderBooks(data))
        .catch(error => console.error("Ошибка запроса:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main') || document.body; // Проверяем наличие <main>
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Используем textContent
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});