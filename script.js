// 获取页面元素
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');

// 点击“当然可以”的逻辑
yesBtn.addEventListener('click', () => {
    result.textContent = "🥳 谢谢宝！我要喝珍珠奶茶，少糖少冰～";
    // 播放轻微的提示音（可选，如需添加可自行找mp3文件）
});

// 点击“下次吧”的彩蛋逻辑（按钮跑开+调皮文案）
noBtn.addEventListener('click', () => {
    // 随机位置偏移
    const randomX = Math.random() * 100 - 50; // -50到50px
    const randomY = Math.random() * 100 - 50;
    noBtn.style.position = 'relative';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    
    // 随机文案
    const texts = [
        "🥺 再考虑一下嘛～",
        "不给喝奶茶就不走啦～",
        "奶茶超甜的，像我一样✨",
        "求求了～就一杯～"
    ];
    result.textContent = texts[Math.floor(Math.random() * texts.length)];
});
