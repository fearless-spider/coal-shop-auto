// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
//.onload = function() {
//  console.log('aaa');
//};
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("DOMContentLoaded", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: () => {
          setInterval(function() {
  // Links
  let orderHistory = document.querySelector('.big-button[href="/orders"]');
  let addresses = document.querySelector('.big-button[href="/addresses"]');
  let accountEdit = document.querySelector('.big-button[href="/profile"]');
  if (!orderHistory.classList.contains('active')) {
    orderHistory.click();
  } else if (!addresses.classList.contains('active')) {
    addresses.click();
  } else if (!accountEdit.classList.contains('active')) {
    accountEdit.click();
  }
          }, 3000);
        }
    })
   //chrome.tabs.reload(tab.id, {}, null);
    //chrome.tabs.sendMessage(tab.id, {data: "changeColor"}, function(response) {});
  //chrome.runtime.sendMessage({data:"changeColor", tabId:tab.id});
});
//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//    sendResponse(setPageBackgroundColor());
//});
// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  // Links
  let orderHistory = document.querySelector('[href="/orders"]');
  let addresses = document.querySelector('[href="/addresses"]');
  let accountEdit = document.querySelector('[href="/profile"]');

  if (!orderHistory.classList.contains('active')) {
    orderHistory.click();
  } else if (!addresses.classList.contains('active')) {
    addresses.click();
  } else if (!accountEdit.classList.contains('active')) {
    accountEdit.click();
  }
}


