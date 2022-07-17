 setInterval(function() {
  // Links
  let orderHistory = document.querySelector('.big-button[href="/orders"]');
  let addresses = document.querySelector('.big-button[href="/addresses"]');
  let accountEdit = document.querySelector('.big-button[href="/profile"]');
  if (orderHistory && !orderHistory.classList.contains('active')) {
    orderHistory.click();
  } else if (addresses && !addresses.classList.contains('active')) {
    addresses.click();
  } else if (accountEdit && !accountEdit.classList.contains('active')) {
    accountEdit.click();
  }
}, Math.random() * 60000 * 30);
 
