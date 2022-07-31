import React from "react"
import { ReactComponent as UploadIcon } from "../../../../../../../../../../styles/icons/upload.svg"
import classes from "./FileImporter.module.scss"
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
    <label for="inputTag" className={classes["importer__label"]}>
      <UploadIcon title={"Nahrať program"} />
      <input
        id="inputTag"
        type="file"
        onChange={showFile}
        className={classes["importer"]}
      />
    </label>
  )
}

export default FileImporter
