import './App.css'

//denna JSON befinner sig på class-level/tsx-level. 
// Denna const tillhör allt här.
// Alla olika funktioner kan se dessa band.
const bandNames = [
  {
    name: 'Dire Straits', 
    members: 'Mark Knopfler, David Knopfler, John Illsley, Pick Withers', 
    formed: 1977},
  {
    name: 'R.E.M', 
    members: 'Michael Stripe, Peter Buck, Mike Mills, Bill Berry', 
    formed: 1980},
  {
    name: 'Collective Soul', 
    members: 'Ed Roland, Dean Roland, David Neal, Ross Childress, Shane Evans', 
    formed: 1992},
  {
    name: 'Traffic', 
    members: 'Steve Winwood, Jim Capaldi, Chris Wood, Dave Mason', 
    formed: 1967}
];

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>;
}

//Individuellt band-object
//De tre delar av information som skapar ett "Band"
//tar emot 3 properties
function Band({name, members, formed} : {name: string; members: string; formed: number;}){

  return (
    <>
    <img />
    <h2>{name}</h2>
    <h3>Original Members: {members}</h3>
    <h3>Formed: {formed}</h3>
    </>
  );
}

//Här finns loopen som målar upp bandlistan
//BandList funktionen måste kunna avgöra vilket band som ska skrivas ut från listan
// "..." = Spread operator
function BandList() {
  return (
  <>
  {
    bandNames.map((singleBand) => (
      <Band {...singleBand} />
    ))
  }
  </>
);  
}

function App() {
 return (
    <>
      <Welcome/>
      <BandList/>    
    </>
  )
}

export default App
