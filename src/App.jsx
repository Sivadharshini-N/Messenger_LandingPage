import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Highlight from './components/Highlight'
import Mission from './components/Mission'

function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Register /><br />
        <div className="container-fluid bg-white rounded "><br />
          <h3>Highlight Features</h3><br />
          <div className="text-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-2 col-sm-12">
                <Highlight style={{ backgroundColor: "#FFCC45" }} heading={"heading 6"} />


              </div>
              <div className="col-md-2 col-sm-12">
                <Highlight style={{ backgroundColor: "#34B2FE" }} heading={"heading 6"} />


              </div>
              <div className="col-md-2 col-sm-12">
                <Highlight style={{ backgroundColor: "#3365FF" }} heading={"heading 6"} />
              </div>
              <div className="col-md-2 col-sm-12">
                <Highlight style={{ backgroundColor: "#F7641F" }} heading={"heading 6"} />
              </div>
            </div>
          </div>

        </div><br /><br />
        <Mission/>
      </div>
    </div>


  )
}

export default App
