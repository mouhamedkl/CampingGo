var VolumeIconWithSliderBar;(function(n){function rt(){y||(y=!0,r(_w,tt,ut,!0))}function ut(){l=[];y=!1}var p="volsliderHandle",w="bg",b="cont",a="vol",o="mousemove",tt="unload",k="volumeIconWithSliderBar",s="undefined",e=typeof VideoRichHoverUtils!=s?VideoRichHoverUtils:null,h=typeof VRHConsts!=s?VRHConsts:null,v=typeof SmartEvent!=s?SmartEvent:null,i=typeof pMMUtils!=s?pMMUtils:null,c=!1,t=null,u=null,d=null,g=null,f=null,r=null,l=[],y=!1,nt;if(!c&&i&&i.gfbc&&i.sepd&&i.st&&e&&e.showElement&&e.showElement&&h&&v&&v.bind&&(t=i.gfbc,u=i.sepd,d=i.st,g=e.showElementFromList,f=e.showElement,r=v.bind,c=!0),c&&_w&&!_w[k]){_w[k]=n;function it(n,t,i,r,u,f,e,o){c&&n&&n.length>1&&(l[n]&&(l[n]=null),l[n]=new nt(t,i,r,u,f,e,o));return}rt();n.init=it}nt=function(){function n(n,e,s,c,l,v,y){var k=this,d;if(this.getVolumeCallBackFunction=null,this.isMuteCallBackFunction=null,this.setVolumeCallBackFunction=null,this.setLastStableVolumeCallBackFunction=null,this.setMuteCallBackFunction=null,this.sliderHandleIcon=null,this.muteHandle=null,this.enMuteInst=!1,this.instMeta=null,this.isDraggingVolumeBar=!1,this.volumeControllerContainer=null,this.eventBind=function(){k.setVolumeCallBackFunction&&(k.volumeSliderBarContainer&&(r(k.volumeSliderBarContainer,"mouseover",k.onVolumeMouseIn),r(k.volumeSliderBarContainer,"mouseout",k.onVolumeMouseOut),r(k.volumeHandler,"mouseup",k.stopDrag),r(k.volumeSliderBarContainer,"click",u)),k.sliderHandle&&(r(k.sliderHandle,"mousedown",k.startDrag),r(k.sliderHandleIcon,"keydown",k.onSliderHandleKeyDown)));k.muteHandle&&k.setMuteCallBackFunction&&(r(k.muteHandle,"mouseup",k.muteHandlerClick),r(k.muteHandle,"keydown",k.onMuteHandleKeyDown));k.bindEvent()},this.bindEvent=function(){sj_evt.bind(h.FallbackToNonSMTEvt,k.onFallbackToNonSMT);sj_evt.bind(h.HoverCancelEvt,k.unBindEvent)},this.unBindEvent=function(){sj_evt.unbind(h.FallbackToNonSMTEvt,k.onFallbackToNonSMT)},this.onSliderHandleKeyDown=function(n){n=n||window.event;var i=n?n.which?n.which:n.keyCode:n.keyCode,t=0;switch(i){case 40:t=k.getKeyArrowDownVolumeValue();k.updateVolume(t);break;case 38:t=k.getKeyArrowUpVolumeValue();k.updateVolume(t);break;case 9:k.hideVolumeSlider();return}u(n)},this.onVolumeMouseIn=function(){k.volumeHandler&&k.volumeHandlerBackground&&k.sliderHandle&&(k.enableVolumeSlider(!0),k.getVolumeCallBackFunction&&k.setVolumeBarPosition(k.getVolumeCallBackFunction()))},this.onFallbackToNonSMT=function(){f(k.volumeControlContainer,!1)},this.onVolumeMouseOut=function(n){for(var t=sj_mo(n),i=!1;t;){if(t===k.volumeSliderBarContainer){i=!0;break}t=t.parentNode}i||k.hideVolumeSlider()},this.hideVolumeSlider=function(){(sj_ue(k.volumeSliderBarContainer,o,k.onDrag),k.volumeHandler&&k.volumeHandlerBackground&&k.sliderHandle)&&k.enableVolumeSlider(!1)},this.enableVolumeSlider=function(n){n&&k.isMuteCallBackFunction()||(f(k.volumeHandler,n),f(k.volumeHandlerBackground,n),f(k.sliderHandle,n),f(k.sliderbar,n),k.updateVolBorderStyle(n))},this.updateVolBorderStyle=function(n){var r=t("bg",k.volumeControlContainer);!i.hc(r,"volnb")&&n?i.ac(r,"volnb"):i.hc(r,"volnb")&&!n&&i.rc(r,"volnb")},this.startDrag=function(n){return n!=null&&n.button==0&&(k.setLastStableVolume(n),sj_be(k.volumeSliderBarContainer,o,k.onDrag),k.isDraggingVolumeBar=!0),u(n)},this.stopDrag=function(n){var i,t;return n!=null&&n.button==0&&(i=k.getVolumeValue(n),k.updateVolume(i),sj_ue(k.volumeSliderBarContainer,o,k.onDrag),k.isDraggingVolumeBar=!1,t=k.volumeControlContainer,t&&t.blur()),u(n)},this.onDrag=function(n){if(n!=null&&n.button==0){var t=k.getVolumeValue(n);k.updateVolume(t)}return u(n)},this.muteHandlerTrigger=function(n){if(k.isDraggingVolumeBar){k.isDraggingVolumeBar=!1;sj_ue(k.volumeSliderBarContainer,o,k.onDrag);u(n);return}k.setMuteCallBackFunction&&(k.setMuteCallBackFunction(),k.setVolumeIcon(),k.enableVolumeSlider(!0),k.setVolumeBarPosition(k.getVolumeCallBackFunction()))},this.muteHandlerClick=function(n){if(n!=null&&n.button==0){var t=k.volumeControlContainer;t&&t.blur();k.muteHandlerTrigger(n)}return u(n)},this.onMuteHandleKeyDown=function(n){n=n||window.event;var t=n?n.which?n.which:n.keyCode:n.keyCode;switch(t){case 13:k.muteHandlerTrigger(n);break;case 27:k.hideVolumeSlider();break;case 9:return}u(n)},this.setVolumeIcon=function(){if(k.getVolumeCallBackFunction&&k.isMuteCallBackFunction&&k.muteHandle&&k.muteHandle.firstChild){var n="volMuteIcon ";k.muteHandle.ariaLabel="Unmute";k.getVolumeCallBackFunction()===0||k.isMuteCallBackFunction()?(n+="vf",k.muteHandle.ariaLabel="Mute"):n+=k.getVolumeCallBackFunction()<20?"vl":k.getVolumeCallBackFunction()>=20&&k.getVolumeCallBackFunction()<60?"vm":"vo";k.muteHandle.firstChild.className=n}},this.getVolumeCallBackFunction=v,this.isMuteCallBackFunction=y,this.setMuteCallBackFunction=l,this.setVolumeCallBackFunction=s,this.setLastStableVolumeCallBackFunction=c,this.instMeta=e,this.volumeControlContainer=t(a,n),d=new Array(0),this.volumeControlContainer){this.volumeSliderBarBackground=t(a+" "+w,this.volumeControlContainer);this.volumeSliderBarContainer=t(a+" "+b,this.volumeControlContainer);this.volumeSliderBarContainer&&this.volumeSliderBarBackground&&this.setVolumeCallBackFunction&&(this.volumeHandlerBackground=t(p+" "+w,this.volumeSliderBarContainer),this.volumeHandler=t(p+" "+b,this.volumeSliderBarContainer),this.sliderbar=t("vsb",this.volumeSliderBarContainer),this.sliderHandle=t("vsh",this.volumeSliderBarContainer),this.sliderHandleIcon=t("vshi",this.sliderHandle),d.push(this.volumeSliderBarBackground),d.push(this.volumeSliderBarContainer));this.muteHandle=t("volMuteHandle",n);this.volumeControllerContainer=t("vol",n);this.muteHandle&&this.setMuteCallBackFunction&&d.push(this.muteHandle);d.length>0&&d.push(this.volumeControlContainer);g(d,!0);this.setVolumeIcon();this.eventBind();return}}return n.prototype.updateVolume=function(n){this.setVolumeBarPosition(n);this.setVolumeCallBackFunction&&(this.setVolumeCallBackFunction(n),this.setVolumeIcon())},n.prototype.getKeyArrowUpVolumeValue=function(){var n=this.sliderbar.getBoundingClientRect(),t=this.sliderHandle.getBoundingClientRect(),i=Math.max(0,100-Math.max(0,Math.min(1,(t.top-1+this.sliderHandle.clientHeight/2-n.top)/this.sliderbar.offsetHeight)*100));return i},n.prototype.getKeyArrowDownVolumeValue=function(){var n=this.sliderbar.getBoundingClientRect(),t=this.sliderHandle.getBoundingClientRect(),i=Math.max(0,100-Math.max(0,Math.min(1,(t.top+1+this.sliderHandle.clientHeight/2-n.top)/this.sliderbar.offsetHeight)*100));return i},n.prototype.getVolumeValue=function(n){var t=this.sliderbar.getBoundingClientRect();return 100-Math.max(0,Math.min(1,(n.clientY-t.top)/this.sliderbar.offsetHeight))*100},n.prototype.setLastStableVolume=function(n){var t=this.getVolumeValue(n);t>0&&this.setLastStableVolumeCallBackFunction&&this.setLastStableVolumeCallBackFunction(t)},n.prototype.setVolumeBarPosition=function(n){if(!(n<0)&&!(n>100)&&this.sliderHandle){var t=Math.round(this.sliderbar.clientHeight*(100-n)/100)-this.sliderHandle.clientHeight/2;d(this.sliderHandle,t);this.sliderHandleIcon.ariaValueNow=Math.round(n)}},n}()})(VolumeIconWithSliderBar||(VolumeIconWithSliderBar={}))