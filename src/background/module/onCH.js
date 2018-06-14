const onCH  = (info, tab) => {
    // let load = chrome.downloads.download({
    //   url: "http://mzmuz.ru/uploads/files/muz/Sean_Paul_and_David_Guetta_feat._Becky_G_-_Mad_Love_[].mp3",
    //   filename: 'Sean_Paul_and_David_Guetta_feat._Becky_G_-_Mad_Love_[].mp3',
    //   conflictAction: "overwrite"
    // }, cal => console.log(cal))
    // console.log(load)
      console.dir(info);
      console.dir(tab);
      
      // chrome.windows.create({ url: url, width: 520, height: 660 });
};
export default onCH;