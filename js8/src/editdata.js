function editData(e) {
    let td = e.target,
        input = document.createElement('input'),
        confirm = document.createElement('input'),
        close = document.createElement('input'),
        val = parseInt(e.target.innerHTML)
    input.type = 'text'
    input.value = val
    input.setAttribute('class', 'edit-text')
    confirm.type = 'submit'
    confirm.value = '√'
    confirm.setAttribute('class', 'confirm')
    close.type = 'submit'
    close.value = '×'
    close.setAttribute('class', 'close')
    td.appendChild(input)
    td.appendChild(confirm)
    td.appendChild(close)
}

export {
    editData
}