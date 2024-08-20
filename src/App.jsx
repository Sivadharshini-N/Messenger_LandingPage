import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Highlight from './components/Highlight'
import Mission from './components/Mission'
import H3Container from './components/H3Container'
import PtagContainer from './components/PtagContainer'
import Footer from './components/Footer'

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
        <Mission /><br />
        <div className="container-fluid" >
          <div className="row d-flex  justify-content-center align-items-center py-4">
            <div className="col-md-6 col-sm-12  h-100  ">
              <H3Container content={"Collect your components under variant sections for developers to access them during  development."}></H3Container>

            </div>{" "}
            <div className="col-md-6 col-sm-12 rounded bg-white">
              <PtagContainer content={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequit."}>
              </PtagContainer>

            </div>
          </div>
        </div>


       
      </div><br /><br /><br />
      <div className="container-fluid bg-white">
        <br />
            <Footer></Footer>
        </div>
    </div>


  )
}

export default App
