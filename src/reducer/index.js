const INITIAL_STATE = {
  currentCardIndex: 0,
  isFront: true,
  cards: [
    {
      front: "I HATE PROGRAMMING....",
      back: "IT WORKS?!(I LOVE PROGRAMMING!)"
    }, {
      front: "Programmer(noun)",
      back: "An organism that turns caffeine into software...."
    }, {
      front: "(2b || !2b)",
      back: "That IS the question.."
    }, {
      front: "Life Would Be Much Easier...",
      back: "If I had the source code"
    }, {
      front: "Without YOU fellow classmates...",
      back: "My world is NULL!"
    }, {
      front: "Didn't sleep for two days..",
      back: "Thanks, semicolon;;;;;;;;;;"
    }

  ]
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FLIP":
      if (state.isFront === true) {
        return Object.assign({}, state, {isFront: false});
      } else {
        return Object.assign({}, state, {isFront: true});
      }

    case "PREVIOUS":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex - 1
      });

    case "NEXT":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex + 1
      });

    case "SHUFFLE":
      const flashCards = state.cards;
      const newFlashCards = flashCards.map((card) => (card));

      let shuffleCards = [];

      function selectCard(newFlashCards) {
        let random = newFlashCards[Math.floor(Math.random() * newFlashCards.length)];
        let removeCard = random;
        let index = newFlashCards.indexOf(removeCard);
        shuffleCards.push(removeCard);
        newFlashCards.splice(index, 1);
        return newFlashCards;
      }

      selectCard(newFlashCards);
      selectCard(newFlashCards);
      selectCard(newFlashCards);
      selectCard(newFlashCards);
      selectCard(newFlashCards);
      selectCard(newFlashCards);

      return Object.assign({}, state, {
        currentCardIndex: 0,
        cards: shuffleCards
      });

    default:
      return state;

  }
}
