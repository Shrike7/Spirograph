const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

//Settings
const spiroRADIUS = document.querySelector('#spiroRADIUS');
    spiroRadius = document.querySelector('#spiroRadius'),
    spiroDistance = document.querySelector('#spiroDistance'),
    spiroAngel = document.querySelector('#spiroAngel'),
    spiroColor = document.querySelector('#spiroColor'),
    clearOnChange = document.querySelector('#clearOnChange'),
    settingsBtn = document.querySelector('#settingsBtn');
//Labels 
const spiroRADIUSLabel = document.querySelector("[for='spiroRADIUS']"),
    spiroRadiusLabel = document.querySelector("[for='spiroRadius']"),
    spiroDistanceLabel = document.querySelector("[for='spiroDistance']"),
    spiroAngelLabel = document.querySelector("[for='spiroAngel']");

let x,
    y,
    r,
    R,
    teta = 0,
    myTeta = 1,
    d;
let timer;
let isStart = false;

const spiro = () => {
    if (clearOnChange.checked) {
        if (R != spiroRADIUS.value || r != spiroRadius.value || d != spiroDistance.value || angel != spiroAngel.value || color != spiroColor.value) {
            ctx.clearRect(0,0,700,600);

            spiroRADIUSLabel.innerHTML = 'RADIUS' + '&nbsp;' + '&nbsp;' +  spiroRADIUS.value;
            spiroRadiusLabel.innerHTML = 'Radius' + '&nbsp;' + '&nbsp;' +  spiroRadius.value;
            spiroDistanceLabel.innerHTML = 'Distance' + '&nbsp;' + '&nbsp;' +  spiroDistance.value;
            spiroAngelLabel.innerHTML = 'Angel' + '&nbsp;' + '&nbsp;' +  spiroAngel.value;
        }
    }
    R = spiroRADIUS.value;
    r = spiroRadius.value;
    d = spiroDistance.value;
    angel = spiroAngel.value;
    color = spiroColor.value;
    
    x = (R - r) * Math.cos(teta) + d * Math.cos(teta * ((R-r)/r));
    y = (R - r) * Math.sin(teta) - d * Math.sin(teta * ((R - r)/r));
    teta += myTeta/angel;

    ctx.fillStyle = color;
    ctx.fillRect(300 + x,300 + y,4,4);

    timer = setTimeout(spiro, 1);
}

settingsBtn.addEventListener('click', () => {
    if (isStart) {
        clearTimeout(timer);
        settingsBtn.innerHTML = 'Start';
        isStart = false;
    } else {
        settingsBtn.innerHTML = 'Stop';
        isStart = true;
        spiro();
    }
});