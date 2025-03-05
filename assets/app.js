// 预加载完成后执行
window.addEventListener('load', () => {
  // 初始化花瓣雨
  createPetals(30);
  
  // 启动背景音乐
  const bgm = document.getElementById('bgm');
  bgm.play().catch(() => {
    document.addEventListener('click', () => bgm.play(), { once: true });
  });

  // 情书信封交互
  document.querySelector('.envelope-container').addEventListener('click', toggleEnvelope);
  
  // 心跳按钮交互
  document.querySelector('.heart-btn-container').addEventListener('click', showLovePopup);
});

// 生成花瓣雨
function createPetals(count) {
  const container = document.getElementById('petal-container');
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(petal);
  }
}

// 切换情书信封
function toggleEnvelope() {
  this.classList.toggle('open');
  const letter = this.querySelector('.love-letter');
  letter.style.maxHeight = letter.style.maxHeight ? null : letter.scrollHeight + 'px';
}

// 显示爱心弹窗
function showLovePopup() {
  const popup = document.createElement('div');
  popup.className = 'love-popup animate__animated animate__heartBeat';
  popup.textContent = '我爱你❤';
  document.body.appendChild(popup);
  
  // 添加粒子效果
  createHeartParticles(20);
  
  setTimeout(() => {
    popup.remove();
  }, 2000);
}

// 创建爱心粒子
function createHeartParticles(count) {
  // 粒子动画实现...
}

// 视差滚动效果
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax-item').forEach(item => {
    const speed = parseFloat(item.dataset.speed);
    item.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// 背景渐变切换
let gradientIndex = 0;
setInterval(() => {
  const gradients = [
    'linear-gradient(135deg, #FFE6F2 0%, #FFFFFF 100%)',
    'linear-gradient(135deg, #FFB7B2 0%, #FFE6F2 100%)',
    'linear-gradient(135deg, #FF9AA2 0%, #FFD3B6 100%)'
  ];
  document.querySelector('.main-header').style.background = gradients[gradientIndex % 3];
  gradientIndex++;
}, 10000);

// 移动端触摸事件处理
let touchStartX = 0;
document.querySelector('.timeline').addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

document.querySelector('.timeline').addEventListener('touchmove', e => {
  const touch = e.touches[0];
  const diff = touchStartX - touch.clientX;
  this.scrollLeft += diff;
  touchStartX = touch.clientX;
});