import './App.css'

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>;
}

function BandList() {
  const bandNames = ['Dire straits', 'R.E.M', 'Collective Soul'];
  
return (
  <>
    <h2>{bandNames[0]}</h2>
    <h2>{bandNames[1]}</h2>
    <h2>{bandNames[2]}</h2>
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
