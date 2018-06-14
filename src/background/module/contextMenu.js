
// The onClicked callback function.
import onCH from "./onCH.js";
const i18n = chrome.i18n.getMessage,
SetCM = e => {
  let cId = "VNS_mrWD"
  ,menuCreate = chrome.contextMenus.create
  ,menu = menuCreate({
    "title": i18n(cId),
    "contexts": ["all"],
    "id": cId
  })
  ,pMenu = ["Panels", "Source","Html","Call","Cmd"];

  for(let i = 0; i<pMenu.length; i++){
    menuCreate({
      "title": i18n(`${menu}_${pMenu[i]}`),
      "parentId": menu,
      "contexts": ["all"],
      "id": `${menu}_${pMenu[i]}`
    });
  }

};

chrome.contextMenus.onClicked.addListener(onCH);

export default SetCM;