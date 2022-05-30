/**
  Code to create a file at runTime in angular/react/javascript 
  and download it in the browser with click of a button
  * Using the error first approach in the below code
 */
/**
 * @param  {fileData, fileName}
 * @returns the dile to be downloaded in browser
 */
const saveFileonClick = (...file) => {
  if (file.length !== 2) {
    console.log("Please pass the Required Number of parameter to the function");
    // return;
  }
  let runTimeBlob = new Blob([file[0]], { type: "text/plain" });
  let _event = document.createEvent("MouseEvents");
  let _aTag = document.createElement("a");

  // For working the code in Browser
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(runTimeBlob, file[1]);
  } else {
    let _event = document.createEvent("MouseEvents");
    let _aTag = document.createElement("a");

    // Driver Code for a tag
    _aTag.download = file[1];
    _aTag.href = window.URL.createObjectURL(runTimeBlob);
    _aTag.dataset.downloadurl = ["text/plain", _aTag.download, _aTag.href].join(
      ":"
    );
    // Driver Code for event
    _event.initEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    _aTag.dispatchEvent(_event);
  }
};

/**
 * Driver code to work with saveFile on click
 * Below Included is HTML code for reference
 * <button type="button" onclick="DriverCode()">Create and Save File</button>
 */
const DriverCode = () => {
  let fileData = "I am text file data";
  let fileName = "pro.cmd";
  saveFileonClick(fileData, fileName);
};

/**
 * TypeScript code for reference
 */
function runTimeFile(fileData, fileName) {
  let runTimeBlob = new Blob([fileData], { type: "text/plain" });
  var e = document.createEvent("MouseEvents");
  var a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(runTimeBlob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initEvent("click", true, false);
  a.dispatchEvent(e);
}
