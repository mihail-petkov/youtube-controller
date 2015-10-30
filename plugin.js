document.addEventListener('DOMContentLoaded', function() {
  chrome.commands.onCommand.addListener(function (command) {
    run(command);
  });
}, false);

function run(command) {
  chrome.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; i++) {
      var tabUrl = tabs[i].url;
      var youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      var isYouTubeLink = tabUrl.match(youtubeRegex);
      if (tabUrl && tabUrl.indexOf('list=') !== -1) {
        chrome.tabs.executeScript(tabs[i].id, { 'code' : 'var command = "' + command + '";' });
        chrome.tabs.executeScript(tabs[i].id, { 'file' : 'execute.js' });
      }
    }
  });
}