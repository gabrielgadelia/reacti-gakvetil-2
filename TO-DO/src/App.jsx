function App() {

    const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];

  const fruitlist = fruits.map((fruit) => (<li> fruit {fruit.name} -  has {fruit.calories} calories</li>));

return <ol>{fruitlist}</ol>;
}

export default App
    