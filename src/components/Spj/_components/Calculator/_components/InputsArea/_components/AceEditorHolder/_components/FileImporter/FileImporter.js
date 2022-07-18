import React from "react"

const FileImporter = (props) => {
  const { setJaneCode } = props

  const showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var file = document.querySelector("input[type=file]").files[0]
      var reader = new FileReader()

      var textFile = /text.*/

      if (file.type.match(textFile)) {
        reader.onload = function (event) {
          setJaneCode(event.target.result)
        }
      } else {
      }
      reader.readAsText(file)
    } else {
    }
  }

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default FileImporter
