        let heartCount = 0;
        let copyCount = 0;
        let coins = 100;

        const heartDisplay = document.getElementById('heart-count');
        const copyDisplay = document.getElementById('copy-count');
        const coinDisplay = document.getElementById('coin-count');
        const historyList = document.getElementById('history-list');
        const clearHistoryBtn = document.getElementById('clear-history');

        // New mobile menu elements
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
        const heartDisplayMobile = document.getElementById('heart-count-mobile');
        const copyDisplayMobile = document.getElementById('copy-count-mobile');
        const coinDisplayMobile = document.getElementById('coin-count-mobile');

        // Hamburger menu toggle
        hamburgerBtn.addEventListener('click', function () {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        });

        // Close mobile menu
        closeMobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Wait for the transition to finish
        });

        // Close mobile menu on larger screens
        window.addEventListener('resize', function() {
            if (window.innerWidth > 640) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
            }
        });

        // Update display functions to handle both desktop and mobile views
        function updateHeartCount() {
            heartDisplay.innerText = heartCount;
            heartDisplayMobile.innerText = heartCount;
        }

        function updateCopyCount() {
            copyDisplay.innerText = copyCount;
            copyDisplayMobile.innerText = copyCount;
        }

        function updateCoinCount() {
            coinDisplay.innerText = coins;
            coinDisplayMobile.innerText = coins;
        }

        // Heart icon click
        const heartIcons = document.getElementsByClassName('heart-icon');
        for (let icon of heartIcons) {
            icon.addEventListener('click', function () {
                heartCount++;
                updateHeartCount();
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
                updateCopyCount();
            });
        }

        // Call button click
        const callButtons = document.getElementsByClassName('call-btn');
        for (let btn of callButtons) {
            btn.addEventListener('click', function () {
                const card = btn.closest('.card');
                const name = card.querySelector('.service-name').innerText;
                const number = card.querySelector('.service-number').innerText;

                if (coins < 20) {
                    alert("You don't have enough coins to make a call.");
                    return;
                }

                coins -= 20;
                updateCoinCount();
                alert(`Calling ${name} ${number}...`);

                const time = new Date().toLocaleTimeString();

                const item = document.createElement('div');
                item.className = "flex items-center justify-between bg-[gray]/10 px-3 py-2 rounded-md shadow-sm";

                const left = document.createElement('div');
                left.className = "flex items-center gap-2";

                const icon = document.createElement('i');
                icon.className = "fa-solid fa-phone text-green-600";

                const text = document.createElement('div');
                text.innerHTML = `<p class="font-bold">${name}</p><p class="text-xs text-gray-600">${number}</p>`;

                left.appendChild(icon);
                left.appendChild(text);

                const timeText = document.createElement('p');
                timeText.className = "text-xs text-gray-500";
                timeText.innerText = time;

                item.appendChild(left);
                item.appendChild(timeText);
                historyList.prepend(item);
            });
        }

        // Clear history section
        clearHistoryBtn.addEventListener('click', function () {
            historyList.innerHTML = '';
        });

        // Initial update of mobile counters
        updateHeartCount();
        updateCopyCount();
        updateCoinCount();