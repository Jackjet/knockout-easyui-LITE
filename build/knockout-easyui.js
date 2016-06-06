ko.bindingHandlers.easyuiOptions={init:function(n,e,o,t,i){},update:function(n,e,o,t,i){},easyuiOptionsVersion:"0.6.2"};var utils;!function(n){var e;!function(n){n.isFunction=function(n){return"function"==typeof n},n.isNull=function(n){return null===n},n.isUndefined=function(n){return void 0===n};var e=function(n){return function(e){return null==e?void 0:e[n]}},o=Math.pow(2,53)-1,t=e("length");n.isArray=function(n){var e=t(n);return"number"==typeof e&&e>=0&&o>=e}}(e=n.object||(n.object={}));var o;!function(e){e.each=function(n,e){var o=0,t=n.length;for(o=0;t>o;o++)e(n[o],o,n)},e.all=function(n,e){var o=0,t=n.length;for(o=0;t>o;o++)if(!e(n[o]))return!1;return!0},e.any=function(n,e){var o=0,t=n.length;for(o=0;t>o;o++)if(e(n[o]))return!0;return!1},e.map=function(n,e){var o,t=Array(),i=n.length;for(o=0;i>o;o++)t[o]=e(n[o]);return t},e.findIndex=function(n,e){var o,t=n.length;for(o=0;t>o;o++)if(e(n[o]))return o;return-1},e.findIndexTuple=function(n,e){var o,t=n.length;for(o=0;t>o;o++)if(e(n[o]))return[o,n[o]];return[-1,null]},e.filter=function(n,e){var o,t=Array(),i=n.length;for(o=0;i>o;o++)e(n[o])&&t.push(n[o]);return t},e.clone=function(o){return e.map(o,n.id)},e.sequenceEqual=function(e,o,t){var i=n.array.map(e,t),r=n.array.map(o,t),a=ko.utils.compareArrays(i,r);return!n.array.any(a,function(n){return n.hasOwnProperty("index")})}}(o=n.array||(n.array={}));var t;!function(n){n.checkComponentInited=function(n,e){return!!$.data(n,e)},n.initComponent=function(n,o,t,i){var r=t(),a=r.easyuiOptions||{};return e.isFunction(a)&&(a=a()),i&&$.extend(a,i),$(n)[o](a),$(n)},n.ensureComponentInited=function(e,o,t,i){n.checkComponentInited(e,o)||n.initComponent(e,o,t,i)},n.bindDisposeEvent=function(e,o){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){n.checkComponentInited(e,o)&&$(e)[o]("destroy")})}}(t=n.component||(n.component={}));var i;!function(n){n.treeToArray=function(n){var e=Array(),t=function(n){o.each(n,function(n){e.push(n),n.children&&t(n.children)})};return t(n),e},n.clone=function(n){var e=function(n){var t=o.map(n,function(n){var o={id:n.id,text:n.text,state:n.state,checked:n.checked,attributes:n.attributes,children:null};return n.children?o.children=e(n.children):o.children=[],o});return t};return e(n)}}(i=n.tree||(n.tree={}));var r;!function(o){o.debounce=function(e,o,t){var i,r,a,u,l,s=function(){var c=n.now()-u;i=o>c&&c>=0?setTimeout(s,o-c):0,t||(l=e.apply(a,r),i||(a=r=null))};return function(){a=this,r=arguments,u=n.now();var c=t&&!i;return i||(i=setTimeout(s,o)),c&&(l=e.apply(a,r),a=r=null),l}},o.safeApply=function(n,o){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];e.isFunction(n)&&n.apply(o,t)}}(r=n.func||(n.func={})),n.convertToString=function(n){return e.isNull(n)||e.isUndefined(n)?"":n+""},n.now=Date.now||function(){return(new Date).getTime()},n.id=function(n){return n}}(utils||(utils={})),ko.bindingHandlers.calendarValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"calendar",o);var r=$(n).calendar("options"),a=e();if(!a()){var u=r.current;u&&a(u)}var l=function(e){return function(){a(r.current),e&&e.apply($(n),arguments)}};r.onSelect=l(r.onSelect)},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).calendar("options").current!==r&&$(n).calendar("moveTo",r)}},ko.bindingHandlers.comboboxSource={init:function(n,e,o,t,i){var r=utils.component.initComponent(n,"combobox",o),a=r.combobox("options"),u=a.onLoadSuccess;a.onLoadSuccess=function(o){var t=e();t(o),u&&u.apply($(n),arguments)},utils.component.bindDisposeEvent(n,"combobox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).combobox("loadData",r)}},ko.bindingHandlers.comboboxValues={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combobox",o);var r=$(n).combobox("getValues");utils.array.all(r,function(n){return!n})&&$(n).combobox("setValues",[]);var a=e();a()&&0!==a().length||(r=$(n).combobox("getValues"),a(r));var u=$(n).combobox("options");u.multiple=!0;var l=function(e){return function(){r=$(n).combobox("getValues"),a(r),e&&e.apply($(n),arguments)}};u.onSelect=l(u.onSelect),u.onUnselect=l(u.onUnselect),utils.component.bindDisposeEvent(n,"combobox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).combobox("setValues",r)}},ko.bindingHandlers.comboboxValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combobox",o);var r=e();if(!r()){var a=$(n).combobox("getValue");a&&r(a)}var u=$(n).combobox("options");u.multiple=!1;var l=function(e){return function(){r($(n).combobox("getValue")),e&&e.apply($(n),arguments)}};u.onSelect=l(u.onSelect),u.onUnselect=l(u.onUnselect),utils.component.bindDisposeEvent(n,"combobox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).combobox("getValue")!==r&&$(n).combobox("setValue",r)}},ko.bindingHandlers.comboboxText={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combobox",o);var r=e();if(!r()){var a=$(n).combobox("getText");a&&r(a)}var u=$(n).combobox("options"),l=$(n).combo("options");u.multiple=!1;var s=function(e){return function(){setTimeout(function(){var e=$.data(n).combo;r(e.hasOwnProperty("previousText")?e.previousText:$.data(n).combo.previousValue)},1),e&&e.apply($(n),arguments)}};l.onChange=s(l.onChange),utils.component.bindDisposeEvent(n,"combobox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).combobox("getText")!==r&&$(n).combobox("setText",r)}},ko.bindingHandlers.combogridSource={init:function(n,e,o,t,i){var r=utils.component.initComponent(n,"combogrid",o),a=r.combogrid("options"),u=a.onLoadSuccess;a.onLoadSuccess=function(o){var t=e();t(o.rows),u&&u.apply($(n),arguments),utils.component.bindDisposeEvent(n,"combogrid")}},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e()),a=$(n).combogrid("options"),u=function(n){return n[a.idField]},l=$(n).combogrid("grid").datagrid("getData").rows;utils.array.sequenceEqual(l,r,u)||$(n).combogrid("grid").datagrid("loadData",r)}},ko.bindingHandlers.combogridValues={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combogrid",o,{multiple:!0});var r=$(n).combogrid("getValues");utils.array.all(r,function(n){return!n})&&$(n).combogrid("setValues",[]);var a=e();a()&&0!==a().length||(r=$(n).combogrid("getValues"),r&&a(r));var u=$(n).combogrid("grid"),l=$(n).combogrid("options"),s=u.datagrid("options"),c=$(n).combo("options");l.multiple=!0,s.singleSelect=!1;var d=function(e){return function(){var o=$(n).combogrid("getValues");utils.array.sequenceEqual(a(),o,utils.id)||(a(o),e&&e.apply($(n),arguments))}};c.onChange=d(c.onChange),utils.component.bindDisposeEvent(n,"combogrid")},update:function(n,e,o,t,i){var r=utils.array.map(ko.utils.unwrapObservable(e()),function(n){return utils.convertToString(n)}),a=$(n).combogrid("getValues");$(n).combogrid("options");r?utils.array.sequenceEqual(a,r,utils.id)||$(n).combogrid("setValues",r):$(n).combogrid("clear")}},ko.bindingHandlers.combogridValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combogrid",o,{multiple:!1});var r=e();if(!r()){var a=$(n).combogrid("getValue");a&&r(a)}var u=$(n).combogrid("grid"),l=$(n).combogrid("options"),s=u.datagrid("options"),c=$(n).combo("options");l.multiple=!1,s.singleSelect=!0;var d=function(e){return function(){var o=$(n).combogrid("getValue");r()!==o&&(r(o),e&&e.apply($(n),arguments))}};c.onChange=d(c.onChange),utils.component.bindDisposeEvent(n,"combogrid")},update:function(n,e,o,t,i){var r=utils.convertToString(ko.utils.unwrapObservable(e())),a=$(n).combogrid("getValue");$(n).combogrid("options");r?a!==r&&$(n).combogrid("setValue",r):$(n).combogrid("clear")}},ko.bindingHandlers.combotreeSource={init:function(n,e,o,t,i){var r=utils.component.initComponent(n,"combotree",o),a=r.combotree("options"),u=a.onLoadSuccess;a.onLoadSuccess=function(o,t){var i=e(),r=utils.tree.treeToArray(i()||[]),a=utils.tree.treeToArray($(n).combotree("tree").tree("getRoots"));utils.array.sequenceEqual(r,a,utils.id)||(i(utils.tree.clone(t)),u&&u.apply($(n),arguments))},utils.component.bindDisposeEvent(n,"combotree")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e())||[],a=utils.tree.treeToArray($(n).combotree("tree").tree("getRoots")),u=utils.tree.treeToArray(r);utils.array.sequenceEqual(a,u,utils.id)||$(n).combotree("loadData",utils.tree.clone(r))}},ko.bindingHandlers.combotreeValues={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combotree",o,{multiple:!0});var r=$(n).combotree("getValues");utils.array.all(r,function(n){return!n})&&$(n).combotree("setValues",[]);var a=e();a()&&0!==a().length||(r=$(n).combogrid("getValues"),r&&a(r));var u=function(e){return function(){var o=$(n).combotree("getValues");utils.array.sequenceEqual(a(),o,utils.id)||(a(o),e&&e.apply($(n),arguments))}},l=$(n).combotree("options"),s=$(n).combo("options");l.multiple===!1?(l.onChange=u(l.onChange),l.multiple=!0,$(n).combotree(l)):s.onChange=u(s.onChange),utils.component.bindDisposeEvent(n,"combotree")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e()),a=r?utils.array.map(r,utils.convertToString):[],u=$(n).combotree("getValues");a.length>0?utils.array.sequenceEqual(u,a,utils.id)||$(n).combotree("setValues",a):$(n).combotree("clear")}},ko.bindingHandlers.combotreeValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"combotree",o,{multiple:!1});var r=e();if(!r()){var a=$(n).combogrid("getValue");a&&r(a)}var u=function(e){return function(){var o=$(n).combotree("getValue");r!==o&&(r(o),e&&e.apply($(n),arguments))}},l=$(n).combotree("options"),s=$(n).combo("options");l.multiple===!0?(l.onChange=u(l.onChange),l.multiple=!1,$(n).combotree(l)):s.onChange=u(s.onChange),utils.component.bindDisposeEvent(n,"combotree")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e()),a=$(n).combotree("getValue");r?r!==a&&$(n).combotree("setValue",r):$(n).combotree("clear")}},function(){var n=function(n){ko.utils.domNodeDisposal.addDisposeCallback(n,function(){utils.component.checkComponentInited(n,"datagrid")&&$(n).data("datagrid",null)})},e=function(n){return $(n).datagrid("options").idField||"id"};ko.bindingHandlers.datagridSource={init:function(e,o,t,i,r){var a=utils.component.initComponent(e,"datagrid",t),u=a.datagrid("options"),l=u.onLoadSuccess;u.onLoadSuccess=function(n){var t=o();t(n.rows),utils.func.safeApply(l,$(e),arguments)},n(e)},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).datagrid("loadData",r)}},ko.bindingHandlers.datagridValues={init:function(o,t,i,r,a){utils.component.ensureComponentInited(o,"datagrid",i,{singleSelect:!1});var u=e(o),l=t();if(l()&&l().length>0){var s=utils.array.clone($(o).datagrid("getSelections"));l(s)}var c=$(o).datagrid("options");c.singleSelect=!1;var d=function(n){return function(){var e=$(o).datagrid("getSelections");utils.array.sequenceEqual(l(),e,function(n){return n[u]})||(l(utils.array.clone(e)),utils.func.safeApply(n,$(o),arguments))}};c.onSelect=d(c.onSelect),c.onUnselect=d(c.onUnselect),c.onSelectAll=d(c.onSelectAll),c.onUnselectAll=d(c.onUnselectAll),n(o)},update:function(n,o,t,i,r){var a=e(n),u=ko.utils.unwrapObservable(o()),l=$(n).datagrid("options");if(u&&u.length>0){var s=$(n).datagrid("getData"),c=[],d=[];utils.array.each(u,function(n,e,o){var t=utils.array.findIndexTuple(s.rows,function(e){return e[a]==n[a]}),i=t[0],r=t[1];r!==n&&(r?u[e]=r:d.push(e)),i>=0&&c.push(i)}),utils.array.each(d,function(n){u.splice(n,1)});var p=l.onUnselectAll,b=l.onSelect;l.onUnselectAll=l.onSelect=function(){},$(n).datagrid("unselectAll"),utils.array.each(c,function(e){$(n).datagrid("selectRow",e)}),l.onUnselectAll=p,l.onSelect=b}else $(n).datagrid("unselectAll")}},ko.bindingHandlers.datagridValue={init:function(o,t,i,r,a){utils.component.ensureComponentInited(o,"datagrid",i,{singleSelect:!0});var u=(e(o),t());if(u()){var l=$(o).datagrid("getSelected");u(l)}var s=$(o).datagrid("options");s.singleSelect=!0;var c=function(n){return function(){var e=$(o).datagrid("getSelected");e!==u()&&u(e),utils.func.safeApply(n,$(o),arguments)}},d=function(n){return function(){u(null),utils.func.safeApply(n,$(o),arguments)}},p=function(n){return function(){var e=$(o).datagrid("getData");u(e.rows),utils.func.safeApply(n,$(o),arguments)}};s.onSelect=c(s.onSelect),s.onUnselect=c(s.onUnselect),s.onSelectAll=p(s.onSelectAll),s.onUnselectAll=d(s.onUnselectAll),n(o)},update:function(n,o,t,i,r){var a=e(n),u=o();$(n).datagrid("options");if(u()){if(utils.object.isArray(u()))return;var l=$(n).datagrid("getSelected");if(l&&l[a]===u()[a])return void(l!==u()&&u(l));var s=$(n).datagrid("getData"),c=utils.array.findIndexTuple(s.rows,function(n){return n[a]===u()[a]}),d=c[0];c[1];0>d?u(null):$(n).datagrid("selectRow",d)}else $(n).datagrid("unselectAll")}}}(),ko.bindingHandlers.dateboxValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"datebox",o);var r=$(n).datebox("options"),a=e();if(!a()){var u=$(n).datebox("getValue");u&&a(u)}var l=function(e){return function(){a($(n).datebox("getValue")),utils.func.safeApply(e,$(n),arguments)}};r.onSelect=l(r.onSelect),utils.component.bindDisposeEvent(n,"datebox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).datebox("getValue")!==r&&$(n).datebox("setValue",r)}},ko.bindingHandlers.datetimeboxValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"datetimebox",o);var r=$(n).combo("options"),a=e();if(!a()){var u=$(n).datetimebox("getValue");u&&a(u)}var l=function(e){return function(){a($(n).datetimebox("getValue")),utils.func.safeApply(e,$(n),arguments)}};r.onChange=l(r.onChange),utils.component.bindDisposeEvent(n,"datetimebox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).datetimebox("getValue")!==r&&$(n).datetimebox("setValue",r)}},ko.bindingHandlers.numberBoxValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"numberbox",o);var r=e();r()||r(parseFloat($(n).numberbox("getValue")));var a=$(n).textbox||$(n).numberbox,u=a.call($(n),"options"),l=u.onChange;u.onChange=function(o,t){o=parseFloat(o),r=e(),r()!==o&&(r(o),utils.func.safeApply(l,$(n),arguments))},utils.component.bindDisposeEvent(n,"numberbox")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).numberbox("setValue",r),$(n).numberbox("getValue")?$(n).removeClass("validatebox-invalid"):$(n).numberbox("options").required&&$(n).addClass("validatebox-invalid")}},ko.bindingHandlers.numberspinnerValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"numberspinner",o);var r=e();r()||r(parseFloat($(n).numberspinner("getValue")));var a=$(n).textbox||$(n).numberbox,u=a.call($(n),"options"),l=u.onChange;u.onChange=function(o,t){o=parseFloat(o),r=e(),r()!==o&&(r(o),utils.func.safeApply(l,$(n),arguments))},utils.component.bindDisposeEvent(n,"numberspinner")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).numberspinner("setValue",r);var a=$(n).numberspinner("getValue");a?($(n).removeClass("validatebox-invalid"),a!==r&&e()(parseFloat(a))):$(n).numberspinner("options").required&&$(n).addClass("validatebox-invalid")}},ko.bindingHandlers.progressbarValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"progressbar",o);var r=e();r()||r($(n).progressbar("getValue"));var a=$(n).progressbar("options"),u=a.onChange;a.onChange=function(n,o){n=parseFloat(n);var t=e();t()!==n&&(t(n),u&&u.apply(this,arguments))},utils.component.bindDisposeEvent(n,"progressbar")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).progressbar("setValue",r);var a=$(n).progressbar("getValue");r!==a&&e()(a)}},ko.bindingHandlers.sliderValue={init:function(n,e,o,t,i){utils.component.ensureComponentInited(n,"slider",o);var r=e();r()||r($(n).slider("getValue"));var a=$(n).slider("options"),u=a.onChange;a.onChange=function(n,e){n!==r()&&(r(n),u&&u.apply(this,arguments))},utils.component.bindDisposeEvent(n,"slider")},update:function(n,e,o,t,i){var r=ko.utils.unwrapObservable(e());$(n).slider("getValue")!==r&&$(n).slider("setValue",r)}},ko.bindingHandlers.window={init:function(n,e,o,t,i){setTimeout(function(){utils.component.ensureComponentInited(n,"window",o,{closed:!0}),ko.computed(function(){var o=ko.unwrap(e());o?$(n).window("open"):$(n).window("close")})},1)}};
//# sourceMappingURL=knockout-easyui.js.map
