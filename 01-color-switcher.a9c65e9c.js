!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),i=document.querySelector("body"),n={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){i.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0)},stop:function(){clearInterval(this.intervalId),this.isActive=!1,t.disabled=!1}};t.addEventListener("click",(function(){n.start()})),e.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=01-color-switcher.a9c65e9c.js.map