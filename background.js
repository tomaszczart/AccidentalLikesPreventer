'use strict';

chrome.runtime.onInstalled.addListener(function (object) {

    //Check if message was shown before.
    if (localStorage.getItem("ALP-1") != "1") {

        chrome.tabs.create({url: "https://www.facebook.com/DesktopTVRemote/"});
        chrome.tabs.create({url: "/welcome_page/index.html"});//new user

        //Prevent from displaying this message again
        localStorage.setItem("ALP-1", "1");
    }

});