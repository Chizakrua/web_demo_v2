function resizeIframe() { //自動偵測 Room_Types 頁面高度，並將iframe高度實時更新至偵測高度
    const iframe = document.querySelector('iframe');
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
    const windowHeight = window.innerHeight;
    iframe.style.height = (windowHeight - headerHeight - footerHeight) + 'px';
}

window.addEventListener('load', resizeIframe);
window.addEventListener('resize', resizeIframe);