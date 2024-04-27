import ChessBoard from './SVG/ChessBoard'
import Smiley from './SVG/Smiley'

function App() {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }
    }>
      <Smiley/>
      <br />
      <ChessBoard/>
    </div>
  )
}

export default App
