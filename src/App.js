import React from "react";
import "./styles.css";
import img from "../images/white.png";
const cardArray = [
  {
    name: "LebronAndKobe",
    img:
      "https://i.pinimg.com/236x/85/f3/9d/85f39d28feba30603bb92612c5d8b3a1.jpg"
  },
  {
    name: "IrvingAndLebron",
    img:
      "https://i.pinimg.com/236x/a9/b2/60/a9b26061c42a4300b19f29f62af8f2bc.jpg"
  },
  {
    name: "CurryAndLebron",
    img:
      "https://i.pinimg.com/236x/cc/c6/6a/ccc66a8ed640e15dc2f5204e753c3c00.jpg"
  },
  {
    name: "LebronAndKawhi",
    img:
      "https://i.pinimg.com/236x/97/de/e7/97dee7a8e5dccace6af76851ffb297a8.jpg"
  },
  {
    name: "Jordan",
    img:
      "https://i.pinimg.com/236x/7f/e1/05/7fe105798b9a59d1dc44ab8642f2df29.jpg"
  },
  {
    name: "Rose",
    img:
      "https://i.pinimg.com/236x/78/09/8d/78098ddfc2befe0d7dcbac6f672dfa1b.jpg"
  },
  {
    name: "LebronAndKobe",
    img:
      "https://i.pinimg.com/236x/85/f3/9d/85f39d28feba30603bb92612c5d8b3a1.jpg"
  },
  {
    name: "IrvingAndLebron",
    img:
      "https://i.pinimg.com/236x/a9/b2/60/a9b26061c42a4300b19f29f62af8f2bc.jpg"
  },
  {
    name: "CurryAndLebron",
    img:
      "https://i.pinimg.com/236x/cc/c6/6a/ccc66a8ed640e15dc2f5204e753c3c00.jpg"
  },
  {
    name: "LebronAndKawhi",
    img:
      "https://i.pinimg.com/236x/97/de/e7/97dee7a8e5dccace6af76851ffb297a8.jpg"
  },
  {
    name: "Jordan",
    img:
      "https://i.pinimg.com/236x/7f/e1/05/7fe105798b9a59d1dc44ab8642f2df29.jpg"
  },
  {
    name: "Rose",
    img:
      "https://i.pinimg.com/236x/78/09/8d/78098ddfc2befe0d7dcbac6f672dfa1b.jpg"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardArray,
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
      resultDisplay: 0,
      Attempts: 0,
      displayStart: "flex"
    };
    this.flipCard = this.flipCard.bind(this);
    this.checkForMatch = this.checkForMatch.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  componentDidMount() {
    this.setState({
      cards: this.state.cards.sort(() => 0.5 - Math.random())
    });
    const css = document.styleSheets[0].cssRules;
    const sizeWindowWidth = window.screen.width > 992 ? "25vw" : "90vw";
    const sizeWindowHeight = window.screen.width > 992 ? "70vh" : "80vh";
    function viewportToPixels(value, value1) {
      let VWidth = value.match(/([0-9\.]+)(vh|vw)/);
      let qW = Number(VWidth[1]);
      let sideW =
        window[["innerHeight", "innerWidth"][["vh", "vw"].indexOf(VWidth[2])]];
      let VHeight = value1.match(/([0-9\.]+)(vh|vw)/);
      let qH = Number(VHeight[1]);
      let sideH =
        window[["innerHeight", "innerWidth"][["vh", "vw"].indexOf(VHeight[2])]];
      let resultH = (sideH * qH) / 100 - 18;
      let resultW = (sideW * qW) / 100 - 18;
      for (let i = 0; i < css.length; i++) {
        if (css[i]["selectorText"] === ".grid img") {
          css[i].style.width = resultW / 3 + "px";
          css[i].style.height = resultH / 4 + "px";
        }
      }

      return;
    }
    viewportToPixels(sizeWindowWidth, sizeWindowHeight);
  }
  checkForMatch() {
    console.log(this.state.cardsWon);
    let cards = document.querySelectorAll("img");
    const optionOneId = this.state.cardsChosenId[0];
    const optionTwoId = this.state.cardsChosenId[1];
    if (optionOneId === optionTwoId) {
      /*
      Si estos dos valores son iguales cambia el  src 
      de la img y envia un alert diciendo que se pùlso el mismo cuadrito
      */
      cards[optionOneId].src =
        "https://i.pinimg.com/236x/2a/33/32/2a33324bdb838b8f9c115cd9f28331af.jpg";

      // alert("You have clicked the same image!");
    } else if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      /*
  Si son iguales estos dos valores que fueron pucheados en la function anterior
  el hace lo siguiente:
  *Al img con la posicion del valor de la variable optionOneId y optionTwoId le cambia el src 
  a una imagen en blanco y remueve el eventListener
  *Por ultimo puschea a el array cardsWon el valor de cardschosen
      */
      // alert("You found a match");
      if (this.state.Attempts === 1) {
        this.setState({
          resultDisplay: this.state.resultDisplay + 5
        });
      } else if (this.state.Attempts === 2) {
        this.setState({
          resultDisplay: this.state.resultDisplay + 3
        });
      } else if (this.state.Attempts >= 3) {
        this.setState({
          resultDisplay: this.state.resultDisplay + 1
        });
      }
      cards[optionOneId].src =
        "https://uploads.codesandbox.io/uploads/user/f6e86d6a-b63b-4a3b-8c9e-0ce0fd7b9504/xRYM-white.png";
      cards[optionTwoId].src =
        "https://uploads.codesandbox.io/uploads/user/f6e86d6a-b63b-4a3b-8c9e-0ce0fd7b9504/xRYM-white.png";

      this.setState({
        cardsWon: this.state.cardsWon.concat(this.state.cardsChosen),
        Attempts: 0
      });
    } else {
      /*Si no son iguales las cardsChosen le coloca nuevamente el src inicial
       */
      cards[optionOneId].src =
        "https://i.pinimg.com/236x/2a/33/32/2a33324bdb838b8f9c115cd9f28331af.jpg";
      cards[optionTwoId].src =
        "https://i.pinimg.com/236x/2a/33/32/2a33324bdb838b8f9c115cd9f28331af.jpg";
      // alert("Sorry, try again");
    }

    this.setState({
      cardsChosen: [],
      cardsChosenId: []
    });
    if (this.state.cardsWon.length / 2 === this.state.cards.length / 2) {
      /*
      AL entrar aqui agrega el texto de resultDisplay que ya gano el juego

      */
      this.setState({
        resultDisplay:
          "Congratulations your score was " + this.state.resultDisplay
      });
    }
  }

  flipCard(e) {
    /*
*En este caso this es el elemento html que fue pulsado
*Se define cardId que obtiene el valor del aributo indicado que 
en este caso es data-id
*Pushchea en cardsChosen el nombre de el cuadrito seleccionado
*Pushchea en cardsChosenId el valor de cardId que es el valor del atributo data-id
*Luego envia al src del elemento la imagen que esta en el objeto cardArray segun la posicion 
del cuadro seleccionado
*Si cardChosen.length es igual a 2 dispara una funcion en 500 milisegundos que 
chequeara los dos cuadritos seleccionado

    */
    if (
      e.target.src ===
        "https://uploads.codesandbox.io/uploads/user/f6e86d6a-b63b-4a3b-8c9e-0ce0fd7b9504/xRYM-white.png" ||
      this.state.displayStart === "flex"
    ) {
      return;
    }
    let cardId = e.target.alt;
    this.setState({
      cardsChosen: this.state.cardsChosen.concat(cardArray[cardId].name),
      cardsChosenId: this.state.cardsChosenId.concat(cardId)
    });
    e.target.src = cardArray[cardId].img;
    if (this.state.cardsChosen.length === 1) {
      this.setState({
        Attempts: this.state.Attempts + 1
      });
      setTimeout(this.checkForMatch, 1000);
    }
  }
  resetGame() {
    let cards = document.querySelectorAll("img");
    for (let i = 0; i < cards.length; i++) {
      cards[i].src =
        "https://i.pinimg.com/236x/2a/33/32/2a33324bdb838b8f9c115cd9f28331af.jpg";
    }
    this.setState({
      cards: this.state.cards.sort(() => 0.5 - Math.random()),
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
      resultDisplay: 0
    });
    // console.log(cards);
  }
  startGame() {
    this.setState({
      displayStart: "none"
    });
  }
  render() {
    // console.log({ img });
    const cards = this.state.cards.map((val, i) => {
      return (
        <img
          alt={i}
          key={i}
          src="https://i.pinimg.com/236x/2a/33/32/2a33324bdb838b8f9c115cd9f28331af.jpg"
          onClick={this.flipCard}
        />
      );
    });
    return (
      <div className="app">
        <div id="game">
          <div
            id="scoreExplanation"
            style={{ display: this.state.displayStart }}
            className="centered"
          >
            <div>
              <ul>
                <li>If you get it in one try = 5 point</li>
                <li>If you get it in two try = 3 point</li>
                <li>If you get it in three attempts or more = 1 point</li>
              </ul>
              <button className="myButton" onClick={this.startGame}>
                Start
              </button>
            </div>
          </div>
          <h3>Score: {this.state.resultDisplay}</h3>
          <div className="grid" ref={div => (this.grid = div)}>
            {cards}
          </div>
          <div>
            <button className="myButton" onClick={this.resetGame}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
