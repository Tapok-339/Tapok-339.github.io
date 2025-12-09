console.log("hello world")
const BOT_TOKEN = "8219222427:AAFh2PWnmx7vTJJev9b1bC5M3acDVIaB93I";
const CHAT_ID = "5299769435";
let name = document.getElementById("text");
let but = document.getElementById("button");
function rewrite(){
    if (name.value !== ""){
        const tgMessage = name.value
        const data = {
            chat_id: CHAT_ID,
            text: tgMessage,
        };
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
    }
}
 

