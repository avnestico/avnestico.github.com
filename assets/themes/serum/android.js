/**
 * Sticky footers, illustrated:
 *
 * +---------+  +---------+  +---------+  +---------+
 * | Header  |  | Header  |  | Header  |  | Header  |
 * +---------+  +---------+  +---------+  +---------+
 * | Content |  | Content |  | Content |  | Content |
 * |         |  |         |  |         |  |         |
 * |         |  | Content |  | Content |  | Content |
 * |         |  |         |  |         |  |         |
 * +---------+  +---------+  | Content |  | Content |
 * | Footer  |  | Footer  |  +---------+  |         |
 * |         |  |         |  | Footer  |  | Content |
 * +---------+  +---------+  +---------+  +---------+
 *                                          Footer
 *
 * JavaScript workaround for sticky footers in Android 4.3- browsers
 * This is necessary because these browsers only have partial support for display: -webkit-box;
 *
 * Expected behaviour:
 *   Case 1) When the sum of the heights of the page elements is smaller than the viewport height, footer is fixed at
 *     the bottom of the screen
 *   Case 2) When combined height is greater than the viewport height, footer is fluid below content
 *
 * Actual behaviour:
 *   Case 1) Works as advertised
 *   Case 2) Flex scaling is ignored. Footer is displayed at the bottom of the page, overlapping the content
 *
 * Workaround:
 *   When the sum of the vertical divs is greater than the viewport height, set display: block;
 *   This disables flexbox when it would cause problems. By falling back to display: block;, the header, content, and
 *     footer are displayed normally
 *
 * Side-effects:
 *   Divs must be positioned in their correct order in html, as all order properties are ignored when display is not
 *     set to flex
 */

// Check for user agent that contains 'Android' but not 'Chrome' or 'Firefox'
var ua = navigator.userAgent;
var isandroid = ua.match(/Android ([\d.]+)/);
if (isandroid) {
    var ischrome = ua.match(/Chrome/);
    var isfirefox = ua.match(/Firefox/);

    if (isandroid && !ischrome && !isfirefox) {
        androidVer = parseFloat(isandroid[1]);
        viewHeight = document.body.scrollHeight;

        // Find sum of heights of page elements
        headerHeight = document.getElementsByClassName('sidebar-top')[0].scrollHeight;
        contentHeight = document.getElementsByClassName('content')[0].scrollHeight;
        footerHeight = document.getElementsByClassName('sidebar-bottom')[0].scrollHeight;
        pageHeight = headerHeight + contentHeight + footerHeight;

        if (androidVer < 4.4 && pageHeight > viewHeight ) {
            // Add android.css to page head
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", "/assets/themes/serum/css/android.css");
            head.appendChild(link);
        }
    }
}
