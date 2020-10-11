var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

const fileName = "messenger.css";
const defaultMessageListHeight = "40";
const defaultFolderTreeHeight = "25";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://MonterailOverlay/content/skin/" + fileName);


  if (Services.appinfo.OS == "WINNT") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/win/skin/" + fileName);
  } else if (Services.appinfo.OS == "Linux") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/linux/skin/" + fileName);
  } else if (Services.appinfo.OS == "Darwin") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/mac/skin/" + fileName);
  }

  var gettingItem = WL.messenger.storage.sync.get(['messageListHeight', 'folderTreeHeight']);
  gettingItem.then((res) => {
    document.querySelector(':root').style.setProperty('--message-list-row-height', (res.messageListHeight || defaultMessageListHeight) + "px");
    document.querySelector(':root').style.setProperty('--folder-tree-row-height', (res.folderTreeHeight || defaultFolderTreeHeight) + "px");
  });
}

function onUnload(deactivatedWhileWindowOpen) {
}