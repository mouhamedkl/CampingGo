var RewardsCreditRefresh;(function(n){function r(t,i,r,u,f,e,o,s,h,c,l,a,v,y){sj_cook.set(t,i,r.toString(),!1,"/");sj_cook.set(t,u,f.toString(),!1,"/");sj_cook.set(t,e,o.toString(),!1,"/");sj_cook.set(t,s,h.toString(),!1,"/");sj_cook.set(t,c,l.toString(),!1,"/");sj_cook.set(t,a,v.toString(),!1,"/");sj_evt.fire("RewardsCookieUpdated");sj_evt.bind("identityHeaderShown",function(){return n.RewardsHeaderAnim(o,r,f,y)},1)}function u(n,r,u,f){var h;u=u||r;var s=_ge("id_rh"),e=_ge("rh_animcrcl"),a=_ge("id_rc");if(s&&a&&(e||_ge("givemuid_heart"))&&!(r<0)&&!(r<n)&&!(u<=0)){var o=_ge("rewardsEntryPoint"),v=800,y=r-n,c=Math.min(100,100*(r/u)),l=e&&c>=100&&n<u,p=y>0,w=Date.now();c>=100&&s.classList&&Lib.CssClass.add(s,"rh_reedm");e&&Lib.CssClass.add(e,"anim");h=function(u){var a,k;if(u){var tt=Date.now(),d=tt-w,g=Math.min(d/v,1),it=l?t*g:t*c/100,rt=p?Math.min(Math.floor((n+g*y)/f)*f,r):r,nt=_ge("rewardsBright"),b=_ge("rewardsAnimation");e&&e.setAttribute("stroke-dasharray",it.toString()+","+t.toString());u.innerHTML=rt.toString();(l||p)&&(d<v?i(function(){return h(u)}):(u.innerHTML=r.toString(),l&&(Lib.CssClass.add(s,"rh_scale"),Log.Log("CI.Info","RewardsReportActivity","ScaleAnim")),sj_evt.fire("RewardsAnimComplete"),o&&b&&(a=o.getAttribute("data-animate"),a&&a!=""&&a!="true"||(Lib.CssClass.add(nt,"b_hide"),Lib.CssClass.remove(b,"b_hide"),setTimeout(function(){Lib.CssClass.remove(nt,"b_hide");Lib.CssClass.add(b,"b_hide")},2200)))));o&&(k=o.querySelector("#id_rc"),k&&(k.innerHTML=r.toLocaleString()))}};h(a);o&&h(_ge("id_rcep"))}}function f(){var n=_ge("id_rc");return n?parseInt(n.innerHTML):0}function e(n){var i=_ge("id_rc"),t;i&&(i.innerHTML=n.toString());t=_ge("id_rcep");t&&(t.innerHTML=n.toString())}var t=88,i=function(){return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||function(n){sb_st(n,1e3/60)}}();n.RewardsRefresh=r;n.RewardsHeaderAnim=u;n.GetRewardsHeaderBalance=f;n.SetRewardsHeaderBalance=e})(RewardsCreditRefresh||(RewardsCreditRefresh={}))