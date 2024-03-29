const bookShelf = {
  authors: ["Бернард Корнуэлл", "Роберт Шекли"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
bookShelf.addAuthor("Ли Танит");
console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]
