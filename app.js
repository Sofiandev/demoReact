// pour créer un composant React sans JSX
const helloworld = React.createElement(
  "h1",
  { className: "ma-classe" },
  "Helloword"
);

// avec JSX
const helloworld2 = <h1>Bonjour le monde!</h1>;

// composant avec une fonction, à noter on l'appelle avec la syntaxe <Component/>
// const Helloworld3 = function () {
//   return <h1>Bonjour le monde!</h1>;
// };
const Helloworld3 = (props) => <h1>{props.content}</h1>;

class Helloworld4 extends React.Component {
  render() {
    return <h1>Bonjour le monde!</h1>;
  }
}

const Product = (props) => (
  <div>
    <h2>{props.details.name}</h2>
    <span>{props.details.price}</span>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Burger", price: 5.95 },
        { id: 2, name: "Nuggets", price: 9.1 },
        { id: 3, name: "CBO", price: 12.1 },
        { id: 4, name: "Coca bien frais", price: 3.49 },
      ],
    };
  }

  render() {
    const listProducts = this.state.products.map((product, index) => (
      <Product key={index} details={product} />
    ));
    return (
      <div>
        <h1>
          Bonjour le monde
          {listProducts}
        </h1>
      </div>
    );
  }
}
// On rend l'élément dans le DOM via la méthode render()
// ReactDOM.render(<Helloworld4 />, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));
//syntaxe d'un composant avec < />
