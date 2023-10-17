function generateDeeplink() {
    const originalLink = document.getElementById('originalLink').value;
    let deeplink = null;

    const domains = ['https://www.pin-up.casino/', 'https://www.pin-up313.com/', 'https://pin-up.world/', 'https://www.pin-up.bet/', 'https://www.pin-up475.com/', 'https://www.pin-up325.com/'];

    for (const domain of domains) {
        const parts = originalLink.split(domain);
        if (parts.length === 2) {
            deeplink = `https://pin-up-cc.com/CCdeep?deeplink=${parts[1].toLowerCase()}`;
            break;
        }
    }

    if (deeplink) {
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
