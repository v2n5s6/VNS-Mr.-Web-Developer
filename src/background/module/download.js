const Download = e => {
    const url = 
    "http://mzmuz.ru/uploads/files/muz/Sean_Paul_and_David_Guetta_feat._Becky_G_-_Mad_Love_[].mp3";
    if(chrome.downloads.setShelfEnabled)
        chrome.downloads.setShelfEnabled(false);
    const pollProgress = () => {
        chrome.browserAction.setIcon({path: '../img/vns-i128.png'});
    }
    chrome.downloads.onCreated.addListener(item => {
        console.log(item)
        pollProgress();
    });
};

export default Download;
