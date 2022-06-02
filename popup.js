// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

   chrome.tabs.reload(tab.id, {}, null);

 chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  //chrome.storage.sync.get("color", ({ color }) => {
  //  document.body.style.backgroundColor = color;
  //});
  const cel_opal = document.evaluate("/html/body/div/section[2]/div/div[2]/div[2]/div[1]/div[2]/div/select/option[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const kurier = document.evaluate("/html/body/div/section[2]/div/div[2]/div[2]/div[1]/form/div[3]/div[2]/div/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const przejdz_do_kasy = document.evaluate("/html/body/div/section[2]/div/div[2]/div[2]/div[2]/div[2]/div/form/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const skopiuj_z_adresu_zamieszkania = document.evaluate("/html/body/div[1]/div[3]/div[2]/section[2]/div/div/form/div[1]/div/div[2]/div[6]/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const przelew = document.evaluate("/html/body/div[1]/div[3]/div[2]/section[2]/div/div/form/div[3]/div[2]/div/div[2]/div/input[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  const regulamin = document.evaluate("/html/body/div[1]/div[3]/div[2]/section[2]/div/div/form/div[3]/div[3]/div[1]/div[1]/div/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
}


