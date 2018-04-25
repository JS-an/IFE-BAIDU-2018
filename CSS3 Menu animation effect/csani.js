var ctx1 = document.getElementById('ctx1'),
    ctx2 = document.getElementById('ctx2'),
    ctx3 = document.getElementById('ctx3')

function etuEffect() {
    var judge = ctx1.getAttribute('class')
    if (judge == 'etu-effect') {
        ctx3.setAttribute('class', 'etu-p-ceffect')
        ctx1.setAttribute('class', 'etu-ceffect')
    }
    else {
        ctx3.setAttribute('class', 'etu-p-effect')
        ctx1.setAttribute('class', 'etu-effect')
    }
}