(this["webpackJsonpebay-task"]=this["webpackJsonpebay-task"]||[]).push([[0],{106:function(e,t){},108:function(e,t){},143:function(e,t){},144:function(e,t){},197:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(89),i=n.n(a),s=n(92),c=n(11),u=n(12);function l(){var e=Object(c.a)(["\n    max-width: 89.6rem;\n    margin: 0 auto;\n    padding: 0 3.2rem;\n"]);return l=function(){return e},e}var d=u.a.div(l()),f=function(e){var t=e.children;return o.a.createElement(d,null,t)},m=n(5),p=n.n(m);function h(){var e=Object(c.a)(["\n    color: white;\n    &:hover {\n        background-color: ","\n    }\n    background-color: ","\n    border-color: ","\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    border: 1px solid transparent;\n    padding: .6rem 1.2rem;\n    line-height: 1.42857143;\n    border-radius: .4rem;\n"]);return h=function(){return e},e}var b=u.a.button(h(),(function(e){return"primary"===e.type?"#286090":"#c9302c"}),(function(e){return"primary"===e.type?"#337ab7":"#d9534f"}),(function(e){return"primary"===e.type?"#2e6da4":"#ac2925"}));b.defaultProps={type:"primary"},b.propTypes={type:p.a.oneOf(["primary","danger"])};var y=b,g=n(30),v=n(15),w=n(16),O=n.n(w);function j(){var e=Object(c.a)(["\n    font-weight: 700;\n    font-size: 2rem;\n    margin: 2rem 0;\n"]);return j=function(){return e},e}function k(){var e=Object(c.a)(["\n    font-weight: 700;\n    font-size: 2.4rem;\n    text-align: Center;\n    margin: 2.4rem 0;\n"]);return k=function(){return e},e}var E=u.a.h1(k()),P=u.a.h2(j()),x=function(e){var t=e.text,n=e.level;return 1===(void 0===n?1:n)?o.a.createElement(E,null,O()(t)):o.a.createElement(P,null,O()(t))},B=function(e){var t=e.type,n=void 0===t?"unordered":t,r=e.children;return r?"unordered"===n?o.a.createElement("ul",null,r):"ordered"===n?o.a.createElement("ol",null,r):null:null};function T(){var e=Object(c.a)(["\n    line-height: 2rem;\n    white-space: wrap;\n"]);return T=function(){return e},e}var S=u.a.li(T());function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(e,t){return e["".concat(t.position)]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),e}),{})}var C=function(e){var t=e.type,n=e.items,r=void 0===n?[]:n,a=e.sublists,i=void 0===a?[]:a;if(0===r.length)return null;var s=A(i);return o.a.createElement(B,{type:t},r.map((function(e,t){if("".concat(t)in s){var n=s["".concat(t)];return o.a.createElement(S,{key:"list-item-".concat(Object(v.v4)())},O()(e),o.a.createElement(B,{type:n.style},n.items.map((function(e){return o.a.createElement(S,{key:"sublist-item-".concat(Object(v.v4)()),htmlString:e},O()(e))}))))}return o.a.createElement(S,{key:"list-item-".concat(Object(v.v4)()),htmlString:e},O()(e))})))},I=p.a.shape({style:p.a.string,items:p.a.arrayOf(p.a.node),position:p.a.number}),N=p.a.shape({text:p.a.string,level:p.a.number,style:p.a.PropTypes.string,items:p.a.arrayOf(p.a.string),sublists:p.a.arrayOf(I)});p.a.shape({type:p.a.string,data:N});function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t=e.blocks,n=void 0===t?[]:t;return 0===n.length?null:n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0===Object.keys(e).length)return null;if("header"===e.type){var t=H({},e.data);return o.a.createElement(x,Object.assign({},t,{key:"block-".concat(Object(v.v4)())}))}if("list"===e.type){var n=H({},e.data,{type:e.data.style});return o.a.createElement(C,Object.assign({},n,{key:"block-".concat(Object(v.v4)())}))}return null}))},L=[{type:"header",data:{text:"20% off eligible items"}},{type:"header",data:{text:"Terms &amp; conditions",level:2}},{type:"list",data:{style:"ordered",items:["<strong>Acceptance. </strong>By using or attempting to use the redemption code for this offer, you agree to accept and be bound by these terms and conditions.","<strong>Offer Period. </strong>This offer commences at 10:00am (AEST) on 15th November 2019 and ends at 11:59pm (AEST) on 20th November 2019 (\u201c<strong>Offer Period</strong>\u201d).",'<strong>Conditions.&nbsp;</strong>The offer entitles you to 20% off the purchase price (excluding postage costs) on Eligible items listed on <a href="https://www.ebay.com.au/">www.ebay.com.au</a>, up to a maximum discount of $300 per transaction. Multiple items may be purchased in 5 transactions (up to a maximum of 10 items per transaction). All monetary amounts specified in these terms and conditions are in Australian dollars (AUD).','\'<strong>Eligible Items</strong>\' means all items listed at: <a href="https://www.ebay.com.au/e/coupon-offers/20-off-beds-mattresses-sales-nov19">https://www.ebay.com.au/e/coupon-offers/20-off-beds-mattresses-sales-nov19"',"<strong>Redemption. </strong>To redeem this offer during the Offer Period, enter the redemption code <strong>PSNOOZE</strong> into the redemption code box during the checkout process. This code cannot be used in conjunction with any other eBay offer, coupon or voucher. You can only use the redemption code 5 times during the Offer Period. The code is provided to you as an eBay User and the limitations on its usage apply on that basis even though you may have registered a number of different eBay User IDs.",'<strong>eBay rights.</strong> Without limiting other remedies and in addition to eBay\u2019s rights under the <a href="https://pages.ebay.com.au/help/policies/user-agreement.html?rt=nc">User Agreement</a>, eBay reserves the right to disallow or reverse a discount or prohibit access to this offer in circumstances where eBay believes:',"<b>Active.</b> You must be an eBay.com.au registered member with an active account at the time of redemption (not suspended nor made inactive by eBay).","<b>Shipping.</b> Items will only be shipped to addresses within Australia.","<b>Returns.</b> If you return or seek a refund on any item purchased using this discount, the value of the discount will not be refunded to you.","<b>No withdrawal.</b> This offer cannot be withdrawn into your bank account and cannot be transferred.","<b>Stock.</b> Sellers are responsible for their own stock and eBay does not guarantee the availability of stock. This offer is only available while stock lasts.","<b>Liability.</b> To the extent permitted by law, eBay will not be responsible for any loss incurred by you in redeeming or attempting to redeem the offer or for any costs, damages, accident, delay, injury, loss, expense, or inconvenience that may arise in connection with the use of the offer.","<b>Changes.</b> eBay reserves the right to vary the terms and conditions of the offer at its reasonable discretion by publishing revised terms on ebay.com.au.","<b>Jurisdiction.</b> The parties submit to the non-exclusive jurisdiction of the courts of the state of New South Wales."],sublists:[{style:"unordered",items:["you have provided false information, conspired with others to gain an unfair advantage or have otherwise been involved in any way in manipulating, interfering or tampering with the conduct of this offer;","a sale or purchase of any item as part of this offer has not been made in good faith, including where eBay considers that the buyer and seller may be related parties (such as family members or parties sharing the same dwelling); or","buyers or sellers have engaged in collusive conduct or any other conduct which eBay considers unfair, fraudulent or untoward."],position:5}]}}],M=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=void 0===n?[]:n,i=t[1];return o.a.createElement(f,null,o.a.createElement(J,{blocks:a}),0===a.length?o.a.createElement(y,{type:"primary",onClick:function(){return i(L)},style:{display:"block",margin:"2.4rem auto"}},"Render HTML"):o.a.createElement(y,{type:"danger",style:{display:"block",margin:"2.4rem auto"},onClick:function(){return i([])}},"Hide HTML"))};n(197);i.a.render(o.a.createElement(M,null),document.getElementById("root"))},95:function(e,t,n){e.exports=n(198)}},[[95,1,2]]]);
//# sourceMappingURL=main.06273c32.chunk.js.map