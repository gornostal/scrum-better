$(function () {
  const participants = window.scrum_better_config.participants;
  const cards = window.scrum_better_config.cards;
  shuffleArray(participants);

  (function showCards() {
    const cardHtml = `
      <div class="card">
        <div class="flipper">
          <div class="f">#name</div>
          <div class="b contentbox">
            <div class="padded">
              <h2>#title</h2>
              #description
            </div>
          </div>
        </div>
      </div>`;

    let cardsHtml = "";
    shuffleArray(cards);
    const abc = alphabet().reverse();
    cards.forEach((card) => {
      cardsHtml += cardHtml
        .replace(/#name/, abc.pop())
        .replace("#title", card.title)
        .replace("#description", card.description);
    });
    $(".cards").html(cardsHtml);
  })();

  // Toggle start screen cards
  $('.cards .card:not(".twist")').on("click", function (e) {
    $(this)
      .toggleClass("active")
      .siblings()
      .not(".twist")
      .removeClass("active");
  });

  $("#roll-the-dice").on("click", () => {
    const name = participants.pop();
    $('.random-person').show();
    $(".person-name").text(name);
  });
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function alphabet() {
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
}
