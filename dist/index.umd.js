(function(A,y){typeof exports=="object"&&typeof module<"u"?module.exports=y(require("fs")):typeof define=="function"&&define.amd?define(["fs"],y):(A=typeof globalThis<"u"?globalThis:A||self,A.LZString=y(A.fs))})(this,function(A){"use strict";function y(e,t,f){if(e==null)return"";let o,r;const s={},p={};let d="",w="",h="",g=2,a=3,c=2;const u=[];let n=0,i=0,l;for(l=0;l<e.length;l+=1)if(d=e.charAt(l),Object.prototype.hasOwnProperty.call(s,d)||(s[d]=a++,p[d]=!0),w=h+d,Object.prototype.hasOwnProperty.call(s,w))h=w;else{if(Object.prototype.hasOwnProperty.call(p,h)){if(h.charCodeAt(0)<256){for(o=0;o<c;o++)n=n<<1,i==t-1?(i=0,u.push(f(n)),n=0):i++;for(r=h.charCodeAt(0),o=0;o<8;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1}else{for(r=1,o=0;o<c;o++)n=n<<1|r,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=0;for(r=h.charCodeAt(0),o=0;o<16;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1}g--,g==0&&(g=Math.pow(2,c),c++),delete p[h]}else for(r=s[h],o=0;o<c;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1;g--,g==0&&(g=Math.pow(2,c),c++),s[w]=a++,h=String(d)}if(h!==""){if(Object.prototype.hasOwnProperty.call(p,h)){if(h.charCodeAt(0)<256){for(o=0;o<c;o++)n=n<<1,i==t-1?(i=0,u.push(f(n)),n=0):i++;for(r=h.charCodeAt(0),o=0;o<8;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1}else{for(r=1,o=0;o<c;o++)n=n<<1|r,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=0;for(r=h.charCodeAt(0),o=0;o<16;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1}g--,g==0&&(g=Math.pow(2,c),c++),delete p[h]}else for(r=s[h],o=0;o<c;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1;g--,g==0&&(g=Math.pow(2,c),c++)}for(r=2,o=0;o<c;o++)n=n<<1|r&1,i==t-1?(i=0,u.push(f(n)),n=0):i++,r=r>>1;for(;;)if(n=n<<1,i==t-1){u.push(f(n));break}else i++;return u.join("")}function v(e,t,f){const o=[];let r=4,s=4,p=3,d="";const w=[];let h,g,a,c,u,n,i;const l={val:f(0),position:t,index:1};for(h=0;h<3;h+=1)o[h]=String(h);for(a=0,u=Math.pow(2,2),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;switch(a){case 0:for(a=0,u=Math.pow(2,8),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;i=String.fromCharCode(a);break;case 1:for(a=0,u=Math.pow(2,16),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;i=String.fromCharCode(a);break;case 2:return""}if(i===void 0)throw new Error("No character found");for(o[3]=String(i),g=String(i),w.push(String(i));;){if(l.index>e)return"";for(a=0,u=Math.pow(2,p),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;switch(i=a){case 0:for(a=0,u=Math.pow(2,8),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;o[s++]=String.fromCharCode(a),i=s-1,r--;break;case 1:for(a=0,u=Math.pow(2,16),n=1;n!=u;)c=l.val&l.position,l.position>>=1,l.position==0&&(l.position=t,l.val=f(l.index++)),a|=(c>0?1:0)*n,n<<=1;o[s++]=String.fromCharCode(a),i=s-1,r--;break;case 2:return w.join("")}if(r==0&&(r=Math.pow(2,p),p++),o[i])d=String(o[i]);else if(i===s)d=g+g.charAt(0);else return null;w.push(d),o[s++]=g+d.charAt(0),r--,g=d,r==0&&(r=Math.pow(2,p),p++)}}const C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function j(e){if(e==null)return"";const t=y(e,6,f=>C.charAt(f));switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}}const M={};function m(e,t){if(!M[e]){M[e]={};for(let f=0;f<e.length;f++)M[e][e.charAt(f)]=f}return M[e][t]}function O(e){return e==null?"":e==""?null:v(e.length,32,t=>m(C,e.charAt(t)))}function x(e){return e==null?"":y(e,16,t=>String.fromCharCode(t))}function B(e,t){if(e==null)return"";const f=x(e),o=Math.ceil(Math.log(65536)/Math.log(t.length));let r="";for(let s=0,p=f.length;s<p;s++){let d=f.charCodeAt(s);for(let w=o-1;w>=0;w--){const h=Math.floor(d/Math.pow(t.length,w));d=d%Math.pow(t.length,w),r+=t.charAt(h)}}return r}function S(e){return e==null?"":e==""?null:v(e.length,32768,t=>e.charCodeAt(t))}function k(e,t){if(e==null)return"";if(e==""||t.length<2)return null;const f=Math.ceil(Math.log(65536)/Math.log(t.length));if(e.length%f!=0)return null;let o="",r,s;for(let p=0,d=e.length;p<d;p=p+f){r=0;for(let w=0;w<f;w++)s=t.indexOf(e[p+w]),r=r+s*Math.pow(t.length,f-1-w);o=o+String.fromCharCode(r)}return S(o)}const T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";function L(e){return e==null?"":y(e,6,t=>T.charAt(t))}function E(e){return e==null?"":e==""?null:(e=e.replace(/ /g,"+"),v(e.length,32,t=>m(T,e.charAt(t))))}function R(e){const t=x(e),f=new Uint8Array(t.length*2);for(let o=0,r=t.length;o<r;o++){const s=t.charCodeAt(o);f[o*2]=s>>>8,f[o*2+1]=s%256}return f}function U(e,t){if(typeof e=="string"){const f=!t&&e.charCodeAt(e.length-1)%256===0,o=new Uint8Array(e.length*2-(f?1:0));for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);o[r*2]=s>>>8,(!f||r<e.length-1)&&(o[r*2+1]=s%256)}return o}return e}function _(e){const t=Math.floor(e.byteLength/2),f=[];for(let o=0;o<t;o++)f.push(String.fromCharCode(e[o*2]*256+e[o*2+1]));return e.byteLength&1&&f.push(String.fromCharCode(e[e.byteLength-1]*256)),f.join("")}function z(e){return e==null?S(e):S(_(e))}function b(e,t){A.writeFileSync(e,typeof t=="string"?U(t):t,null)}function q(e){return _(A.readFileSync(e,null))}function D(e){return e==null?"":y(e,15,t=>String.fromCharCode(t+32))+" "}function F(e){return e==null?"":e==""?null:v(e.length,16384,t=>e.charCodeAt(t)-32)}return{_compress:y,_decompress:v,compress:x,compressToBase64:j,compressToCustom:B,compressToEncodedURIComponent:L,compressToUint8Array:R,compressToUTF16:D,convertFromUint8Array:_,convertToUint8Array:U,decompress:S,decompressFromBase64:O,decompressFromCustom:k,decompressFromEncodedURIComponent:E,decompressFromUint8Array:z,decompressFromUTF16:F,loadBinaryFile:q,saveBinaryFile:b}});
//# sourceMappingURL=index.umd.js.map
