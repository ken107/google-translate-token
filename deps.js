
exports.got = function(url) {
  return new Promise(function(fulfill, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) fulfill({body: xhr.responseText});
        else reject(new Error(xhr.responseText));
      }
    };
    xhr.send(null);
  })
}

exports.Configstore = function() {
  this.get = function(name) {
    return localStorage.getItem(name);
  }
  this.set = function(name, value) {
    localStorage.setItem(name, value);
  }
}
