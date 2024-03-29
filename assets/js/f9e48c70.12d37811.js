"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[600],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,f=l["".concat(s,".").concat(d)]||l[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[l]="string"==typeof e?e:o,i[1]=m;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9916:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),i=["components"],m={sidebar_position:3,description:"Example Commands File"},s="Commands File",u={unversionedId:"Management/commands",id:"Management/commands",title:"Commands File",description:"Example Commands File",source:"@site/docs/Management/commands.md",sourceDirName:"Management",slug:"/Management/commands",permalink:"/docs/2.x/Management/commands",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/docs/Management/commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Example Commands File"}},c={},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commands-file"},"Commands File"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="lang.yml"',title:'"lang.yml"'},"General:\n  Info:\n    Enabled: true\n    Name: info\n    Type: General\n    Usage: info <bot/user/channel/guild> [parameter]\n    Cooldown: false\n    Permission:\n      - \"@everyone\"\n    Description: Show's Information about the Bot, User, Channel or Guild\n    DeleteCommand: false\n    Aliases:\n      - information\n    Arguments:\n      - Type: Sub Command\n        Name: bot\n        Description: Show's Information about a Bot\n      - Type: Sub Command\n        Name: guild\n        Description: Show's Information about a Guild\n      - Type: Sub Command\n        Name: user\n        Description: Show's Information about a User\n        Options:\n          - Type: User\n            Name: user\n            Description: The User to show Information about\n            Required: false\n  Help:\n    Enabled: true\n    Name: help\n    Type: General\n    Usage: help <type/command>\n    Cooldown: false\n    Permission:\n      - \"@everyone\"\n    Description: Helps you with the Bot's Commands\n    DeleteCommand: false\n    Aliases: []\n    Arguments:\n      - Type: Sub Command\n        Name: Category\n        Description: Shows Information about a Category of Commands\n        Options:\n          - Type: String\n            Name: type\n            Description: The Type of Commands to show Information about\n            AutoComplete: true\n            Required: true\n      - Type: Sub Command\n        Name: Command\n        Description: Shows Information about a Command\n        Options:\n          - Type: String\n            Name: command\n            Description: The Command to show Information about\n            AutoComplete: true\n            Required: true\n")))}d.isMDXComponent=!0}}]);