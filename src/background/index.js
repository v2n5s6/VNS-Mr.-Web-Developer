import SetCM from "./module/contextMenu.js";
import Download from "./module/download.js";

const init = e => {
    console.log(e);
    SetCM(e);
    Download(e);
};

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(init);
