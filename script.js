* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Microsoft YaHei", sans-serif;
}

body {
    background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
}

.card {
    background: #fff;
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
}

h1 {
    color: #e85d75;
    font-size: 28px;
    margin-bottom: 20px;
}

.desc {
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
}

.btn-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
}

button {
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease;
    min-width: 120px;
}

#yesBtn {
    background: #e85d75;
    color: #fff;
}

/* 当然可以按钮放大动画 */
@keyframes growBig {
    0% { transform: scale(1); }
    100% { transform: scale(1.8); } /* 放大到1.8倍，可调整 */
}

.yes-grow {
    animation: growBig 1s forwards;
    background: #d44860 !important;
}

#noBtn {
    background: #eee;
    color: #666;
}

/* 下次吧按钮缩小效果 */
#noBtn:hover, #noBtn.clicked {
    transform: scale(0.7); /* 缩小到0.7倍，可调整 */
    background: #ddd !important;
}

.result {
    color: #e85d75;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
}
