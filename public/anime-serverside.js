/*
  anime
  homepage: <https://github.com/vladmandic/anime>
  author: <https://github.com/vladmandic>'
*/

var i=(...n)=>{let t=new Date,d=`${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}.${t.getMilliseconds().toString().padStart(3,"0")}`;console.log(d,...n)};var s=[720,720],e,r,c,l;async function p(){i("starting webcam..."),e=document.getElementById("video");let n={audio:!1,video:{facingMode:"user",resizeMode:"crop",width:{ideal:s[0]},height:{ideal:s[1]}}},t=await navigator.mediaDevices.getUserMedia(n),d=new Promise(C=>{e.onloadeddata=()=>C(!0)});e.srcObject=t,e.play(),await d;let a=t.getVideoTracks()[0],v=a.getCapabilities?a.getCapabilities():"",w=a.getSettings?a.getSettings():"",u=a.getConstraints?a.getConstraints():"";i("video:",e.videoWidth,e.videoHeight,a.label,{stream:t,track:a,settings:w,constraints:u,capabilities:v}),e.onclick=()=>{e.paused?(i("play"),e.play()):(i("pause"),e.pause())}}var o,g;async function m(){o||(o=document.createElement("canvas"),o.width=s[0],o.height=s[1]),g||(g=o.getContext("2d")),g.drawImage(e,0,0,e.videoWidth,e.videoHeight,0,0,o.width,o.height);let n=g.getImageData(0,0,o.width,o.height);c.readyState===1&&c.send(n.data)}async function h(n){r||(r=document.getElementById("canvas"),r.width=s[0],r.height=s[1]),l||(l=r.getContext("2d"));let t=await n.arrayBuffer(),d=new Uint8ClampedArray(t),a=new ImageData(d,s[0],s[1]);l.putImageData(a,0,0),requestAnimationFrame(m)}async function f(){c=new WebSocket("ws://localhost:8080"),c.onopen=()=>{i("ws open"),m()},c.onerror=()=>i("ws error"),c.onclose=()=>i("ws close"),c.onmessage=async n=>h(n.data)}async function S(){i("anime"),await p(),f()}window.onload=S;
//# sourceMappingURL=anime-serverside.js.map
