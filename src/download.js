const { remote } = require("electron");
const fs = require("fs");
const { dialog } = remote;
function $(e) {
  return document.querySelector(e);
}
$("#save").onclick = function() {
  dialog
    .showOpenDialog({
      title: "保存的文件夹",
      buttonLabel: "biubiubiu!!!",
      defaultPath: "./模板",
      properties: ["openDirectory"]
    })
    .then(res => {
      console.log(res);
      $("#path").innerHTML = res.filePaths[0];
      // fs.writeFileSync(res.filePath, "公众号：霸道的程序猿");
    });
};
