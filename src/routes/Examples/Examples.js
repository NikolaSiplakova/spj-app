import TopBar from "common/TopBar/TopBar"
import CardDeck from "./CardDeck/CardDeck"
import { ExamplesEquation } from "constants/examples"

const Examples = (props) => {
  return (
    <div>
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <CardDeck examples={ExamplesEquation}/>
    </div>
  )
}

export default Examples
