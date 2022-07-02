chrome.runtime.onInstalled.addListener(() => {
});

chrome.runtime.onMessage.addListener((message, callback) => {
  if (message.data === "changeColor") {
    /*chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      function: setPageBackgroundColor,
    });*/
  };
});

