window.onload = function () {
    const esw = document.querySelector('#email-sug-wrapper'),
        ei = document.querySelector('#email-input')
    let elist = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net'],
        liindex = 0 //选项li标签的索引，用此来进行键盘事件选中的判定

    //输入框失去焦点
    ei.addEventListener('blur', function () {
        hidden()
        ei.style.borderColor = '#ccc'
    })

    //输入框获得焦点
    ei.addEventListener('focus', function () {
        ei.style.borderColor = 'dodgerblue'
    })

    //输入框内容改变事件
    ei.addEventListener('input', function () {
        if (trim(ei.value)) {
            show()
            addemail()
            reset()
        } else {
            hidden()
        }
    })

    //键盘事件
    document.addEventListener('keydown', function (e) {
        let li = document.querySelectorAll('li')
        if (li.length != 0 && esw.style.display == 'block') { //判断是否符合进行键盘事件
            switch (e.keyCode) {
                case 38:
                    li[liindex].style.backgroundColor = '#fff' //重置上一项的背景
                    if (liindex <= 0) {
                        liindex = 4
                    } else {
                        liindex--
                    }
                    li[liindex].style.backgroundColor = 'lightskyblue' //设置背景
                    break;
                case 40:
                    li[liindex].style.backgroundColor = '#fff'
                    if (liindex >= 4) {
                        liindex = 0
                    } else {
                        liindex++
                    }
                    li[liindex].style.backgroundColor = 'lightskyblue'
                    break;
                case 13:
                    ei.value = li[liindex].innerHTML
                    hidden()
                    break;
            }
        }
    })

    //重置选中状态
    function reset() {
        liindex = 0
        document.querySelectorAll('li')[liindex].style.backgroundColor = 'palevioletred'
    }

    //隐藏列表
    function hidden() {
        esw.style.display = 'none'
    }

    //显示列表
    function show() {
        esw.style.display = 'block'
    }

    //增加email后缀
    function addemail() {
        esw.innerHTML = '' //清空文本
        let eivalue = trim(ei.value),
            cindex = eivalue.indexOf('@'), //获取@的索引
            leftvalue = getleft(eivalue, cindex)
        getright(eivalue, cindex).forEach(function (val, index) {
            let li = document.createElement('li'),
                content = leftvalue + val,
                txt = document.createTextNode(content)
            li.appendChild(txt)
            esw.appendChild(li)
            addli(li, content)
        })
    }

    //去除前后空格
    function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    //获取@前面输入内容
    function getleft(eivalue, cindex) {
        if (cindex >= 0) {
            return eivalue.slice(0, cindex)
        } else {
            return eivalue
        }
    }

    //匹配@后面的内容
    function getright(eivalue, cindex) {
        let gremail = []
        if (cindex == -1) { //未输入@即匹配所有
            gremail = elist
        } else {
            let rightvalue = eivalue.slice(cindex) //获取@后面的值
            elist.forEach(function (val) {
                if (val.indexOf(rightvalue) != -1) { //匹配到@后面的值
                    gremail.push(val)
                }
            })
            if (gremail.length == 0) { //当所有值匹配不到
                gremail = elist
            }
        }
        return gremail
    }

    //li选项添加事件
    function addli(li, content) {
        //添加li点击事件（因为blur事件优于click事件，元素先隐藏再判断是否点击，所以要用mousedown）
        li.addEventListener('mousedown', function () {
            ei.value = content
        })
        li.addEventListener('mouseenter', function () {
            li.style.backgroundColor = 'lightskyblue'
        })
        li.addEventListener('mouseleave', function () {
            li.style.backgroundColor = '#fff'
            ei.focus() //如将获得焦点放在mousedown下，会先触发获得焦点，再执行input的失去焦点
        })
    }
    //立即获得焦点
    ei.focus()
}