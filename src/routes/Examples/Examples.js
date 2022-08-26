import TopBar from "common/TopBar/TopBar"

const Examples = (props) => {
  return (
    <div>
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <div>examples</div>
    </div>
  )
}

export default Examples
