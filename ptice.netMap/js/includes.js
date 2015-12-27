/*!
 * Autolinker.js
 * 0.11.0
 *
 * Copyright(c) 2014 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
!function(a,b){"function"==typeof define&&define.amd?define(b):"undefined"!=typeof exports?module.exports=b():a.Autolinker=b()}(this,function(){var a=function(a){a=a||{};for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])};return a.prototype={constructor:a,newWindow:!0,stripPrefix:!0,twitter:!0,email:!0,urls:!0,className:"",matcherRegex:function(){var a=/(^|[^\w])@(\w{1,15})/,b=/(?:[\-;:&=\+\$,\w\.]+@)/,c=/(?:[A-Za-z]{3,9}:(?:\/\/)?)/,d=/(?:www\.)/,e=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,f=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,g=/(?:[\-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|])?/;return new RegExp(["(",a.source,")","|","(",b.source,e.source,f.source,")","|","(","(?:","(?:",c.source,e.source,")","|","(?:","(.?//)?",d.source,e.source,")","|","(?:","(.?//)?",e.source,f.source,")",")",g.source,")"].join(""),"gi")}(),protocolRelativeRegex:/(.)?\/\//,htmlRegex:function(){var a=/[0-9a-zA-Z:]+/,b=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,c=/(?:".*?"|'.*?'|[^'"=<>`\s]+)/;return new RegExp(["<(/)?","("+a.source+")","(?:","\\s+",b.source,"(?:\\s*=\\s*"+c.source+")?",")*","\\s*",">"].join(""),"g")}(),urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,link:function(a){return this.processHtml(a)},processHtml:function(a){for(var b,c,d=this.htmlRegex,e=0,f=0,g=[];null!==(b=d.exec(a));){var h=b[0],i=b[2],j=!!b[1];c=a.substring(e,b.index),e=b.index+h.length,"a"===i?j?(f=Math.max(f-1,0),0===f&&g.push(c)):(f++,g.push(this.processTextNode(c))):g.push(0===f?this.processTextNode(c):c),g.push(h)}if(e<a.length){var k=this.processTextNode(a.substring(e));g.push(k)}return g.join("")},processTextNode:function(a){var b=this,c=this.matcherRegex,d=this.twitter,e=this.email,f=this.urls;return a.replace(c,function(a,c,g,h,i,j,k,l){var m=c,n=g,o=h,p=i,q=j,r=k||l,s="",t="";if(m&&!d||p&&!e||q&&!f||q&&-1===q.indexOf(".")||q&&/^[A-Za-z]{3,9}:/.test(q)&&!/:.*?[A-Za-z]/.test(q)||r&&/^[\w]\/\//.test(r))return a;var u=a.charAt(a.length-1);if(")"===u){var v=a.match(/\(/g),w=a.match(/\)/g),x=v&&v.length||0,y=w&&w.length||0;y>x&&(a=a.substr(0,a.length-1),t=")")}var z,A=a,B=a;if(m)z="twitter",s=n,A="https://twitter.com/"+o,B="@"+o;else if(p)z="email",A="mailto:"+p,B=p;else if(z="url",r){var C=new RegExp("^"+b.protocolRelativeRegex.source),D=r.match(C)[1]||"";s=D+s,A=A.replace(C,"//"),B=B.replace(C,"")}else/^[A-Za-z]{3,9}:/i.test(A)||(A="http://"+A);var E=b.createAnchorTag(z,A,B);return s+E+t})},createAnchorTag:function(a,b,c){var d=this.createAnchorAttrsStr(a,b);return c=this.processAnchorText(c),"<a "+d+">"+c+"</a>"},createAnchorAttrsStr:function(a,b){var c=['href="'+b+'"'],d=this.createCssClass(a);return d&&c.push('class="'+d+'"'),this.newWindow&&c.push('target="_blank"'),c.join(" ")},createCssClass:function(a){var b=this.className;return b?b+" "+b+"-"+a:""},processAnchorText:function(a){return this.stripPrefix&&(a=this.stripUrlPrefix(a)),a=this.removeTrailingSlash(a),a=this.doTruncate(a)},stripUrlPrefix:function(a){return a.replace(this.urlPrefixRegex,"")},removeTrailingSlash:function(a){return"/"===a.charAt(a.length-1)&&(a=a.slice(0,-1)),a},doTruncate:function(a){var b=this.truncate;return b&&a.length>b&&(a=a.substring(0,b-2)+".."),a}},a.link=function(b,c){var d=new a(c);return d.link(b)},a});L.Control.StyledLayerControl=L.Control.Layers.extend({options:{collapsed:true,position:"topright",autoZIndex:true},initialize:function(baseLayers,groupedOverlays,options){var i,j;L.Util.setOptions(this,options);this._layers={};this._lastZIndex=0;this._handlingClick=false;this._groupList=[];this._domGroups=[];for(i in baseLayers){for(var j in baseLayers[i].layers){this._addLayer(baseLayers[i].layers[j],j,baseLayers[i],false)}}for(i in groupedOverlays){for(var j in groupedOverlays[i].layers){this._addLayer(groupedOverlays[i].layers[j],j,groupedOverlays[i],true)}}},onAdd:function(map){this._initLayout();this._update();map.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this);return this._container},onRemove:function(map){map.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(layer,name,group){this._addLayer(layer,name,group,false);this._update();return this},addOverlay:function(layer,name,group){this._addLayer(layer,name,group,true);this._update();return this},removeLayer:function(layer){var id=L.Util.stamp(layer);delete this._layers[id];this._update();return this},removeGroup:function(group_Name){for(group in this._groupList){if(this._groupList[group].groupName==group_Name){for(layer in this._layers){if(this._layers[layer].group&&this._layers[layer].group.name==group_Name){delete this._layers[layer]}}delete this._groupList[group];this._update();break}}},_initLayout:function(){var className="leaflet-control-layers",container=this._container=L.DomUtil.create("div",className);container.setAttribute("aria-haspopup",true);if(!L.Browser.touch){L.DomEvent.disableClickPropagation(container);L.DomEvent.on(container,"wheel",L.DomEvent.stopPropagation)}else{L.DomEvent.on(container,"click",L.DomEvent.stopPropagation)}var section=document.createElement("section");section.className="ac-container "+className+"-list";var form=this._form=L.DomUtil.create("form");section.appendChild(form);if(this.options.collapsed){if(!L.Browser.android){L.DomEvent.on(container,"mouseover",this._expand,this).on(container,"mouseout",this._collapse,this)}var link=this._layersLink=L.DomUtil.create("a",className+"-toggle",container);link.href="#";link.title="Layers";if(L.Browser.touch){L.DomEvent.on(link,"click",L.DomEvent.stop).on(link,"click",this._expand,this)}else{L.DomEvent.on(link,"focus",this._expand,this)}this._map.on("click",this._collapse,this)}else{this._expand()}this._baseLayersList=L.DomUtil.create("div",className+"-base",form);this._overlaysList=L.DomUtil.create("div",className+"-overlays",form);container.appendChild(section);for(var c=0;c<(containers=container.getElementsByClassName("ac-container")).length;c++){if(this.options.container_width){containers[c].style.width=this.options.container_width}this._default_maxHeight=this.options.container_maxHeight?this.options.container_maxHeight:this._map._size.y-70;containers[c].style.maxHeight=this._default_maxHeight+"px"}window.onresize=this._on_resize_window.bind(this)},_on_resize_window:function(){for(var c=0;c<containers.length;c++){containers[c].style.maxHeight=window.innerHeight-90<this._removePxToInt(this._default_maxHeight)?window.innerHeight-90+"px":this._removePxToInt(this._default_maxHeight)+"px"}},_removePxToInt:function(value){return parseInt(value.replace("px",""))},_addLayer:function(layer,name,group,overlay){var id=L.Util.stamp(layer);this._layers[id]={layer:layer,name:name,overlay:overlay};if(group){var groupId=this._groupList.indexOf(group);if(groupId===-1){for(g in this._groupList){if(this._groupList[g].groupName==group.groupName){groupId=g;break}}}if(groupId===-1){groupId=this._groupList.push(group)-1}this._layers[id].group={name:group.groupName,id:groupId,expanded:group.expanded}}if(this.options.autoZIndex&&layer.setZIndex){this._lastZIndex++;layer.setZIndex(this._lastZIndex)}},_update:function(){if(!this._container){return}this._baseLayersList.innerHTML="";this._overlaysList.innerHTML="";this._domGroups.length=0;var baseLayersPresent=false,overlaysPresent=false,i,obj;for(i in this._layers){obj=this._layers[i];this._addItem(obj);overlaysPresent=overlaysPresent||obj.overlay;baseLayersPresent=baseLayersPresent||!obj.overlay}},_onLayerChange:function(e){var obj=this._layers[L.Util.stamp(e.layer)];if(!obj){return}if(!this._handlingClick){this._update()}var type=obj.overlay?e.type==="layeradd"?"overlayadd":"overlayremove":e.type==="layeradd"?"baselayerchange":null;if(type){this._map.fire(type,obj)}},_createRadioElement:function(name,checked){var radioHtml='<input type="radio" class="leaflet-control-layers-selector" name="'+name+'"';if(checked){radioHtml+=' checked="checked"'}radioHtml+="/>";var radioFragment=document.createElement("div");radioFragment.innerHTML=radioHtml;return radioFragment.firstChild},_addItem:function(obj){var label=document.createElement("div"),input,checked=this._map.hasLayer(obj.layer),container;if(obj.overlay){input=document.createElement("input");input.type="checkbox";input.className="leaflet-control-layers-selector";input.defaultChecked=checked;label.className="menu-item-checkbox"}else{input=this._createRadioElement("leaflet-base-layers",checked);label.className="menu-item-radio"}input.layerId=L.Util.stamp(obj.layer);L.DomEvent.on(input,"click",this._onInputClick,this);var name=document.createElement("span");name.innerHTML=" "+obj.name;label.appendChild(input);label.appendChild(name);if(obj.layer.StyledLayerControl&&obj.layer.StyledLayerControl.removable){var bt_delete=document.createElement("input");bt_delete.type="button";bt_delete.className="bt_delete";L.DomEvent.on(bt_delete,"click",this._onDeleteClick,this);label.appendChild(bt_delete)}if(obj.overlay){container=this._overlaysList}else{container=this._baseLayersList}var groupContainer=this._domGroups[obj.group.id];if(!groupContainer){groupContainer=document.createElement("div");groupContainer.id="leaflet-control-accordion-layers-"+obj.group.id;var s_expanded=obj.group.expanded?' checked = "true" ':"";var s_type_exclusive=this.options.exclusive?' type="radio" ':' type="checkbox" ';inputElement='<input id="ac'+obj.group.id+'" name="accordion-1" class="menu" '+s_expanded+s_type_exclusive+"/>";inputLabel='<label for="ac'+obj.group.id+'">'+obj.group.name+"</label>";article=document.createElement("article");article.className="ac-large";article.appendChild(label);if(this.options.group_maxHeight){article.style.maxHeight=this.options.group_maxHeight}groupContainer.innerHTML=inputElement+inputLabel;groupContainer.appendChild(article);container.appendChild(groupContainer);this._domGroups[obj.group.id]=groupContainer}else{groupContainer.lastElementChild.appendChild(label)}return label},_onInputClick:function(){var i,input,obj,inputs=this._form.getElementsByTagName("input"),inputsLen=inputs.length;this._handlingClick=true;for(i=0;i<inputsLen;i++){input=inputs[i];obj=this._layers[input.layerId];if(!obj){continue}if(input.checked&&!this._map.hasLayer(obj.layer)){this._map.addLayer(obj.layer)}else if(!input.checked&&this._map.hasLayer(obj.layer)){this._map.removeLayer(obj.layer)}}this._handlingClick=false},_onDeleteClick:function(obj){var node=obj.target.parentElement.childNodes[0];n_obj=this._layers[node.layerId];if(!n_obj.overlay&&node.checked){return false}if(this._map.hasLayer(n_obj.layer)){this._map.removeLayer(n_obj.layer)}this.removeLayer(n_obj.layer);obj.target.parentNode.remove();return false},_expand:function(){L.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}});L.Control.styledLayerControl=function(baseLayers,overlays,options){return new L.Control.StyledLayerControl(baseLayers,overlays,options)};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Nominatim=require("./geocoders/nominatim")["class"];module.exports={"class":L.Control.extend({options:{showResultIcons:false,collapsed:true,expand:"click",position:"topright",placeholder:"Search...",errorMessage:"Nothing found."},_callbackId:0,initialize:function(options){L.Util.setOptions(this,options);if(!this.options.geocoder){this.options.geocoder=new Nominatim}},onAdd:function(map){var className="leaflet-control-geocoder",container=L.DomUtil.create("div",className+" leaflet-bar"),icon=L.DomUtil.create("a","leaflet-control-geocoder-icon",container),form=this._form=L.DomUtil.create("form",className+"-form",container),input;icon.innerHTML="&nbsp;";icon.href="javascript:void(0);";this._map=map;this._container=container;input=this._input=L.DomUtil.create("input");input.type="text";input.placeholder=this.options.placeholder;L.DomEvent.addListener(input,"keydown",this._keydown,this);this._errorElement=document.createElement("div");this._errorElement.className=className+"-form-no-error";this._errorElement.innerHTML=this.options.errorMessage;this._alts=L.DomUtil.create("ul",className+"-alternatives leaflet-control-geocoder-alternatives-minimized");form.appendChild(input);this._container.appendChild(this._errorElement);container.appendChild(this._alts);L.DomEvent.addListener(form,"submit",this._geocode,this);if(this.options.collapsed){if(this.options.expand==="click"){L.DomEvent.addListener(icon,"click",function(e){if(e.button===0&&e.detail!==2){this._toggle()}},this)}else{L.DomEvent.addListener(icon,"mouseover",this._expand,this);L.DomEvent.addListener(icon,"mouseout",this._collapse,this);this._map.on("movestart",this._collapse,this)}}else{L.DomEvent.addListener(icon,"click",function(e){this._geocode(e)},this);this._expand()}L.DomEvent.disableClickPropagation(container);return container},_geocodeResult:function(results){L.DomUtil.removeClass(this._container,"leaflet-control-geocoder-throbber");if(results.length===1){this._geocodeResultSelected(results[0])}else if(results.length>0){this._alts.innerHTML="";this._results=results;L.DomUtil.removeClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");for(var i=0;i<results.length;i++){this._alts.appendChild(this._createAlt(results[i],i))}}else{L.DomUtil.addClass(this._errorElement,"leaflet-control-geocoder-error")}},markGeocode:function(result){this._map.fitBounds(result.bbox);if(this._geocodeMarker){this._map.removeLayer(this._geocodeMarker)}this._geocodeMarker=new L.Marker(result.center).bindPopup(result.html||result.name).addTo(this._map).openPopup();return this},_geocode:function(event){L.DomEvent.preventDefault(event);L.DomUtil.addClass(this._container,"leaflet-control-geocoder-throbber");this._clearResults();this.options.geocoder.geocode(this._input.value,this._geocodeResult,this);return false},_geocodeResultSelected:function(result){if(this.options.collapsed){this._collapse()}else{this._clearResults()}this.markGeocode(result)},_toggle:function(){if(this._container.className.indexOf("leaflet-control-geocoder-expanded")>=0){this._collapse()}else{this._expand()}},_expand:function(){L.DomUtil.addClass(this._container,"leaflet-control-geocoder-expanded");this._input.select()},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-geocoder-expanded","");L.DomUtil.addClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");L.DomUtil.removeClass(this._errorElement,"leaflet-control-geocoder-error")},_clearResults:function(){L.DomUtil.addClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");this._selection=null;L.DomUtil.removeClass(this._errorElement,"leaflet-control-geocoder-error")},_createAlt:function(result,index){var li=L.DomUtil.create("li",""),a=L.DomUtil.create("a","",li),icon=this.options.showResultIcons&&result.icon?L.DomUtil.create("img","",a):null,text=result.html?undefined:document.createTextNode(result.name),clickHandler=function clickHandler(e){L.DomEvent.preventDefault(e);this._geocodeResultSelected(result)};if(icon){icon.src=result.icon}li.setAttribute("data-result-index",index);if(result.html){a.innerHTML=result.html}else{a.appendChild(text)}L.DomEvent.addListener(li,"click",clickHandler,this);return li},_keydown:function(e){var _this=this,select=function select(dir){if(_this._selection){L.DomUtil.removeClass(_this._selection,"leaflet-control-geocoder-selected");_this._selection=_this._selection[dir>0?"nextSibling":"previousSibling"]}if(!_this._selection){_this._selection=_this._alts[dir>0?"firstChild":"lastChild"]}if(_this._selection){L.DomUtil.addClass(_this._selection,"leaflet-control-geocoder-selected")}};switch(e.keyCode){case 27:if(this.options.collapsed){this._collapse()}break;case 38:select(-1);L.DomEvent.preventDefault(e);break;case 40:select(1);L.DomEvent.preventDefault(e);break;case 13:if(this._selection){var index=parseInt(this._selection.getAttribute("data-result-index"),10);this._geocodeResultSelected(this._results[index]);this._clearResults();L.DomEvent.preventDefault(e)}}return true}}),factory:function(options){return new L.Control.Geocoder(options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./geocoders/nominatim":7}],2:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({initialize:function(key){this.key=key},geocode:function(query,cb,context){Util.jsonp("//dev.virtualearth.net/REST/v1/Locations",{query:query,key:this.key},function(data){var results=[];if(data.resourceSets.length>0){for(var i=data.resourceSets[0].resources.length-1;i>=0;i--){var resource=data.resourceSets[0].resources[i],bbox=resource.bbox;results[i]={name:resource.name,bbox:L.latLngBounds([bbox[0],bbox[1]],[bbox[2],bbox[3]]),center:L.latLng(resource.point.coordinates)}}}cb.call(context,results)},this,"jsonp")},reverse:function(location,scale,cb,context){Util.jsonp("//dev.virtualearth.net/REST/v1/Locations/"+location.lat+","+location.lng,{key:this.key},function(data){var results=[];for(var i=data.resourceSets[0].resources.length-1;i>=0;i--){var resource=data.resourceSets[0].resources[i],bbox=resource.bbox;results[i]={name:resource.name,bbox:L.latLngBounds([bbox[0],bbox[1]],[bbox[2],bbox[3]]),center:L.latLng(resource.point.coordinates)}}cb.call(context,results)},this,"jsonp")}}),factory:function(key){return new L.Control.Geocoder.Bing(key)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],3:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"https://maps.googleapis.com/maps/api/geocode/json",geocodingQueryParams:{},reverseQueryParams:{}},initialize:function(key,options){this._key=key;L.setOptions(this,options);this.options.serviceUrl=this.options.service_url||this.options.serviceUrl},geocode:function(query,cb,context){var params={address:query};if(this._key&&this._key.length){params.key=this._key}params=L.Util.extend(params,this.options.geocodingQueryParams);Util.getJSON(this.options.serviceUrl,params,function(data){var results=[],loc,latLng,latLngBounds;if(data.results&&data.results.length){for(var i=0;i<=data.results.length-1;i++){loc=data.results[i];latLng=L.latLng(loc.geometry.location);latLngBounds=L.latLngBounds(L.latLng(loc.geometry.viewport.northeast),L.latLng(loc.geometry.viewport.southwest));results[i]={name:loc.formatted_address,bbox:latLngBounds,center:latLng,properties:loc.address_components}}}cb.call(context,results)})},reverse:function(location,scale,cb,context){var params={latlng:encodeURIComponent(location.lat)+","+encodeURIComponent(location.lng)};params=L.Util.extend(params,this.options.reverseQueryParams);if(this._key&&this._key.length){params.key=this._key}Util.getJSON(this.options.serviceUrl,params,function(data){var results=[],loc,latLng,latLngBounds;if(data.results&&data.results.length){for(var i=0;i<=data.results.length-1;i++){loc=data.results[i];latLng=L.latLng(loc.geometry.location);latLngBounds=L.latLngBounds(L.latLng(loc.geometry.viewport.northeast),L.latLng(loc.geometry.viewport.southwest));results[i]={name:loc.formatted_address,bbox:latLngBounds,center:latLng,properties:loc.address_components}}}cb.call(context,results)})}}),factory:function(key,options){return new L.Control.Geocoder.Google(key,options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],4:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/"},initialize:function(accessToken,options){L.setOptions(this,options);this._accessToken=accessToken},geocode:function(query,cb,context){Util.getJSON(this.options.serviceUrl+encodeURIComponent(query)+".json",{access_token:this._accessToken},function(data){var results=[],loc,latLng,latLngBounds;if(data.features&&data.features.length){for(var i=0;i<=data.features.length-1;i++){loc=data.features[i];latLng=L.latLng(loc.center.reverse());if(loc.hasOwnProperty("bbox")){latLngBounds=L.latLngBounds(L.latLng(loc.bbox.slice(0,2).reverse()),L.latLng(loc.bbox.slice(2,4).reverse()))}else{latLngBounds=L.latLngBounds(latLng,latLng)}results[i]={name:loc.place_name,bbox:latLngBounds,center:latLng}}}cb.call(context,results)})},suggest:function(query,cb,context){return this.geocode(query,cb,context)},reverse:function(location,scale,cb,context){Util.getJSON(this.options.serviceUrl+encodeURIComponent(location.lng)+","+encodeURIComponent(location.lat)+".json",{access_token:this._accessToken},function(data){var results=[],loc,latLng,latLngBounds;if(data.features&&data.features.length){for(var i=0;i<=data.features.length-1;i++){loc=data.features[i];latLng=L.latLng(loc.center.reverse());if(loc.hasOwnProperty("bbox")){latLngBounds=L.latLngBounds(L.latLng(loc.bbox.slice(0,2).reverse()),L.latLng(loc.bbox.slice(2,4).reverse()))}else{latLngBounds=L.latLngBounds(latLng,latLng)}results[i]={name:loc.place_name,bbox:latLngBounds,center:latLng}}}cb.call(context,results)})}}),factory:function(accessToken,options){return new L.Control.Geocoder.Mapbox(accessToken,options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],5:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"//www.mapquestapi.com/geocoding/v1"},initialize:function(key,options){this._key=decodeURIComponent(key);L.Util.setOptions(this,options)},_formatName:function(){var r=[],i;for(i=0;i<arguments.length;i++){if(arguments[i]){r.push(arguments[i])}}return r.join(", ")},geocode:function(query,cb,context){Util.jsonp(this.options.serviceUrl+"/address",{key:this._key,location:query,limit:5,outFormat:"json"},function(data){var results=[],loc,latLng;if(data.results&&data.results[0].locations){for(var i=data.results[0].locations.length-1;i>=0;i--){loc=data.results[0].locations[i];latLng=L.latLng(loc.latLng);results[i]={name:this._formatName(loc.street,loc.adminArea4,loc.adminArea3,loc.adminArea1),bbox:L.latLngBounds(latLng,latLng),center:latLng}}}cb.call(context,results)},this)},reverse:function(location,scale,cb,context){Util.jsonp(this.options.serviceUrl+"/reverse",{key:this._key,location:location.lat+","+location.lng,outputFormat:"json"},function(data){var results=[],loc,latLng;if(data.results&&data.results[0].locations){for(var i=data.results[0].locations.length-1;i>=0;i--){loc=data.results[0].locations[i];latLng=L.latLng(loc.latLng);results[i]={name:this._formatName(loc.street,loc.adminArea4,loc.adminArea3,loc.adminArea1),bbox:L.latLngBounds(latLng,latLng),center:latLng}}}cb.call(context,results)},this)}}),factory:function(key,options){return new L.Control.Geocoder.MapQuest(key,options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],6:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"//search.mapzen.com/v1",geocodingQueryParams:{},reverseQueryParams:{}},initialize:function(apiKey,options){L.Util.setOptions(this,options);this._apiKey=apiKey;this._lastSuggest=0},geocode:function(query,cb,context){var _this=this;Util.getJSON(this.options.serviceUrl+"/search",L.extend({api_key:this._apiKey,text:query},this.options.geocodingQueryParams),function(data){cb.call(context,_this._parseResults(data,"bbox"))})},suggest:function(query,cb,context){var _this=this;Util.getJSON(this.options.serviceUrl+"/autocomplete",L.extend({api_key:this._apiKey,text:query},this.options.geocodingQueryParams),function(data){if(data.geocoding.timestamp>this._lastSuggest){this._lastSuggest=data.geocoding.timestamp;cb.call(context,_this._parseResults(data,"bbox"))}})},reverse:function(location,scale,cb,context){var _this=this;Util.getJSON(this.options.serviceUrl+"/reverse",L.extend({api_key:this._apiKey,"point.lat":location.lat,"point.lon":location.lng},this.options.reverseQueryParams),function(data){cb.call(context,_this._parseResults(data,"bounds"))})},_parseResults:function(data,bboxname){var results=[];L.geoJson(data,{pointToLayer:function(feature,latlng){return L.circleMarker(latlng)},onEachFeature:function(feature,layer){var result={};result["name"]=layer.feature.properties.label;result[bboxname]=layer.getBounds();result["center"]=result[bboxname].getCenter();result["properties"]=layer.feature.properties;results.push(result)}});return results}}),factory:function(apiKey,options){return new L.Control.Geocoder.Mapzen(apiKey,options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],7:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"//nominatim.openstreetmap.org/",geocodingQueryParams:{},reverseQueryParams:{},htmlTemplate:function(r){var a=r.address,parts=[];if(a.road||a.building){parts.push("{building} {road} {house_number}")}if(a.city||a.town||a.village){parts.push('<span class="'+(parts.length>0?"leaflet-control-geocoder-address-detail":"")+'">{postcode} {city} {town} {village}</span>')}if(a.state||a.country){parts.push('<span class="'+(parts.length>0?"leaflet-control-geocoder-address-context":"")+'">{state} {country}</span>')}return Util.template(parts.join("<br/>"),a,true)}},initialize:function(options){L.Util.setOptions(this,options)},geocode:function(query,cb,context){Util.jsonp(this.options.serviceUrl+"search",L.extend({q:query,limit:5,format:"json",addressdetails:1},this.options.geocodingQueryParams),function(data){var results=[];for(var i=data.length-1;i>=0;i--){var bbox=data[i].boundingbox;for(var j=0;j<4;j++)bbox[j]=parseFloat(bbox[j]);results[i]={icon:data[i].icon,name:data[i].display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(data[i]):undefined,bbox:L.latLngBounds([bbox[0],bbox[2]],[bbox[1],bbox[3]]),center:L.latLng(data[i].lat,data[i].lon),properties:data[i]}}cb.call(context,results)},this,"json_callback")},reverse:function(location,scale,cb,context){Util.jsonp(this.options.serviceUrl+"reverse",L.extend({lat:location.lat,lon:location.lng,zoom:Math.round(Math.log(scale/256)/Math.log(2)),addressdetails:1,format:"json"},this.options.reverseQueryParams),function(data){var result=[],loc;if(data&&data.lat&&data.lon){loc=L.latLng(data.lat,data.lon);result.push({name:data.display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(data):undefined,center:loc,bounds:L.latLngBounds(loc,loc),properties:data})}cb.call(context,result)},this,"json_callback")}}),factory:function(options){return new L.Control.Geocoder.Nominatim(options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],8:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"//photon.komoot.de/api/",reverseUrl:"//photon.komoot.de/reverse/",nameProperties:["name","street","suburb","hamlet","town","city","state","country"]},initialize:function(options){L.setOptions(this,options)},geocode:function(query,cb,context){var params=L.extend({q:query},this.options.geocodingQueryParams);Util.getJSON(this.options.serviceUrl,params,L.bind(function(data){cb.call(context,this._decodeFeatures(data))},this))},suggest:function(query,cb,context){return this.geocode(query,cb,context)},reverse:function(latLng,scale,cb,context){var params=L.extend({lat:latLng.lat,lon:latLng.lng},this.options.geocodingQueryParams);Util.getJSON(this.options.reverseUrl,params,L.bind(function(data){cb.call(context,this._decodeFeatures(data))},this))},_decodeFeatures:function(data){var results=[],i,f,c,latLng,extent,bbox;if(data&&data.features){for(i=0;i<data.features.length;i++){f=data.features[i];c=f.geometry.coordinates;latLng=L.latLng(c[1],c[0]);extent=f.properties.extent;if(extent){bbox=L.latLngBounds([extent[1],extent[0]],[extent[3],extent[2]])}else{bbox=L.latLngBounds(latLng,latLng)}results.push({name:this._deocodeFeatureName(f),center:latLng,bbox:bbox,properties:f.properties})}}return results},_deocodeFeatureName:function(f){var j,name;for(j=0;!name&&j<this.options.nameProperties.length;j++){name=f.properties[this.options.nameProperties[j]]}return name}}),factory:function(options){return new L.Control.Geocoder.Photon(options)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],9:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Util=require("../util");module.exports={"class":L.Class.extend({options:{serviceUrl:"http://api.what3words.com/"},initialize:function(accessToken){this._accessToken=accessToken},geocode:function(query,cb,context){Util.getJSON(this.options.serviceUrl+"w3w",{key:this._accessToken,string:query.split(/\s+/).join(".")},function(data){var results=[],loc,latLng,latLngBounds;if(data.position&&data.position.length){loc=data.words;latLng=L.latLng(data.position[0],data.position[1]);latLngBounds=L.latLngBounds(latLng,latLng);results[0]={name:loc.join("."),bbox:latLngBounds,center:latLng}}cb.call(context,results)})},suggest:function(query,cb,context){return this.geocode(query,cb,context)},reverse:function(location,scale,cb,context){Util.getJSON(this.options.serviceUrl+"position",{key:this._accessToken,position:[location.lat,location.lng].join(",")},function(data){var results=[],loc,latLng,latLngBounds;if(data.position&&data.position.length){loc=data.words;latLng=L.latLng(data.position[0],data.position[1]);latLngBounds=L.latLngBounds(latLng,latLng);results[0]={name:loc.join("."),bbox:latLngBounds,center:latLng}}cb.call(context,results)})}}),factory:function(accessToken){return new L.Control.Geocoder.What3Words(accessToken)}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"../util":11}],10:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,Control=require("./control"),Nominatim=require("./geocoders/nominatim"),Bing=require("./geocoders/bing"),MapQuest=require("./geocoders/mapquest"),Mapbox=require("./geocoders/mapbox"),What3Words=require("./geocoders/what3words"),Google=require("./geocoders/google"),Photon=require("./geocoders/photon"),Mapzen=require("./geocoders/mapzen");module.exports=L.Util.extend(Control["class"],{Nominatim:Nominatim["class"],nominatim:Nominatim.factory,Bing:Bing["class"],bing:Bing.factory,MapQuest:MapQuest["class"],mapQuest:MapQuest.factory,Mapbox:Mapbox["class"],mapbox:Mapbox.factory,What3Words:What3Words["class"],what3words:What3Words.factory,Google:Google["class"],google:Google.factory,Photon:Photon["class"],photon:Photon.factory,Mapzen:Mapzen["class"],mapzen:Mapzen.factory});L.Util.extend(L.Control,{Geocoder:module.exports,geocoder:Control.factory})}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./control":1,"./geocoders/bing":2,"./geocoders/google":3,"./geocoders/mapbox":4,"./geocoders/mapquest":5,"./geocoders/mapzen":6,"./geocoders/nominatim":7,"./geocoders/photon":8,"./geocoders/what3words":9}],11:[function(require,module,exports){(function(global){var L=typeof window!=="undefined"?window["L"]:typeof global!=="undefined"?global["L"]:null,lastCallbackId=0,htmlEscape=function(){var badChars=/[&<>"'`]/g;var possible=/[&<>"'`]/;var escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};function escapeChar(chr){return escape[chr]}return function(string){if(string==null){return""}else if(!string){return string+""}string=""+string;if(!possible.test(string)){return string}return string.replace(badChars,escapeChar)}}();module.exports={jsonp:function(url,params,callback,context,jsonpParam){var callbackId="_l_geocoder_"+lastCallbackId++;params[jsonpParam||"callback"]=callbackId;window[callbackId]=L.Util.bind(callback,context);var script=document.createElement("script");script.type="text/javascript";script.src=url+L.Util.getParamString(params);script.id=callbackId;document.getElementsByTagName("head")[0].appendChild(script)},getJSON:function(url,params,callback){var xmlHttp=new XMLHttpRequest;xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState!==4){return}if(xmlHttp.status!==200&&xmlHttp.status!==304){callback("");return}callback(JSON.parse(xmlHttp.response))};xmlHttp.open("GET",url+L.Util.getParamString(params),true);xmlHttp.setRequestHeader("Accept","application/json");xmlHttp.send(null)},template:function(str,data){return str.replace(/\{ *([\w_]+) *\}/g,function(str,key){var value=data[key];if(value===undefined){value=""}else if(typeof value==="function"){value=value(data)}return htmlEscape(value)})},htmlEscape:htmlEscape}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[10]);L.Control.Fullscreen = L.Control.extend({
    options: {
        position: 'topleft',
        title: {
            'false': 'View Fullscreen',
            'true': 'Exit Fullscreen'
        }
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-fullscreen leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-control-fullscreen-button leaflet-bar-part', container);
        this.link.href = '#';

        this._map = map;
        this._map.on('fullscreenchange', this._toggleTitle, this);
        this._toggleTitle();

        L.DomEvent.on(this.link, 'click', this._click, this);

        return container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this._map.toggleFullscreen(this.options);
    },

    _toggleTitle: function() {
        this.link.title = this.options.title[this._map.isFullscreen()];
    }
});

L.Map.include({
    isFullscreen: function () {
        return this._isFullscreen || false;
    },

    toggleFullscreen: function (options) {
        var container = this.getContainer();
        if (this.isFullscreen()) {
            if (options && options.pseudoFullscreen) {
                this._disablePseudoFullscreen(container);
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                this._disablePseudoFullscreen(container);
            }
        } else {
            if (options && options.pseudoFullscreen) {
                this._enablePseudoFullscreen(container);
            } else if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            } else {
                this._enablePseudoFullscreen(container);
            }
        }

    },

    _enablePseudoFullscreen: function (container) {
        L.DomUtil.addClass(container, 'leaflet-pseudo-fullscreen');
        this._setFullscreen(true);
        this.invalidateSize();
        this.fire('fullscreenchange');
    },

    _disablePseudoFullscreen: function (container) {
        L.DomUtil.removeClass(container, 'leaflet-pseudo-fullscreen');
        this._setFullscreen(false);
        this.invalidateSize();
        this.fire('fullscreenchange');
    },

    _setFullscreen: function(fullscreen) {
        this._isFullscreen = fullscreen;
        var container = this.getContainer();
        if (fullscreen) {
            L.DomUtil.addClass(container, 'leaflet-fullscreen-on');
        } else {
            L.DomUtil.removeClass(container, 'leaflet-fullscreen-on');
        }
    },

    _onFullscreenChange: function (e) {
        var fullscreenElement =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;

        if (fullscreenElement === this.getContainer() && !this._isFullscreen) {
            this._setFullscreen(true);
            this.fire('fullscreenchange');
        } else if (fullscreenElement !== this.getContainer() && this._isFullscreen) {
            this._setFullscreen(false);
            this.fire('fullscreenchange');
        }
    }
});

L.Map.mergeOptions({
    fullscreenControl: false
});

L.Map.addInitHook(function () {
    if (this.options.fullscreenControl) {
        this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl);
        this.addControl(this.fullscreenControl);
    }

    var fullscreenchange;

    if ('onfullscreenchange' in document) {
        fullscreenchange = 'fullscreenchange';
    } else if ('onmozfullscreenchange' in document) {
        fullscreenchange = 'mozfullscreenchange';
    } else if ('onwebkitfullscreenchange' in document) {
        fullscreenchange = 'webkitfullscreenchange';
    } else if ('onmsfullscreenchange' in document) {
        fullscreenchange = 'MSFullscreenChange';
    }

    if (fullscreenchange) {
        var onFullscreenChange = L.bind(this._onFullscreenChange, this);

        this.whenReady(function () {
            L.DomEvent.on(document, fullscreenchange, onFullscreenChange);
        });

        this.on('unload', function () {
            L.DomEvent.off(document, fullscreenchange, onFullscreenChange);
        });
    }
});

L.control.fullscreen = function (options) {
    return new L.Control.Fullscreen(options);
};
/*!
Copyright (c) 2014 Dominik Moritz

This file is part of the leaflet locate control. It is licensed under the MIT license.
You can find the project at: https://github.com/domoritz/leaflet-locatecontrol
*/
(function (factory, window) {
     // see https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#module-loaders
     // for details on how to structure a leaflet plugin.

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        if (typeof window !== 'undefined' && window.L) {
            module.exports = factory(L);
        } else {
            module.exports = factory(require('leaflet'));
        }
    }

    // attach your plugin to the global 'L' variable
    if(typeof window !== 'undefined' && window.L){
        window.L.Locate = factory(L);
    }

} (function (L) {
    L.Control.Locate = L.Control.extend({
        options: {
            position: 'topleft',
            layer: new L.LayerGroup(),  // use your own layer for the location marker
            drawCircle: true,
            follow: false,  // follow with zoom and pan the user's location
            stopFollowingOnDrag: false, // if follow is true, stop following when map is dragged (deprecated)
            // if true locate control remains active on click even if the user's location is in view.
            // clicking control will just pan to location
            remainActive: false,
            markerClass: L.circleMarker, // L.circleMarker or L.marker
            // range circle
            circleStyle: {
                color: '#136AEC',
                fillColor: '#136AEC',
                fillOpacity: 0.15,
                weight: 2,
                opacity: 0.5
            },
            // inner marker
            markerStyle: {
                color: '#136AEC',
                fillColor: '#2A93EE',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 0.9,
                radius: 5
            },
            // changes to range circle and inner marker while following
            // it is only necessary to provide the things that should change
            followCircleStyle: {},
            followMarkerStyle: {
                //color: '#FFA500',
                //fillColor: '#FFB000'
            },
            icon: 'fa fa-map-marker',  // fa-location-arrow or fa-map-marker
            iconLoading: 'fa fa-spinner fa-spin',
            circlePadding: [0, 0],
            metric: true,
            onLocationError: function(err) {
                // this event is called in case of any location error
                // that is not a time out error.
                alert(err.message);
            },
            onLocationOutsideMapBounds: function(control) {
                // this event is repeatedly called when the location changes
                control.stop();
                alert(control.options.strings.outsideMapBoundsMsg);
            },
            setView: true, // automatically sets the map view to the user's location
            // keep the current map zoom level when displaying the user's location. (if 'false', use maxZoom)
            keepCurrentZoomLevel: false,
            showPopup: true, // display a popup when the user click on the inner marker
            strings: {
                title: "Show me where I am",
                metersUnit: "meters",
                feetUnit: "feet",
                popup: "You are within {distance} {unit} from this point",
                outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
            },
            locateOptions: {
                maxZoom: Infinity,
                watch: true  // if you overwrite this, visualization cannot be updated
            }
        },

        initialize: function (options) {
            L.Map.addInitHook(function () {
                if (this.options.locateControl) {
                    this.addControl(this);
                }
            });

            for (var i in options) {
                if (typeof this.options[i] === 'object') {
                    L.extend(this.options[i], options[i]);
                } else {
                    this.options[i] = options[i];
                }
            }

            L.extend(this.options.locateOptions, {
                setView: false // have to set this to false because we have to
                               // do setView manually
            });
        },

        /**
         * This method launches the location engine.
         * It is called before the marker is updated,
         * event if it does not mean that the event will be ready.
         *
         * Override it if you want to add more functionalities.
         * It should set the this._active to true and do nothing if
         * this._active is not true.
         */
        _activate: function() {
            if (this.options.setView) {
                this._locateOnNextLocationFound = true;
            }

            if(!this._active) {
                this._map.locate(this.options.locateOptions);
            }
            this._active = true;

            if (this.options.follow) {
                this._startFollowing(this._map);
            }
        },

        /**
         * Called to stop the location engine.
         *
         * Override it to shutdown any functionalities you added on start.
         */
        _deactivate: function() {
            this._map.stopLocate();

            this._map.off('dragstart', this._stopFollowing, this);
            if (this.options.follow && this._following) {
                this._stopFollowing(this._map);
            }
        },

        /**
         * Draw the resulting marker on the map.
         *
         * Uses the event retrieved from onLocationFound from the map.
         */
        drawMarker: function(map) {
            if (this._event.accuracy === undefined) {
                this._event.accuracy = 0;
            }

            var radius = this._event.accuracy;
            if (this._locateOnNextLocationFound) {
                if (this._isOutsideMapBounds()) {
                    this.options.onLocationOutsideMapBounds(this);
                } else {
                    // If accuracy info isn't desired, keep the current zoom level
                    if(this.options.keepCurrentZoomLevel || !this.options.drawCircle){
                        map.panTo([this._event.latitude, this._event.longitude]);
                    } else {
                        map.fitBounds(this._event.bounds, {
                            padding: this.options.circlePadding,
                            maxZoom: this.options.keepCurrentZoomLevel ?
                            map.getZoom() : this.options.locateOptions.maxZoom
                        });
                    }
                }
                this._locateOnNextLocationFound = false;
            }

            // circle with the radius of the location's accuracy
            var style, o;
            if (this.options.drawCircle) {
                if (this._following) {
                    style = this.options.followCircleStyle;
                } else {
                    style = this.options.circleStyle;
                }

                if (!this._circle) {
                    this._circle = L.circle(this._event.latlng, radius, style)
                    .addTo(this._layer);
                } else {
                    this._circle.setLatLng(this._event.latlng).setRadius(radius);
                    for (o in style) {
                        this._circle.options[o] = style[o];
                    }
                }
            }

            var distance, unit;
            if (this.options.metric) {
                distance = radius.toFixed(0);
                unit =  this.options.strings.metersUnit;
            } else {
                distance = (radius * 3.2808399).toFixed(0);
                unit = this.options.strings.feetUnit;
            }

            // small inner marker
            var mStyle;
            if (this._following) {
                mStyle = this.options.followMarkerStyle;
            } else {
                mStyle = this.options.markerStyle;
            }

            if (!this._marker) {
                this._marker = this.createMarker(this._event.latlng, mStyle)
                .addTo(this._layer);
            } else {
                this.updateMarker(this._event.latlng, mStyle);
            }

            var t = this.options.strings.popup;
            if (this.options.showPopup && t) {
                this._marker.bindPopup(L.Util.template(t, {distance: distance, unit: unit}))
                ._popup.setLatLng(this._event.latlng);
            }

            this._toggleContainerStyle();
        },

        /**
         * Creates the marker.
         *
         * Should return the base marker so it is possible to bind a pop-up if the
         * option is activated.
         *
         * Used by drawMarker, you can ignore it if you have overridden it.
         */
        createMarker: function(latlng, mStyle) {
            return this.options.markerClass(latlng, mStyle);
        },

        /**
         * Updates the marker with current coordinates.
         *
         * Used by drawMarker, you can ignore it if you have overridden it.
         */
        updateMarker: function(latlng, mStyle) {
            this._marker.setLatLng(latlng);
            for (var o in mStyle) {
                this._marker.options[o] = mStyle[o];
            }
        },

        /**
         * Remove the marker from map.
         */
        removeMarker: function() {
            this._layer.clearLayers();
            this._marker = undefined;
            this._circle = undefined;
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div',
                'leaflet-control-locate leaflet-bar leaflet-control');

            this._layer = this.options.layer;
            this._layer.addTo(map);
            this._event = undefined;

            // extend the follow marker style and circle from the normal style
            var tmp = {};
            L.extend(tmp, this.options.markerStyle, this.options.followMarkerStyle);
            this.options.followMarkerStyle = tmp;
            tmp = {};
            L.extend(tmp, this.options.circleStyle, this.options.followCircleStyle);
            this.options.followCircleStyle = tmp;

            this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
            this._link.href = '#';
            this._link.title = this.options.strings.title;
            this._icon = L.DomUtil.create('span', this.options.icon, this._link);

            L.DomEvent
                .on(this._link, 'click', L.DomEvent.stopPropagation)
                .on(this._link, 'click', L.DomEvent.preventDefault)
                .on(this._link, 'click', function() {
                    var shouldStop = (this._event === undefined ||
                        this._map.getBounds().contains(this._event.latlng) ||
                        !this.options.setView || this._isOutsideMapBounds());
                    if (!this.options.remainActive && (this._active && shouldStop)) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }, this)
                .on(this._link, 'dblclick', L.DomEvent.stopPropagation);

            this._resetVariables();
            this.bindEvents(map);

            return container;
        },

        /**
         * Binds the actions to the map events.
         */
        bindEvents: function(map) {
            map.on('locationfound', this._onLocationFound, this);
            map.on('locationerror', this._onLocationError, this);
            map.on('unload', this.stop, this);
        },

        /**
         * Starts the plugin:
         * - activates the engine
         * - draws the marker (if coordinates available)
         */
        start: function() {
            this._activate();

            if (!this._event) {
                this._setClasses('requesting');
            } else {
                this.drawMarker(this._map);
            }
        },

        /**
         * Stops the plugin:
         * - deactivates the engine
         * - reinitializes the button
         * - removes the marker
         */
        stop: function() {
            this._deactivate();

            this._cleanClasses();
            this._resetVariables();

            this.removeMarker();
        },

        /**
         * Calls deactivate and dispatches an error.
         */
        _onLocationError: function(err) {
            // ignore time out error if the location is watched
            if (err.code == 3 && this.options.locateOptions.watch) {
                return;
            }

            this.stop();
            this.options.onLocationError(err);
        },

        /**
         * Stores the received event and updates the marker.
         */
        _onLocationFound: function(e) {
            // no need to do anything if the location has not changed
            if (this._event &&
                (this._event.latlng.lat === e.latlng.lat &&
                 this._event.latlng.lng === e.latlng.lng &&
                     this._event.accuracy === e.accuracy)) {
                return;
            }

            if (!this._active) {
                return;
            }

            this._event = e;

            if (this.options.follow && this._following) {
                this._locateOnNextLocationFound = true;
            }

            this.drawMarker(this._map);
        },

        /**
         * Dispatches the 'startfollowing' event on map.
         */
        _startFollowing: function() {
            this._map.fire('startfollowing', this);
            this._following = true;
            if (this.options.stopFollowingOnDrag) {
                this._map.on('dragstart', this._stopFollowing, this);
            }
        },

        /**
         * Dispatches the 'stopfollowing' event on map.
         */
        _stopFollowing: function() {
            this._map.fire('stopfollowing', this);
            this._following = false;
            if (this.options.stopFollowingOnDrag) {
                this._map.off('dragstart', this._stopFollowing, this);
            }
            this._toggleContainerStyle();
        },

        /**
         * Check if location is in map bounds
         */
        _isOutsideMapBounds: function() {
            if (this._event === undefined)
                return false;
            return this._map.options.maxBounds &&
                !this._map.options.maxBounds.contains(this._event.latlng);
        },

        /**
         * Toggles button class between following and active.
         */
        _toggleContainerStyle: function() {
            if (!this._container) {
                return;
            }

            if (this._following) {
                this._setClasses('following');
            } else {
                this._setClasses('active');
            }
        },

        /**
         * Sets the CSS classes for the state.
         */
        _setClasses: function(state) {
            if (state == 'requesting') {
                L.DomUtil.removeClasses(this._container, "active following");
                L.DomUtil.addClasses(this._container, "requesting");

                L.DomUtil.removeClasses(this._icon, this.options.icon);
                L.DomUtil.addClasses(this._icon, this.options.iconLoading);
            } else if (state == 'active') {
                L.DomUtil.removeClasses(this._container, "requesting following");
                L.DomUtil.addClasses(this._container, "active");

                L.DomUtil.removeClasses(this._icon, this.options.iconLoading);
                L.DomUtil.addClasses(this._icon, this.options.icon);
            } else if (state == 'following') {
                L.DomUtil.removeClasses(this._container, "requesting");
                L.DomUtil.addClasses(this._container, "active following");

                L.DomUtil.removeClasses(this._icon, this.options.iconLoading);
                L.DomUtil.addClasses(this._icon, this.options.icon);
            }
        },

        /**
         * Removes all classes from button.
         */
        _cleanClasses: function() {
            L.DomUtil.removeClass(this._container, "requesting");
            L.DomUtil.removeClass(this._container, "active");
            L.DomUtil.removeClass(this._container, "following");

            L.DomUtil.removeClasses(this._icon, this.options.iconLoading);
            L.DomUtil.addClasses(this._icon, this.options.icon);
        },

        /**
         * Reinitializes attributes.
         */
        _resetVariables: function() {
            this._active = false;
            this._locateOnNextLocationFound = this.options.setView;
            this._following = false;
        }
    });

    L.control.locate = function (options) {
        return new L.Control.Locate(options);
    };

    (function(){
      // leaflet.js raises bug when trying to addClass / removeClass multiple classes at once
      // Let's create a wrapper on it which fixes it.
      var LDomUtilApplyClassesMethod = function(method, element, classNames) {
        classNames = classNames.split(' ');
        classNames.forEach(function(className) {
            L.DomUtil[method].call(this, element, className);
        });
      };

      L.DomUtil.addClasses = function(el, names) { LDomUtilApplyClassesMethod('addClass', el, names); };
      L.DomUtil.removeClasses = function(el, names) { LDomUtilApplyClassesMethod('removeClass', el, names); };
    })();

    return L.Control.Locate;
}, window));
