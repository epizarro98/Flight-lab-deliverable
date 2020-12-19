const dbConfig = require('./config/db.config')
const Flight = require('./models/flight.model')


const db = require("./models");
const Airport = db.airport;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  let flight1 = new Flight({
    from: 'CDG France',
    to: 'JFK NY, USA',
    airline: 'American Airlines'
  })
  flight1.save()
  console.log('Flight saved', flight1)

  let flight2 = new Flight({
    from: 'Heathrow UK',
    to: 'JFK NY, USA',
    airline: 'British Airways'
  })
  flight2.save()
  console.log('Flight saved', flight2)

  let airport1 = new Airport({
    name: 'JFK',
    country: 'USA',
    terminals: [],
    opened: 1990
  })

    //new terimanil, pass all the variables in the model 
​
const terminal1 = new Terminal ({
  name:"JFK",
  capacity: "234324"
})
//pushing flights 1 and 2 into flights 
terminal1.flights.push(flight1);
terminal1.flights.push(flight2);
terminal1.save()
console.log("terminal saved", terminal1)

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

airport.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport