let trainingData = [
   {
     inputs: [0,1],
     targets: [1]
   },
   {
     inputs: [1,0],
     targets: [1]
   },
   {
     inputs: [1,1],
     targets: [0]
   },
   {
     inputs: [0,0],
     targets: [0]
   }
];

function setup() {
  let nn = NeuralNetwork(2,2,1);
  let data = random(trainingData);
  // nn.train(data.inputs, data.targets);
  for (var i = 0; i < 100000; i++) {
    let data = random(trainingData);
    nn.train(data.inputs, data.targets);
  }

  console.log (`checking...`);
  console.log(nn.feedforward([1,0]));
  console.log(nn.feedforward([0,1]));
  console.log(nn.feedforward([0,0]));
  console.log(nn.feedforward([1,1]));

  createCanvas(400,400);


  // for testing matrix math
  // let m1 = Matrix(2,2, true);
  // console.table(m1.data);
  // let m2 = Matrix(2,2, true);
  // console.table(m2.data);
  // let result = m1.subtract(m2);
  // console.table(result.data);
}
function draw() {

}
