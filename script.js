function generateDeeplink() {
    const originalLink = document.getElementById('originalLink').value;
    const parts = originalLink.split('https://www.pin-up.casino/');

    if (parts.length === 2) {
        const deeplink = `https://pin-up-cc.com/CCdeep?deeplink=${parts[1].toLowerCase()}`;
        document.getElementById('deeplinkResult').textContent = deeplink;
    } else {
        alert('El enlace original no es válido');
    }
}

function copyDeeplink() {
    const deeplinkResult = document.getElementById('deeplinkResult');
    const textArea = document.createElement('textarea');
    textArea.value = deeplinkResult.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
