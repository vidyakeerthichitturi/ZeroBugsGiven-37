
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const saved=localStorage.getItem("theme"); if(saved==="light")document.body.classList.add("light");
const theme=$("#theme"); if(theme)theme.textContent=document.body.classList.contains("light")?"☀":"☾";
theme?.addEventListener("click",()=>{document.body.classList.toggle("light");let light=document.body.classList.contains("light");localStorage.setItem("theme",light?"light":"dark");theme.textContent=light?"☀":"☾"});
$("#menu")?.addEventListener("click",()=>$("#nav").classList.toggle("open"));
$$("nav a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
window.addEventListener("scroll",()=>{let h=document.documentElement.scrollHeight-innerHeight;$("#progress").style.width=(scrollY/h*100)+"%"});
const form=$("#contactForm"); form?.addEventListener("submit",e=>{let m=$("#formMessage"),email=$("#email").value.trim(),msg=$("#message").value.trim();if(!email.includes("@")||msg.length<10){e.preventDefault();m.textContent="Please enter a valid email and a message of at least 10 characters."}else m.textContent="Sending…"});
