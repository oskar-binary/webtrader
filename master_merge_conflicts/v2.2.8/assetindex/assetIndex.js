define(["exports","jquery","../windows/windows","../websockets/binary_websockets","common/rivetsExtra","../common/marketUtils","jquery-growl","css!./assetIndex.css"],function(e,t,a,s,r,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var n=u(t),i=u(a),o=u(s),l=u(r);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function p(){var t;t=(0,n.default)("#"+_.attr("id")+"_processing").show(),Promise.all([o.default.cached.send({asset_index:1})]).then(function(e){return t.hide(),Promise.resolve(e)}).catch(function(e){return t.hide(),Promise.reject(e)}).then(function(e){!function(e){var t=local_storage.get("active_symbols"),a=[].concat(c(e[0].asset_index));if(n.default.isEmptyObject(t)&&n.default.isEmptyObject(a))return;function s(e,t){var a=[].concat(c(k.dropdown.market_submarkets[e][t]));k.dropdown.selected_market=e,k.dropdown.is_volatility=y(e,k.dropdown.display_markets);var s,r=k.table.asset_data.filter(function(e){return-1<a.indexOf(e[1])}).map(function(e){var r=[],t=e[1],a=e[2];return k.table.display_headers=[],r.push(t),a.forEach(function(e){var t=e[1],a=e[2],s=e[3];k.table.display_headers.push(t),r.push([t,a+" - "+s])}),r});s=[],r.forEach(function(e){var r=new Array(k.table.display_headers.length+1);e.forEach(function(e){if(Array.isArray(e)){var t=e[0],a=e[1],s=k.table.display_headers.indexOf(t)+1;r[s]=a}else r[0]=e}),s.push(r)}),r=function(e){for(var t=k.table.display_headers.length,a=function(t){e.forEach(function(e){e[t]&&!Array.isArray(e[t])||(e[t]="-")})},s=0;s<=t;s++)a(s);return e}(r=s),k.table.display_asset_data=r,k.table.asset_data_extract=r}k.dropdown.market_submarkets=(0,d.getObjectMarketSubmarkets)(t),k.dropdown.sorted_markets=(0,d.getSortedMarkets)(t),k.table.asset_data=a,f.parent().find(".ui-dialog-title").addClass("with-content"),f.parent().find(".ui-dialog-titlebar-buttonpane"),function(a){var e=k.dropdown.sorted_markets;k.dropdown.display_markets?k.dropdown.display_markets.update_list(e):(k.dropdown.display_markets=i.default.makeSelectmenu((0,n.default)("<select />").insertAfter(f),{list:e,inx:0,changed:function(e){var t=(0,d.getSortedSubmarkets)(Object.keys(a[e]));k.dropdown.display_submarkets.update_list(t),s(k.dropdown.display_markets.val(),k.dropdown.display_submarkets.val())},width:"180px"}),k.dropdown.display_markets.selectmenu("widget").addClass("asset-index-selectmenu"))}(k.dropdown.market_submarkets),function(e){var t=Object.keys(e[k.dropdown.display_markets.val()]),a=(0,d.getSortedSubmarkets)(t);k.dropdown.display_submarkets?k.dropdown.display_submarkets.update_list(a):(k.dropdown.display_submarkets=i.default.makeSelectmenu((0,n.default)("<select />").insertAfter(f),{list:a,inx:0,changed:function(){s(k.dropdown.display_markets.val(),k.dropdown.display_submarkets.val())},width:"200px"}),k.dropdown.display_submarkets.selectmenu("widget").addClass("asset-index-selectmenu"))}(k.dropdown.market_submarkets),s(k.dropdown.display_markets.val(),k.dropdown.display_submarkets.val())}(e)}).catch(function(e){n.default.growl.error({message:e.message})})}var _=null,f=null,m=e.init=function(e){e.click(function(){f?f.moveToTop():((f=i.default.createBlankWindow((0,n.default)("<div/>"),{title:"Asset Index".i18n(),dialogClass:"assetIndex",minWidth:800,minHeight:400})).track({module_id:"assetIndex",is_unique:!0,data:null}),f.dialog("open"),require(["text!assetindex/assetIndex.html"],w))})},k={dropdown:{display_markets:null,display_submarkets:null,is_volatility:!1,sorted_markets:null,market_submarkets:null,selected_market:null},table:{asset_data:[],asset_data_extract:[],display_headers:[],display_asset_data:[],search_input:""},search:function(){function e(e){var t=k.table.search_input.toLowerCase();return-1!==e[0].toLowerCase().indexOf(t.toLowerCase())}return k.table.display_asset_data=[],k.table.display_asset_data=k.table.asset_data_extract.filter(e),void(k.dropdown.is_volatility=y(k.dropdown.selected_market,k.dropdown.display_markets))}},y=function(e,t){var a=t[0][3]?t[0][3].innerText:t[0][0].innerText;return-1!==e.indexOf(a)},w=function(e){e=(0,n.default)(e).i18n(),_=e.filter("table"),e.appendTo(f),l.default.bind(e[0],k),p(),require(["websockets/binary_websockets"],function(e){e.events.on("login",p),e.events.on("logout",p)})};e.default={init:m}});