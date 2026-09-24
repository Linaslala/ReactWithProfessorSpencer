import './App.css'

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>;
}

function BandList() {
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
      formed: 1992}
  ];
  
return (
  <>
    <h2>{bandNames[0].name}</h2>
    <h2>{bandNames[1].name}</h2>
    <h2>{bandNames[2].name}</h2>
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
