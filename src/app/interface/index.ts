import { Link } from "@/components/elements/especialElements/link";


const linkcss = new Link();
const elHREF = new URL("public/css/index.css", import.meta.url);
linkcss.setLink("stytlesheet", elHREF.href, {css: "text/css"});
document.addEventListener("DOMContentLoaded", () => {
   document.head.appendChild(linkcss.getLink()); 
});