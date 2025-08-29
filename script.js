let heartCount = 0;
let copyCount = 0;
let coins = 100;

const heartDisplay = document.getElementById('heart-count');
const copyDisplay = document.getElementById('copy-count');
const coinDisplay = document.getElementById('coin-count');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

//  Heart icon click 
const heartIcons = document.getElementsByClassName('heart-icon');
for (let icon of heartIcons) {
    icon.addEventListener('click', function () {
        heartCount++;
        heartDisplay.innerText = heartCount;
    });
}

// Copy button click 
const copyButtons = document.getElementsByClassName('copy-btn');
for (let btn of copyButtons) {
    btn.addEventListener('click', function () {
        const number = btn.closest('.card').querySelector('.service-number').innerText;
        navigator.clipboard.writeText(number);
        alert(`Copied ${number} to clipboard`);
        copyCount++;
        copyDisplay.innerText = copyCount;
    });
}


//  Call button click 
// const call = document.createComment("i");
// call.className = "flex items-center gap-2";

const callButtons = document.getElementsByClassName('call-btn');
for (let btn of callButtons) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        const name = card.querySelector('.service-name').innerText;
        const number = card.querySelector('.service-number').innerText;

       

        if (coins < 20) {
            alert("❌ You will need 20 coins to make the call.");
            return;
        }


        coins -= 20;
        coinDisplay.innerText = coins;

        
        alert(`📞 Calling ${name} ${number}....`);


        const time = new Date().toLocaleTimeString();

        const item = document.createElement('div');
        item.className = "flex items-center justify-between bg-[gray]/10 px-3 py-5 rounded-lg shadow-sm";

        const left = document.createElement('div');
        // left.className = "flex items-center gap-2";

        // const icon = document.createElement('i');
        // icon.className = "fa-solid fa-phone text-green-600";

        const text = document.createElement('div');
        text.innerHTML = `<p class="font-bold">${name}</p><p class="text-xs text-[#5C5C5C] mt-1">${number}</p>`;

        // left.appendChild(icon);
        left.appendChild(text);

        const timeText = document.createElement('p');
        timeText.className = "text-xs text-gray-500";
        timeText.innerText = time;

        item.appendChild(left);
        item.appendChild(timeText);
        historyList.prepend(item);
    });
}



//  Clear history section
clearHistoryBtn.addEventListener('click', function () {
    historyList.innerHTML = '';
});