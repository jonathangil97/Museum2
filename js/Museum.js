class Museum {
  constructor() {
    this.cups = [];
  }
  getCups() {
    return this.cups;
  }
  setCups(cups) {
    this.cups = cups;
  }
  expositionGallery() {
    let cup1 = new Cup(
      "Conmebol libertadores",
      "This is the conmebol libertadores currently won by Palameiras from Brazil.",
      5000
    );
    this.cups.push(cup1);

    let cup2 = new Cup(
      "American cup",
      "This is the Copa America currently won by the Argentina team.",
      7000
    );
    this.cups.push(cup2);

    let cup3 = new Cup(
      "World cup",
      "This is the world cup currently won by Francia",
      15000
    );
    this.cups.push(cup3);

    let cup4 = new Cup(
      "Champions cup",
      "This is the champions league currently win by Chelsea",
      10000
    );
    this.cups.push(cup4);

    let cup5 = new Cup(
      "Clubs world cup",
      "This is the clubs world cup currently win by Bayern Munich",
      7000
    );
    this.cups.push(cup5);
  }
}
