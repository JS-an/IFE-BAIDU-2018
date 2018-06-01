 //绘画选择按钮
 function drawCheckBox() {
     let drawCheckBoxList = []
     //得到绘制数组
     sourceData.forEach(function (el) {
         let len = drawCheckBoxList.length,
             product = el.product,
             region = el.region
         if (len === 0) {
             drawCheckBoxList.push([product], [region])
         } else {
             let isproduct = drawCheckBoxList[0].every(function (item) {
                 return item !== product
             })
             let isregion = drawCheckBoxList[1].every(function (item) {
                 return item !== region
             })
             if (isproduct) {
                 drawCheckBoxList[0].push(product)
             } else if (isregion) {
                 drawCheckBoxList[1].push(region)
             }
         }
     })
     //创建选项框
     function createCheckBox(el) {
         let checkBoxLi = document.createElement('li'),
             checkBoxLabel = document.createElement('label'),
             checkBoxInput = document.createElement('input'),
             checkBoxText = document.createTextNode(el)
         checkBoxInput.type = 'checkbox'
         checkBoxInput.value = el
         checkBoxInput.checked = true
         checkBoxLabel.appendChild(checkBoxInput)
         checkBoxLabel.appendChild(checkBoxText)
         checkBoxLi.appendChild(checkBoxLabel)
         return checkBoxLi
     }
     //渲染选项框
     drawCheckBoxList.forEach(function (el, index) {
         drawCheckBoxList[index].forEach(function (item) {
             let checkBoxLi = createCheckBox(item)
             index === 0 ? productRadioWrapper.appendChild(checkBoxLi) : regionRadioWrapper.appendChild(checkBoxLi)
         })
         //渲染全选按钮
         let checkBoxButton = document.createElement('button')
         checkBoxButton.value = '1'
         checkBoxButton.innerHTML = '全选/反选'
         index === 0 ? productRadioWrapper.appendChild(checkBoxButton) : regionRadioWrapper.appendChild(checkBoxButton)
     })
 }

 //全选按钮
 function checkAll(e, checkall) {
     if (e.value === '1') {
         checkall.forEach(function (el) {
             el.checked = false
         })
         e.value = '2'
     } else if (e.value === '2') {
         checkall.forEach(function (el) {
             el.checked = true
         })
         e.value = '1'
     }
 }

 export {
     drawCheckBox,
     checkAll
 }