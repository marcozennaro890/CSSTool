/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a){this.Init(a.u(),a.ag,a);this.fe=a}function c(a){this.Init(a)}a.Ei={};a.Ei.zn=function(){return a.B.Wa()};a.v.F(a.Ei,a.v);a.Ei.gf=function(a,b,c,h){c=(c-a)*h;a=b-a;return 0==c||0==a?0:c/a};a.Ei.Pi=function(a,b,c,h){b=c*(b-a);return 0==b||0==h?a:b/h+a};a.Db=function(a,b,c){this.Init(a,b,c)};a.v.F(a.Db,a.ma);a.Db.K0a=10;a.Db.BZa=40;a.Db.wZa=20;a.Db.P6=20;a.Db.nFa=5;a.Db.pFa=1;a.Db.prototype.Init=function(c,e,f){a.Db.C.Init.call(this,c);this.Cc=e;this.hb=f;this.kL=this.JR()?
7:6;if(null!=this.Cc||null!=this.hb)this.H=new b(this),this.H.Lf(this),a.Ei.zn()?(this.Ya(a.TouchEvent.Zi,this.rZ,!1,this),this.Ya(a.TouchEvent.Yo,this.OBa,!1,this),this.Ya(a.TouchEvent.Um,this.f7,!1,this),this.Ya(a.MouseEvent.Ce,this.KN,!1,this)):(this.Ya(a.MouseEvent.yj,this.b7,!1,this),this.Ya(a.MouseEvent.vi,this.a7,!1,this),this.Ya(a.MouseEvent.Ce,this.KN,!1,this),this.Ya(a.KeyboardEvent.us,this.aT,!1,this),this.Ya(a.KeyboardEvent.uv,this.iia,!1,this));this.cpa=0};a.Db.prototype.Om=function(a,
b,c){null==c&&(c=this.xb);a=this.gf(a);var h=this.gf(b);a<this.Gz||h>this.iea()||(b=Math.max(h-a,this.kea()),0<b&&0<=a&&h<=c&&(h=this.ut(),this.$q()?this.kN(h,c-(a+b)):this.kN(h,a),this.kga(h,b),this.X7()))};a.Db.prototype.IR=function(){return null==this.R$?!1:-1!=a.na.lb(this.R$,"zoom")};a.Db.prototype.Lob=function(){return"off"!==this.d8a};a.Db.prototype.ta=function(b,c,f){if(null==b){var h=this.ac,k=this.Ic,l=this.ut(),n=this.Dw(l);null!=l&&0!=n&&(this.bPa=a.Ei.Pi(h,k,n,this.xb));this.Gl()}null!=
c&&null!=f&&(this.xb=c,this.Kb=f);b&&(b=this.oD(b),this.Dv(b));b=null!=this.Cc||null!=this.hb;this.KRa(c,f);b&&this.Pjb(c,f);this.pub(c,f);this.wqb(c,f);this.gub(c,f);this.exa(c,f);b&&(this.rjb(c,f),this.JR()&&(this.RV=this.Ljb()),this.oub());null!=this.pLa&&(this.cpa=Math.max(0,a.Ei.gf(this.ac,this.Ic,this.pLa,this.zb)));0<this.cpa&&this.Lpb(this.cpa)};a.Db.prototype.kUa=function(){return new c(this)};a.Db.prototype.oD=function(a){return this.kUa(a).parse(a)};a.Db.prototype.Dv=function(a){this.ac=
a.start;this.Ic=a.end;this.zb=a.width;this.bPa=a.Gxa;this.ena=a.currentTime;this.pLa=a.Hob;this.d8a=a.fRa;this.Gz=Math.max(0,a.Cpb);this.TV=Math.max(0,a.Lrb);isNaN(this.Gz)&&(this.Gz=0);isNaN(this.TV)&&(this.TV=0);this.bQ=a.orientation;this.geb=a.kWa;this.adb=a.Fwa;null!=a.pSa&&(this.R$=a.pSa.split(" "));null!=a.Swa&&0<a.Swa&&(this.LMa=a.Swa);this.N8a=a.Lib;this.J2=a.NXa;null!=a.NXa&&(this.I2=this.J2.Xtb);this.Sna=a.Fkb;this.O8a=a.borderTopStyle;this.jma=a.borderTopColor;this.Wca=a.Fya;this.Jhb=a.WXa;
this.Rhb=a.Nya;this.Phb=a.Lya;this.Lhb=a.Hya;this.Nhb=a.Jya;this.Qhb=a.Mya;this.Ohb=a.Kya;this.Khb=a.Gya;this.Mhb=a.Iya;this.jcb=a.ewa;this.E0=a.bwa;this.Joa=a.NUa;this.bLa=a.QUa;this.XKa=a.OUa;this.feb=a.axa;this.j$a=a.uta;this.phb=a.rya;this.nhb=a.LXa;this.ohb=a.MXa;this.eMa=a.MVa;this.pdb=a.LVa;this.gPa=a.OWa;this.ugb=a.NWa};a.Db.prototype.gf=function(b){return Math.max(0,a.Ei.gf(this.ac,this.Ic,b,this.xM()))+this.Gz};a.Db.prototype.Pi=function(b){return a.Ei.Pi(this.ac,this.Ic,Math.max(0,b-this.Gz),
this.xM())};a.Db.prototype.Mo=function(){return"true"==this.adb};a.Db.prototype.$q=function(){return this.Mo()&&!this.Sb()};a.Db.prototype.Sb=function(){return"vertical"==this.bQ};a.Db.prototype.gfa=function(){return"above"==this.geb};a.Db.prototype.xM=function(){return this.Sb()?this.Kb-this.Gz-this.TV:this.xb-this.Gz-this.TV};a.Db.prototype.iea=function(){return this.Sb()?this.Kb-this.TV:this.xb-this.TV};a.Db.prototype.kea=function(){return null!=this.hqa?this.hqa:null!=this.LMa?this.hqa=a.Ei.gf(this.ac,
this.Ic,this.ac+this.LMa,this.xM()):a.Db.K0a};a.Db.prototype.Zda=function(){return a.Ei.zn()?this.eX()/2:0};a.Db.prototype.eX=function(){return a.Ei.zn()?30:10};a.Db.prototype.KR=function(a){var b=a.getId();return"lh"==b||"rh"==b||"lhb"==b||"rhb"==b||"grpy"==b||"lbgrh"==b||"rbgrh"==b||null!=a.getParent()&&"grpy"==a.getParent().getId()};a.Db.prototype.AR=function(){if(null==this.J2)return 0;if(null==this.K2){var b=parseInt(this.J2.width,10);this.K2=!isNaN(b)&&b<this.xb?b:a.Db.BZa}return this.K2};a.Db.prototype.lF=
function(){if(null==this.J2)return 0;if(null==this.hQa){var b=parseInt(this.J2.height,10);this.hQa=!isNaN(b)&&b<this.Kb?b:a.Db.wZa}return this.hQa};a.Db.prototype.tea=function(b){return a.Ei.zn()&&null!=b.targetTouches?0<b.targetTouches.length?b.targetTouches[0].pageX:null:b.pageX};a.Db.prototype.uea=function(b){return a.Ei.zn()&&null!=b.targetTouches?0<b.targetTouches.length?b.targetTouches[0].pageY:null:b.pageY};a.Db.prototype.GC=function(){return!1};a.Db.prototype.ut=function(){return this.jb(1)};
a.Db.prototype.eea=function(){return this.GC()?this.jb(3):null};a.Db.prototype.j4=function(){return this.GC()?this.jb(4):null};a.Db.prototype.ETa=function(){return this.GC()&&!this.IR()?this.jb(5):null};a.Db.prototype.eva=function(){return this.GC()&&!this.IR()?this.jb(6):null};a.Db.prototype.Jua=function(){return this.jb(this.Pb()-this.kL)};a.Db.prototype.fva=function(){return this.jb(this.Pb()-(this.kL-1))};a.Db.prototype.FTa=function(){return this.jb(this.Pb()-(this.kL-2))};a.Db.prototype.uUa=
function(){return this.jb(this.Pb()-(this.kL-3))};a.Db.prototype.LSa=function(){return this.jb(this.Pb()-(this.kL-4))};a.Db.prototype.JUa=function(){return this.jb(this.Pb()-(this.kL-5))};a.Db.prototype.kY=function(a,b,c){this.Sb()?(-1!=b&&a.Hl(b),-1!=c&&a.Il(c)):(-1!=b&&a.eo(b),-1!=c&&a.yn(c))};a.Db.prototype.Q3=function(a){return this.Sb()?a.Xr():a.Wr()};a.Db.prototype.QU=function(a){a=a.target;if(null!=a){var b=a.getId();if(null==b)return null;if("_border"==b.substr(b.length-7))return this.eua(a);
if("tick"!=b.substr(0,4)&&"ltb"!=b&&"rtb"!=b&&"bb"!=b&&"tab"!=b)return a}return null};a.Db.prototype.xVa=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||this.KR(a)?!0:!1};a.Db.prototype.JR=function(){return window&&window.JR};a.Db.prototype.KRa=function(b,c){var f=new a.Rect(this.u(),0,0,b,c,"bg");f.ib(this.feb);f.hd();this.A(f);return f};a.Db.prototype.Pjb=function(b,c){var f=this.Sb(),h=f?new a.Rect(this.u(),0,0,b,0,"window"):new a.Rect(this.u(),0,0,0,c,"window");h.ib(this.Wca,
this.Jhb);h.hd();if(!this.IR()){var k=this.eX(),l=this.Zda();if(f){var n=(b-36)/2,m=a.P.moveTo(n,0)+a.P.$e(n+3,6,n+8,8)+a.P.lineTo(n+28,8)+a.P.$e(n+33,6,n+36,0);a.P.closePath();var r=a.P.moveTo(n,0)+a.P.$e(n+3,-6,n+8,-8)+a.P.lineTo(n+28,-8)+a.P.$e(n+33,-6,n+36,0);a.P.closePath();var q=new a.Rect(this.u(),0,0,b,k,"lhb"),k=new a.Rect(this.u(),0,0,b,k,"rhb"),v="row-resize";if(this.Joa)var x=this.sda(b,10),n=this.sda(b,10);else x=this.rda(n),n=this.rda(n)}else n=(c-36)/2,m=a.P.moveTo(0,n)+a.P.$e(6,n+
3,8,n+8)+a.P.lineTo(8,n+28)+a.P.$e(6,n+33,0,n+36),a.P.closePath(),r=a.P.moveTo(0,n)+a.P.$e(-6,n+3,-8,n+8)+a.P.lineTo(-8,n+28)+a.P.$e(-6,n+33,0,n+36),a.P.closePath(),q=new a.Rect(this.u(),0-l,0,k,c,"lhb"),k=new a.Rect(this.u(),l,0,k,c,"rhb"),v="col-resize",this.Joa?(x=this.sda(10,c),n=this.sda(10,c)):(x=this.rda(n),n=this.rda(n));q.ib(this.Wca,0);k.ib(this.Wca,0);q.hd();k.hd();m=new a.vb(this.u(),m,"lh");r=new a.vb(this.u(),r,"rh");m.ib(this.E0);m.Tb(this.E0);r.ib(this.E0);r.Tb(this.E0);this.Wca==
this.E0&&(m.hd(),r.hd());q.setCursor(v);k.setCursor(v);m.setCursor(v);r.setCursor(v);x.setCursor(v);n.setCursor(v);h.A(q);h.A(m);h.A(x);h.A(k);h.A(r);h.A(n)}h.setCursor("move");this.A(h);h=f?this.Mo()?new a.Gc(this.u(),this.AR(),0,this.AR(),c,"tab"):new a.Gc(this.u(),b-this.AR(),0,b-this.AR(),c,"tab"):this.gfa()?new a.Gc(this.u(),0,this.lF(),b,this.lF(),"tab"):new a.Gc(this.u(),0,c-this.lF(),b,c-this.lF(),"tab");h.Tb(this.nhb,this.ohb);h.hd();this.iQa=h;this.A(h);this.GC()&&(f?(h=new a.Rect(this.u(),
0,0,b,0,"lbg"),q=new a.Rect(this.u(),0,0,b,0,"rbg")):(h=new a.Rect(this.u(),0,0,0,c,"lbg"),q=new a.Rect(this.u(),0,0,0,c,"rbg")),h.ib(this.eMa,this.pdb),this.A(h),q.ib(this.gPa,this.ugb),this.A(q),a.Ei.zn()&&void 0!=l&&(this.Zda(),f?(f=new a.Rect(this.u(),0,0,b,l,"lbgrh"),l=new a.Rect(this.u(),0,0,b,l,"rbgrh")):(f=new a.Rect(this.u(),0,0,l,c,"lbgrh"),l=new a.Rect(this.u(),0,0,l,c,"rbgrh")),f.ib(this.eMa,0),this.A(f),l.ib(this.gPa,0),this.A(l)))};a.Db.prototype.sda=function(b,c){var f=new a.Image(this.u(),
this.Joa,(b-this.bLa)/2,(c-this.XKa)/2,this.bLa,this.XKa,"grpy");f.ob(!1);return f};a.Db.prototype.rda=function(b){var c=new a.ma(this.u(),"grpy"),f=this.jcb;if(this.Sb()){var h=8+b;b=3;for(var k=0;9>k;k++){var l=new a.Gc(this.u(),h+2*k,b,h+2*k+1,b,"dot1"+k);l.Tb(f);c.A(l);b+=2;l=new a.Gc(this.u(),h+1+2*k,b,h+1+2*k+1,b,"dot2"+k);l.Tb(f);c.A(l);b+=2;l=new a.Gc(this.u(),h+2*k,b,h+2*k+1,b,"dot3"+k);l.Tb(f);c.A(l);b=3}l=new a.Gc(this.u(),h+18,b,h+18+1,b,"dot4");l.Tb(f);c.A(l);b+=4;l=new a.Gc(this.u(),
h+18,b,h+18+1,b,"dot5")}else{h=3;b=8+b;for(k=0;9>k;k++)l=new a.Gc(this.u(),h,b+2*k,h,b+2*k+1,"dot1"+k),l.Tb(f),c.A(l),h+=2,l=new a.Gc(this.u(),h,b+1+2*k,h,b+1+2*k+1,"dot2"+k),l.Tb(f),c.A(l),h+=2,l=new a.Gc(this.u(),h,b+2*k,h,b+2*k+1,"dot3"+k),l.Tb(f),c.A(l),h=3;l=new a.Gc(this.u(),h,b+18,h,b+18+1,"dot4");l.Tb(f);c.A(l);h+=4;l=new a.Gc(this.u(),h,b+18,h,b+18+1,"dot5")}l.Tb(f);c.A(l);c.hd();return c};a.Db.prototype.oub=function(){var b=this.Sb(),c=this.ut(),f=this.xM(),h=b?this.Kb:this.xb,k=this.zb,
l=this.ac,n=this.Ic,b=this.bPa,m=a.Ei.Pi(l,n,0,k),k=a.Ei.Pi(l,n,h,k),m=this.gf(m),h=Math.min(h,this.gf(k)),b=this.gf(b),h=h-m;this.$q()?this.kN(c,f-b-h):this.kN(c,b);this.kga(c,h);this.X7();this.dV=this.Xib(f)};a.Db.prototype.rjb=function(b,c){var f=this.ut(),h=a.Db.pFa/2;if(this.Sb())var k=f.kb(),l=k+h,n=k+f.getHeight(),m=n-h,r=0,q=h,v=b-h,h=new a.Gc(this.u(),r,l,b,l,"lh"),x=new a.Gc(this.u(),r,m,b,m,"rh"),u=new a.Gc(this.u(),q,0,q,k,"ltb"),A=new a.Gc(this.u(),q,n,q,c,"rtb"),m=new a.Gc(this.u(),
v,k,v,n,"bb"),k=new a.Gc(this.u(),q,k,q,n,"tb");else k=0,l=k+h,n=c,m=n-h,r=f.Va(),q=r+h,f=r+f.getWidth(),v=f-h,h=new a.Gc(this.u(),q,k,q,n,"lh"),x=new a.Gc(this.u(),v,k,v,n,"rh"),u=new a.Gc(this.u(),0,l,r+1,l,"ltb"),A=new a.Gc(this.u(),f-1,l,b,l,"rtb"),m=new a.Gc(this.u(),r,m,f,m,"bb"),k=new a.Gc(this.u(),r,l,f,l,"tb");h.hd();x.hd();u.hd();A.hd();m.hd();k.hd();"none"!=this.Nhb&&h.Tb(this.Mhb);this.A(h);"none"!=this.Phb&&x.Tb(this.Ohb);this.A(x);"none"!=this.O8a&&this.jma&&(u.Tb(this.jma),A.Tb(this.jma));
this.A(u);this.A(A);"none"!=this.Lhb&&m.Tb(this.Khb);this.A(m);"none"!=this.Rhb&&k.Tb(this.Qhb);this.A(k)};a.Db.prototype.Ljb=function(){var b=this.Sb()?a.P.moveTo(6,0)+a.P.lineTo(0,5)+a.P.lineTo(5,5)+a.P.lineTo(5,17)+a.P.lineTo(0,17)+a.P.lineTo(6,22)+a.P.lineTo(12,17)+a.P.lineTo(7,17)+a.P.lineTo(7,5)+a.P.lineTo(12,5)+a.P.closePath():a.P.moveTo(5,0)+a.P.lineTo(0,6)+a.P.lineTo(5,12)+a.P.lineTo(5,7)+a.P.lineTo(17,7)+a.P.lineTo(17,12)+a.P.lineTo(22,6)+a.P.lineTo(17,0)+a.P.lineTo(17,4)+a.P.lineTo(5,4)+
a.P.lineTo(5,0)+a.P.closePath(),b=new a.vb(this.u(),b,"arr");b.ib("#ffffff");b.Tb("#000000");b.Kc(!1);this.A(b);return b};a.Db.prototype.ly=function(a){return this.Sb()?a.getHeight():a.getWidth()};a.Db.prototype.ttb=function(a,b){this.Sb()?a.qb(b):a.Xa(b)};a.Db.prototype.Dw=function(a){return this.Sb()?a.pa():a.ra()};a.Db.prototype.kN=function(b,c){c=Math.max(0,c);this.Sb()?b.va(c):b.ha(c);if(this.GC()){this.eea().Xa(c);var f=c+this.k4(b),h=this.j4();h.Aa(f);h.Xa(Math.max(0,this.xb-f));a.Ei.zn()&&
!this.IR()&&(h=this.Zda(),this.ETa().Aa(c-h),this.eva().Aa(f))}};a.Db.prototype.k4=function(a){return this.ly(a)};a.Db.prototype.kga=function(b,c){c=Math.max(this.kea(),c);c=Math.min(this.Sb()?this.Kb:this.xb,c);this.ttb(b,c);if(this.GC()){var f=this.Dw(b)+c,h=this.j4();h.Aa(f);h.Xa(Math.max(0,this.xb-f));a.Ei.zn()&&!this.IR()&&this.eva().Aa(f)}if(!this.IR()){var f=b.jb(3),h=b.jb(4),k=b.jb(5);this.Sb()?(h.va(c),f.va(c-this.eX()),k.va(c-10)):(h.ha(c),f.ha(c-this.eX()),k.ha(c-10))}};a.Db.prototype.Xib=
function(b){var c=this.zb,f=this.ac,h=this.Ic,k=a.Ei.Pi(f,h,1,b);b=a.Ei.Pi(f,h,2,b);k=a.Ei.gf(f,h,k,c);return a.Ei.gf(f,h,b,c)-k};a.Db.prototype.pub=function(b,c){if(null!=this.I2)for(var f=this.Sb(),h=this.xM(),k=0;k<this.I2.length;k++){var l=this.I2[k],n=this.gf(parseInt(l.time,10)),l=l.label,m=0,m=k+1<this.I2.length?this.gf(parseInt(this.I2[k+1].time,10))-n:h-n;this.$q()&&(n=h-n);f&&(m=this.xb);m-=2*a.Db.nFa;this.Wsa(n,b,c,"tick"+k);this.Vsa(n,l,b,c,m,"label"+k)}};a.Db.prototype.Wsa=function(b,
c,f,h){b=this.Sb()?new a.Gc(this.u(),0,b,c,b,h):new a.Gc(this.u(),b,0,b,f,h);c=new a.xa(this.phb);c.ea(a.Xc.eD,3);b.Ga(c);b.hd();this.A(b)};a.Db.prototype.Vsa=function(b,c,f,h,k,l,n){n=n||new a.j("font-weight:bold");this.Sb()?(c=new a.da(this.u(),c,4,b,l),c.Ab(n),this.Mo()&&(this.A(c),n=c.aa(),this.removeChild(c),c.Aa(Math.max(4,this.xb-n.a-4)))):(h=this.gfa()?2:h-this.lF()+2,f=a.Db.nFa,c=new a.da(this.u(),c,b+f,h,l),c.Ab(n),this.$q()&&(this.A(c),n=c.aa(),this.removeChild(c),c.Aa(b-Math.min(n.a,k)-
f)));a.Ba.fd(c,k,Infinity,this);c.cfb=c.pq()};a.Db.prototype.gub=function(b,c){if(null!=this.ena&&!isNaN(this.ena)){var f=this.gf(this.ena);this.Sb()?f=new a.Gc(this.u(),0,f,b,f,"ocd"):(this.Mo()&&(f=b-f),f=new a.Gc(this.u(),f,0,f,c,"ocd"));f.Tb(this.j$a);f.hd();this.A(f)}};a.Db.prototype.wqb=function(a,b){if(null!=this.Sna)for(var c=0;c<this.Sna.length;c++)this.hib(this.Sna[c],a,b)};a.Db.prototype.hib=function(b,c,f){var h=parseInt(b.rs,10),k=parseInt(b.re,10);b=b.c;if(null!=h&&null!=k){var l=this.xM(),
h=this.gf(h),k=this.gf(k)-h;this.$q()&&(h=l-h-k);c=this.Sb()?new a.Rect(this.u(),0,h,c-this.AR(),k,"ftr"):new a.Rect(this.u(),h,this.gfa()?this.lF():0,k,f-this.lF(),"ftr");null!=b&&c.ib(b,.4);c.setCursor("move");c.hd();this.A(c)}};a.Db.prototype.exa=function(){};a.Db.prototype.Zsa=function(b){var c=this.ut();c.jb(3);c.jb(4);c.jb(5);if(b!=this.Dw(c)){var f=this.Jua(),h=this.fva(),k=this.FTa(),l=this.uUa(),n=this.LSa(),m=this.JUa();if(this.Sb())var r=c.pa,q=c.va,v=f.Xr,x=f.Hl,u=f.wt,A=f.Il,w=h.Xr,D=
h.Hl,B=h.wt,C=h.Il,y=k.wt,H=k.Il,z=l.Xr,E=l.Hl,M=n.Xr,T=n.Hl,O=n.wt,ia=n.Il,ga=m.Xr,aa=m.Hl,fa=m.wt,ea=m.Il;else r=c.ra,q=c.ha,v=f.Wr,x=f.eo,u=f.vt,A=f.yn,w=h.Wr,D=h.eo,B=h.vt,C=h.yn,y=k.vt,H=k.yn,z=l.Wr,E=l.eo,M=n.Wr,T=n.eo,O=n.vt,ia=n.yn,ga=m.Wr,aa=m.eo,fa=m.vt,ea=m.yn;var P=this.Gz,W=this.iea(),U=this.k4(c);b=Math.max(P,Math.min(W-U,b));P=this.Lob()?new a.G(this.u(),.5,0,a.Me.sF):null;this.ft(P,c,r,q,b);this.ft(P,f,v,x,b);this.ft(P,f,u,A,b);this.ft(P,h,w,D,b+U);this.ft(P,h,B,C,b+U);this.ft(P,k,
y,H,b+1);this.ft(P,l,z,E,b+U-1);this.ft(P,n,M,T,b);this.ft(P,m,ga,aa,b);this.ft(P,n,O,ia,b+U);this.ft(P,m,fa,ea,b+U);this.GC()&&(c=this.eea(),this.ft(P,c,c.getWidth,c.Xa,b),U=b+U,c=this.j4(),f=c.getWidth,h=c.Xa,k=c.Va,l=c.Aa,n=this.Sb()?this.Kb:this.xb,this.ft(P,c,f,h,n-U),this.ft(P,c,k,l,U),a.Ei.zn()&&!this.IR()&&(c=this.Zda(),f=this.ETa(),h=f.Va,k=f.Aa,l=this.eva(),n=l.Va,m=l.Aa,this.ft(P,f,h,k,b-c),this.ft(P,l,n,m,U)));null!=P&&P.play()}};a.Db.prototype.ft=function(b,c,f,h,k){null!=b?b.N(a.G.V,
c,f,h,k):h.call(c,k)};a.Db.prototype.b7=function(b){var c=this.QU(b);if(c&&"bg"!=c.getId()&&"ocd"!=c.getId())if("label"==c.getId().substr(0,5)&&(c instanceof a.da||c instanceof a.Ke))c.vn()&&this.u().Df().zY(b.pageX,b.pageY,c.cfb,"#000000");else if(null!=this.RV&&this.KR(c)&&(b=this.u().eh(b.pageX,b.pageY),b=this.Md(b),this.Sb()?this.RV.Na(b.x+6,b.y-10):this.RV.Na(b.x-6,b.y-20),this.RV.Kc(!0)),"window"==c.getId()||"ftr"==c.getId()||"arr"==c.getId()||this.KR(c))this.JR()&&this.setCursor("move");else return c};
a.Db.prototype.a7=function(a){null==this.pu&&this.setCursor("default");a=this.QU(a);if(null!=a)return this.KR(a)&&null!=this.RV&&this.RV.Kc(!1),a};a.Db.prototype.KN=function(b,c,f){b.stopPropagation();var h=this.QU(b);if(h&&"window"!=h.getId()&&!this.KR(h))if("bg"==h.getId()||"label"==h.getId().substr(0,5)||"ocd"==h.getId()||"lbg"==h.getId()||"rbg"==h.getId()){void 0==c&&(c=b.pageX);void 0==f&&(f=b.pageY);b=this.u().eh(c,f);b=this.Md(b);this.Sb()?(f=b.y,h=this.Kb):(f=b.x,h=this.xb);b=this.ut();c=
f-this.ly(b)/2;this.Zsa(c);this.$q()&&(f=this.xb-f);var k=this.Pi(f);f=new a.Rc(a.Rc.QZ);f.setTime(k);c=Math.max(0,Math.min(c,h-this.ly(b)));this.$q()?(h=this.Pi(this.xb-(c+this.ly(b))),b=this.Pi(this.xb-c)):(h=this.Pi(c),b=this.Pi(c+this.ly(b)));f.hga(h);f.gga(b);this.dispatchEvent(f)}else return h};a.Db.prototype.RQ=function(b,c,f){b=this.QU(b);if(null!=b&&this.xVa(b)){if("ftr"==b.getId()||"sta"==b.getId())b=this.ut();this.zaa=c;this.oLa=f;if(this.KR(b)){c=this.ut();this.$q()?(this.uqa=this.xb-
c.Va(),this.Dqa=this.uqa-c.getWidth()):(this.Dqa=c.Va(),this.uqa=this.Dqa+c.getWidth());"grpy"==b.getParent().getId()&&(b=b.getParent());f=b.getId();"grpy"==f&&(b=c.x3(b),f=b.getId());if("lh"==f||"rh"==f)b=c.x3(b),f=b.getId();"lbgrh"==f&&(b=c.jb(0));"rbgrh"==f&&(b=c.jb(c.Pb()-3));a.Ei.zn()||(this.Sb()?(b.eb(0-a.Db.P6),b.qb(2*(b.getHeight()+a.Db.P6))):(b.Aa(0-a.Db.P6),b.Xa(2*(b.getWidth()+a.Db.P6))));this.nqb(b.getCursor())}this.pu=b;b=new a.Rc(a.Rc.Rja);this.dispatchEvent(b);return!0}return!1};a.Db.prototype.nqb=
function(a){var b=this.ut();null!=b&&b.setCursor(a);if(this.GC()){var b=this.eea(),c=this.j4();null!=b&&null!=c&&(b.setCursor(a),c.setCursor(a))}};a.Db.prototype.Erb=function(){var a=this.ut();null!=a&&a.setCursor("move");if(this.GC()){var a=this.eea(),b=this.j4();null!=a&&null!=b&&(a.setCursor("default"),b.setCursor("default"))}};a.Db.prototype.hI=function(){null!=this.pu&&("window"==this.pu.getId()?this.sSa(0,0):this.KR(this.pu)&&(this.Gta(),a.Ei.zn()||(this.Sb()?(this.pu.eb(0),this.pu.qb(this.eX())):
(this.pu.Aa(0),this.pu.Xa(this.eX()))),this.Erb()),this.pu=null,this.zaa=-1)};a.Db.prototype.b3=function(a,b,c){if(null!=this.pu&&-1!=this.zaa){var h=b-this.zaa,k=c-this.oLa;this.zaa=b;this.oLa=c;"window"==this.pu.getId()?this.RUa(0,h,k):"lh"==this.pu.getId()||"lhb"==this.pu.getId()?this.rob(a,h,k):"rh"!=this.pu.getId()&&"rhb"!=this.pu.getId()||this.cwa(a,h,k)}};a.Db.prototype.rZ=function(a){var b=a.touches;this.uW=b[0].pageX;this.KQ=b[0].pageY;2==b.length&&(a.preventDefault(),this.vW=b[1].pageX,
this.O2=b[1].pageY,20>Math.abs(this.KQ-this.O2)?this.tB=0:this.O2=this.vW=this.KQ=this.uW=null)};a.Db.prototype.OBa=function(a){a.preventDefault();a=a.touches;if(null!=this.vW&&null!=this.O2)50>this.tB?this.tB++:(this.cwa(null,a[1].pageX-this.vW,0),this.vW=a[1].pageX,this.tB=0);else{var b=Math.abs(this.KQ-a[0].pageY);if(3<Math.abs(this.uW-a[0].pageX)||3<b)this.KQ=this.uW=null}};a.Db.prototype.f7=function(a){null!=this.vW&&null!=this.O2?this.Gta():null!=this.uW&&null!=this.KQ&&this.KN(a,this.uW,this.KQ);
this.O2=this.vW=this.KQ=this.uW=null};a.Db.prototype.aT=function(b){var c=b.keyCode;if(c===a.KeyboardEvent.Nf||c===a.KeyboardEvent.xf)c=c===a.KeyboardEvent.Nf?-1:1,(b.shiftKey?this.cwa:this.RUa).call(this,b,c,c)};a.Db.prototype.iia=function(b){var c=b.keyCode;if(c===a.KeyboardEvent.Nf||c===a.KeyboardEvent.xf)c=c===a.KeyboardEvent.Nf?-1:1,(b.shiftKey?this.Gta:this.sSa).call(this,c,c)};a.Db.prototype.Lpb=function(a){a/=this.dV;this.$q()&&(a=0-a);this.Zsa(a)};a.Db.prototype.RUa=function(b,c,f){this.tSa(a.Rc.Sja,
c,f)};a.Db.prototype.sSa=function(b,c){this.tSa(a.Rc.TDa,b,c)};a.Db.prototype.tSa=function(b,c,f){var h=this.ut(),k=this.Dw(h),l=this.ly(h),n=this.Gz,m=this.iea();c=this.Sb()?f:c;k+c<=n?(this.kN(h,n),l=this.$q()?a.Rc.y6:a.Rc.O7):k+l+c>=m?(this.kN(h,m-l),l=this.$q()?a.Rc.O7:a.Rc.y6):(this.kN(h,k+c),l=this.$q()?(m-l-k-this.Gz)*this.dV:(k-this.Gz)*this.dV);this.X7();b=new a.Rc(b);b.setPosition(l);this.$q()?(l=this.Pi(this.xb-(k+this.ly(h))),h=this.Pi(this.xb-k)):(l=this.Pi(k),h=this.Pi(k+this.ly(h)));
b.hga(l);b.gga(h);this.dispatchEvent(b)};a.Db.prototype.rob=function(a,b,c){this.PUa(a,b,c,!0)};a.Db.prototype.cwa=function(a,b,c){this.PUa(a,b,c,!1)};a.Db.prototype.PUa=function(b,c,f,h){var k=this.xM();f=this.Sb()?f:c;if(0!=f){c=this.ut();var l=this.Dw(c),n=this.k4(c);if(h){if(n-f<=this.kea()||l+f<=this.Gz)return;b=this.Sb()?this.u().eh(this.tea(b),this.uea(b)).y:this.u().eh(this.tea(b),this.uea(b)).x;b=this.Md(b);if(0<f&&b<=l||0>f&&b>=l)return;this.kN(c,l+f);this.kga(c,n-f)}else{if(n+f<=this.kea()||
l+n+f>=this.iea())return;b=this.Sb()?this.u().eh(this.tea(b),this.uea(b)).y:this.u().eh(this.tea(b),this.uea(b)).x;b=this.Md(b);if(0<f&&b<=l+n||0>f&&b>=l+n)return;this.kga(c,n+f)}this.X7();b=this.Pi(this.k4(c));b=k*(this.Ic-this.ac)/(b-this.ac);k=new a.Rc(a.Rc.SDa);k.qXa(b);k.Gsb(this.$q()?h:!h);h?k.dXa(0>f):k.dXa(0<f);this.$q()?(h=this.Pi(this.xb-(this.Dw(c)+this.ly(c))),c=this.Pi(this.xb-this.Dw(c))):(h=this.Pi(this.Dw(c)),c=this.Pi(this.Dw(c)+this.ly(c)));k.hga(h);k.gga(c);this.dispatchEvent(k)}};
a.Db.prototype.Gta=function(){var b=this.ac,c=this.Ic,f=this.zb,h=this.xM(),k=this.ut(),l=this.Pi(this.ly(k)),b=h*(c-b)/(l-b),c=this.Pi(this.Dqa),h=this.Pi(this.uqa);this.$q()?(l=this.Pi(this.xb-(this.Dw(k)+this.ly(k))),k=this.Pi(this.xb-this.Dw(k))):(l=this.Pi(this.Dw(k)),k=this.Pi(this.Dw(k)+this.ly(k)));var n=new a.Rc(a.Rc.S7);n.htb(f);n.qXa(b);n.itb(c);n.ftb(h);n.hga(l);n.gga(k);this.dispatchEvent(n)};a.Db.prototype.X7=function(){var b=this.ut(),c=a.Db.pFa/2,f=this.Dw(b),h=f+c,b=f+this.k4(b)-
c,c=this.Jua(),k=this.fva(),l=this.FTa(),n=this.uUa(),m=this.LSa(),r=this.JUa();this.kY(c,h,h);this.kY(k,b,b);this.kY(l,-1,f);this.kY(n,this.Q3(k),-1);this.kY(m,this.Q3(c),this.Q3(k));this.kY(r,this.Q3(c),this.Q3(k))};a.Db.prototype.dispatchEvent=function(b){a.NA.dispatchEvent(this.Cc,this.hb,this,b)};a.Db.prototype.ya=function(){this.H&&(this.H.Pj(this),this.H.ya(),this.H=null);a.Ei.zn()?(this.kc(a.TouchEvent.Zi,this.rZ,!1,this),this.kc(a.TouchEvent.Yo,this.OBa,!1,this),this.kc(a.TouchEvent.Um,this.f7,
!1,this),this.kc(a.MouseEvent.Ce,this.KN,!1,this)):(this.kc(a.MouseEvent.yj,this.b7,!1,this),this.kc(a.MouseEvent.vi,this.a7,!1,this),this.kc(a.MouseEvent.Ce,this.KN,!1,this),this.kc(a.KeyboardEvent.us,this.aT,!1,this),this.kc(a.KeyboardEvent.uv,this.iia,!1,this));a.Db.C.ya.call(this)};a.v.F(c,a.v);c.prototype.Init=function(a){this.ga=a};c.prototype.parse=function(a){return this.KZ(a)};c.prototype.KZ=function(b){var c={};c.fRa=b.animationOnClick;null!=b.startTime&&(c.start=b.startTime);null!=b.endTime&&
(c.end=b.endTime);null==c.start&&(c.start=(new Date).getTime());if(null==c.end||c.end<=c.start)c.end=c.start+864E5;null!=b.currentTime&&(c.currentTime=b.currentTime);null!=b.initialFocusTime&&(c.Hob=b.initialFocusTime);c.orientation="horizontal";null!=b.orientation&&(c.orientation=b.orientation);c.pSa=b.featuresOff;c.Swa=b.minimumWindowSize;c.Cpb=b.leftMargin;c.Lrb=b.rightMargin;if(null!=b.viewportEndTime){var f=b.viewportEndTime,h=c.start;null!=b.viewportStartTime&&b.viewportStartTime<f&&(h=b.viewportStartTime);
c.width=null!=b.viewportEndPos?this.zRa(c.start,c.end,h,f,b.viewportEndPos):this.zRa(c.start,c.end,h,f,this.ga.xb);c.Gxa=h}else c.Gxa=c.start;0==c.width&&(c.width=1E3);c.kWa="below";c.aS="none";c.Fwa=a.B.ca(this.ga.u()).toString();null!=b.rtl&&(c.Fwa=b.rtl.toString());c.bwa="#FFFFFF";c.ewa="#B3C6DB";c.Fya="#FFFFFF";c.WXa=1;c.Nya="solid";c.Lya="solid";c.Hya="solid";c.Jya="solid";c.Mya="#4F4F4F";c.Kya="#4F4F4F";c.Gya="#4F4F4F";c.Iya="#4F4F4F";c.axa="#E6ECF3";c.uta="#C000D1";c.rya="#BCC7D2";c.LXa="#e5e5e5";
c.MXa=1;c.MVa="#FFFFFF";c.LVa=.7;c.OWa="#FFFFFF";c.NWa=.7;null!=b.style&&(null!=b.style.handleFillColor&&(c.bwa=b.style.handleFillColor),null!=b.style.handleTextureColor&&(c.ewa=b.style.handleTextureColor),null!=b.style.handleBackgroundImage&&(c.NUa=b.style.handleBackgroundImage),null!=b.style.handleWidth&&(c.QUa=b.style.handleWidth),null!=b.style.handleHeight&&(c.OUa=b.style.handleHeight),null!=b.style.windowBackgroundColor&&(c.Fya=b.style.windowBackgroundColor),null!=b.style.windowBackgroundAlpha&&
(c.WXa=b.style.windowBackgroundAlpha),null!=b.style.windowBorderTopStyle&&(c.Nya=b.style.windowBorderTopStyle),null!=b.style.windowBorderRightStyle&&(c.Lya=b.style.windowBorderRightStyle),null!=b.style.windowBorderBottomStyle&&(c.Hya=b.style.windowBorderBottomStyle),null!=b.style.windowBorderLeftStyle&&(c.Jya=b.style.windowBorderLeftStyle),null!=b.style.windowBorderTopColor&&(c.Mya=b.style.windowBorderTopColor),null!=b.style.windowBorderRightColor&&(c.Kya=b.style.windowBorderRightColor),null!=b.style.windowBorderBottomColor&&
(c.Gya=b.style.windowBorderBottomColor),null!=b.style.windowBorderLeftColor&&(c.Iya=b.style.windowBorderLeftColor),null!=b.style.overviewBackgroundColor&&(c.axa=b.style.overviewBackgroundColor),null!=b.style.currentTimeIndicatorColor&&(c.uta=b.style.currentTimeIndicatorColor),null!=b.style.timeIndicatorColor&&(c.rya=b.style.timeIndicatorColor),null!=b.style.leftFilterPanelColor&&(c.MVa=b.style.leftFilterPanelColor),null!=b.style.leftFilterPanelAlpha&&(c.LVa=b.style.leftFilterPanelAlpha),null!=b.style.rightFilterPanelColor&&
(c.OWa=b.style.rightFilterPanelColor),null!=b.style.rightFilterPanelAlpha&&(c.NWa=b.style.rightFilterPanelAlpha));return c};c.prototype.zRa=function(a,b,c,h,k){a=k*(b-a);c=h-c;return 0==a||0==c?0:a/c};a.Rc=function(b){this.Init(a.Rc.ye);this.at=b};a.v.F(a.Rc,a.Vg);a.Rc.ye="overview";a.Rc.Rja="dropCallback";a.Rc.QZ="scrollTime";a.Rc.Sja="scrollPos";a.Rc.TDa="scrollEnd";a.Rc.S7="rangeChange";a.Rc.SDa="rangeChanging";a.Rc.pEa="time";a.Rc.$Ca="pos";a.Rc.W0a="oldSize";a.Rc.N0a="newSize";a.Rc.X0a="oldStartTime";
a.Rc.ICa="newStartTime";a.Rc.V0a="oldEndTime";a.Rc.HCa="newEndTime";a.Rc.a_a="expand";a.Rc.$Za="endHandle";a.Rc.O7=-1;a.Rc.y6=-2;a.Rc.prototype.$n=function(){return this.at};a.Rc.prototype.setTime=function(b){this.dl(a.Rc.pEa,b)};a.Rc.prototype.getTime=function(){return this.Zq(a.Rc.pEa)};a.Rc.prototype.htb=function(b){this.dl(a.Rc.W0a,b)};a.Rc.prototype.qXa=function(b){this.dl(a.Rc.N0a,b)};a.Rc.prototype.itb=function(b){this.dl(a.Rc.X0a,b)};a.Rc.prototype.hga=function(b){this.dl(a.Rc.ICa,b)};a.Rc.prototype.Qua=
function(){return this.Zq(a.Rc.ICa)};a.Rc.prototype.ftb=function(b){this.dl(a.Rc.V0a,b)};a.Rc.prototype.gga=function(b){this.dl(a.Rc.HCa,b)};a.Rc.prototype.Pua=function(){return this.Zq(a.Rc.HCa)};a.Rc.prototype.dXa=function(b){this.dl(a.Rc.a_a,b)};a.Rc.prototype.Gsb=function(b){this.dl(a.Rc.$Za,b)};a.Rc.prototype.setPosition=function(b){this.dl(a.Rc.$Ca,b)};a.Rc.prototype.si=function(){return this.Zq(a.Rc.$Ca)};a.v.F(b,a.H);b.prototype.Lf=function(c){b.C.Lf.call(this,c);a.zj.X2(this.fe,this.aQ,this.$P,
this.ZP,this)};b.prototype.aQ=function(b){return a.B.Wa()?this.K1(b):this.H1(b)};b.prototype.$P=function(b){return a.B.Wa()?this.J1(b):this.G1(b)};b.prototype.ZP=function(b){return a.B.Wa()?this.I1(b):this.F1(b)};b.prototype.Li=function(b,c){this.Gm||(this.Gm=this.Da.wC());return new a.R(b-this.Gm.x,c-this.Gm.y)};b.prototype.H1=function(b){if(b.button!=a.MouseEvent.lja){var c=this.Li(b.pageX,b.pageY);a.H.sc(b);this.u().Re.sG.parentNode.focus();return this.fe.RQ(b,c.x,c.y)}return!1};b.prototype.G1=
function(a){var b=this.Li(a.pageX,a.pageY);a.stopPropagation();this.fe.b3(a,b.x,b.y);return!0};b.prototype.F1=function(a){a.stopPropagation();this.fe.hI();this.Gm=null};b.prototype.K1=function(a){var b=a.touches;a.stopPropagation();return 1==b.length?(b=this.Li(b[0].pageX,b[0].pageY),a.preventDefault(),this.fe.RQ(a,b.x,b.y)):!1};b.prototype.J1=function(a){var b=a.touches;1==b.length&&(b=this.Li(b[0].pageX,b[0].pageY),this.fe.b3(a,b.x,b.y),a.preventDefault());a.stopPropagation()};b.prototype.I1=function(b){this.fe.hI();
a.H.sc(b);this.Gm=null};a.Ha(a,"Overview",a.Db);a.Ha(a.Db.prototype,"render",a.Db.prototype.ta)})(dvt);
  return dvt;
});
