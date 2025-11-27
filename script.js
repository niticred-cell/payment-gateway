// Tabs
function showTab(tab) {
  document.getElementById('direct').style.display = (tab === 'direct') ? 'block' : 'none';
  document.getElementById('qr').style.display = (tab === 'qr') ? 'block' : 'none';
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if(tab==='direct') document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
  else document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
}

// Method selection
function selectMethod(method) {
  document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.method-btn:contains(${method})`)?.classList.add('active');
}

// Copy to clipboard
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(()=>alert(id + " copied!"));
}

// Countdown Timer
let totalSeconds = 9*60+28;
setInterval(()=>{
  if(totalSeconds>0){
    totalSeconds--;
    const min = String(Math.floor(totalSeconds/60)).padStart(2,'0');
    const sec = String(totalSeconds%60).padStart(2,'0');
    document.getElementById('timer').innerText=`00:${min}:${sec}`;
  }
},1000);

// Submit UTR
function submitUTR(){
  const utr = document.getElementById('utr').value.trim();
  if(!utr){ alert("Enter UTR"); return;}
  alert("Submitted UTR: "+utr);
}

// Generate QR Code
const upiPayload = "upi://pay?pa=6206286698@naviaxis&pn=RupCredit&am=3000";
new QRCode(document.getElementById("qrCode"), {
    text: upiPayload,
    width: 200,
    height: 200
});
