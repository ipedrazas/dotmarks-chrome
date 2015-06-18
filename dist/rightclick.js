// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {

  console.log(info.linkUrl);
  var o = {};
  o['url'] = info.linkUrl;
  o['source'] = 'chrome-r';
  o['username'] = 'ivan';

  sendDotMark(o);
  // title of the current page
   // console.log(tab.title);
}

function sendDotMark(dotmark){
     // The URL to POST our data to
    var postUrl = 'http://api.dotmarks.net/dotmarks';

    // Set up an asynchronous AJAX POST request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', postUrl, true);
    // Set correct header for form data
    xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Basic ' + token);


    xhr.send(JSON.stringify(dotmark));
}

var id = chrome.contextMenus.create({"title": "Add to dotMarks", "contexts":["link"],
                                       "onclick": genericOnClick});


