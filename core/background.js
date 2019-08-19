/*
 * onInstalled listeners catch events in these situations:
 * when the extension is first installed,
 * when the extension is updated to a new version,
 * and when Chrome is updated to a new version.
 */

chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.setBadgeBackgroundColor({ color: "#ef5a4b" });

  //declarativeContent rules and pagesStatesMatcher
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes: ["http", "https"] }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
