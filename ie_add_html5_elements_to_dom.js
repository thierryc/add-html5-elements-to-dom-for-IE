/*!
 * CSS AP HTML5 for IE 0.1.0
 *
 * Copyright 2011, Thierry Charbonnel
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/thierryc
 *
 * Depends:
 *  ie_html5_elements_dom.css
 *
 */

var e = ("abbr,article,aside,audio,canvas,datalist,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video").split(',');
for (var i = 0; i < e.length; i++) { document.createElement(e[i]); }
