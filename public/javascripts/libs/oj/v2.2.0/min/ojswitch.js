/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,g){(function(){a.Pa("oj.ojSwitch",g.oj.editableValue,{version:"1.1.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:!1,readOnly:!1,required:!1,title:"",value:!1},refresh:function(){this._super();this.ab()},widget:function(){return this.Fo},getNodeBySubId:function(a){var c,d=this.widget();c=null==a||null==a.subId?d:null;return c||(a=a.subId,"oj-switch-thumb"!==a&&"oj-switch-track"!==a)?c||null:d.find("."+a)[0]},
getSubIdByNode:function(a){var c=g(this.element).attr("id"),d,e=null;null!=a&&(g(a).hasClass("oj-switch-track")||g(a).hasClass("oj-switch-thumb"))&&(d=g(a).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"),c===d&&g(a).hasClass("oj-switch-track")?e={subId:"oj-switch-track"}:c===d&&g(a).hasClass("oj-switch-thumb")&&(e={subId:"oj-switch-thumb"}));return e},Ka:{hoa:"SwitchOFF",ioa:"SwitchON"},Yf:function(b,c){var d;this._super(b,c);a.Ge.Ap([{ha:"disabled",Td:!0},{ha:"readonly",option:"readOnly",
Td:!0},{ha:"required",Td:!1,xh:function(){return!1}},{ha:"checked",option:"value",Td:!1,xh:function(a){return a?!0:!1}},{ha:"title"}],c,this);d=this.option("value");this.option({required:!1,value:!!d},{_context:{Ed:!0,nb:!0}})},_ComponentCreate:function(){this._super();if(!this.element.is("input"))throw Error("ojSwitch can be bound to INPUT only.");this.e$=this.element.css("display");this.element.css("display","none").attr("type","checkbox").attr("checked",this.option("value")).attr("tabindex","-1").attr("disabled",
this.option("disabled")).attr("readonly",this.option("readOnly"));this.Fo=this.pe?g(this.pe):this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent();this.Fo.addClass("oj-switch oj-component oj-form-control");this.Fo.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");this.Am=this.Fo.find(".oj-switch-thumb");this.Am.attr("role","switch checkbox");this.RCa(this.element,this.Am);
this.ab()},RCa:function(a,c){var d=a.prop("id"),e=a.attr("aria-labelledby"),f=a.attr("aria-label");f?c.attr("aria-label",f):e?c.attr("aria-labelledby",e):d&&(d=g("label[for\x3d'"+d+"']"))&&(d.attr("id")?c.attr("aria-labelledby",d.attr("id")):c.attr("aria-label",g(d).text()))},ab:function(){var a=g(this.widget()),c=this.option("title");this.Bn();if(void 0!==a){this.element.attr("checked",this.option("value"));a.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");g(this.Am).attr("tabindex",
"0");g(this.Am).html("");if(this.option("disabled")||this.option("readOnly"))this.option("disabled")?a.addClass("oj-disabled"):(a.addClass("oj-read-only"),g(this.Am).html(this.zDa())),g(this.Am).removeAttr("tabindex");this.option("value")&&a.addClass("oj-selected");void 0!==c&&g(this.Am).attr("title",c);g(this.Am).attr("aria-checked",this.option("value"));g(this.Am).removeAttr("aria-disabled");a.removeAttr("aria-disabled");this.Ou()||g(this.Am).attr("aria-disabled","true")}},zDa:function(){var a=
this.Ka.hoa;this.option("value")&&(a=this.Ka.ioa);return this.F(a)},Bn:function(){this._off(this.Fo,"keydown keyup mousedown mouseup mouseleave mouseenter touchstart");this.Ou()&&(this._on(this.Fo,this.oEa),this.We(this.Fo));this._focusable({element:this.Am,applyHighlight:!0})},oEa:{keydown:function(a){if(a.which===g.ui.keyCode.ENTER||a.which===g.ui.keyCode.SPACE)g(a.currentTarget).addClass("oj-active"),a.preventDefault()},keyup:function(a){a.which!==g.ui.keyCode.ENTER&&a.which!==g.ui.keyCode.SPACE||
this.yc(!this.option("value"),a)},mousedown:function(a){1===a.which&&g(a.currentTarget).addClass("oj-active")},mouseup:function(a){1===a.which&&this.yc(!this.option("value"),a)},mouseleave:function(a){1===a.which&&g(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){1===a.which&&g(a.currentTarget).addClass("oj-active")},touchstart:function(a){this.yc(!this.option("value"),a);a.preventDefault()}},_GetDefaultStyleClass:function(){return"oj-switch"},JMa:function(){return"switch checkbox"},
_destroy:function(){this.Ou()&&this.pQ(this.Fo);this.Fo.find(".oj-switch-track").remove();a.C.unwrap(this.element);this.hy(this.element);return this._super()},_GetMessagingLauncherElement:function(){return this.Fo},Xf:function(){return this.Am},_setOption:function(a,c,d){switch(a){case "disabled":case "readOnly":case "value":c=!!c;break;case "required":c=!1;break}this._super(a,c,d);this.ab()}})})();a.Components.Wa("ojSwitch","editableValue",{properties:{disabled:{type:"boolean"},readOnly:{type:"boolean"},
title:{type:"string"},value:{type:"boolean",writeback:!0}},methods:{getNodeBySubId:{},getSubIdByNode:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"input",_widgetName:"ojSwitch"}});a.Components.register("oj-switch",a.Components.getMetadata("ojSwitch"))});