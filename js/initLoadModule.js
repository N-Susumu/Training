function topJavascript(targetName, url) {
    console.log('**Start Javascript Prosecess**');
    var windowName = window.name;
    var windowUrl = location.href;
    console.log(windowName);
    console.log(windowUrl);
    console.log(targetName);

    var win = window.open(url, targetName, "width=500,height=500");
    console.log('**End Javascript Prosecess**');
}