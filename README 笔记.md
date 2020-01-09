### 为什么要做移动端适配？

### px/em/rem 的区别？

### 移动端适配为什么要等分？
    降低单位rem值的大小，便于计算，提高精确度

    function remRefresh() {
        // 1. 获取屏幕的宽度
        let clientWidth = document.documentElement.clientWidth;
        let clientWidth = document.documentElement.clientWidth;

        // 2. 将屏幕的宽度等分, 等分的目的： 降低单位rem值的大小，便于换算，提高精确度
        let rem = clientWidth / 10;
        let rem = clientWidth / 10;

        // 3. 设置根节点字体的大小
        document.documentElement.style.fontSize = rem + 'px'
        document.documentElement.style.fontSize = rem + 'px'

        // 4. 设置body字体大小
        document.body.style.fontSize = '16px'
        document.body.style.fontSize = '16px'
      }


      window.addEventListener('pageshow', () => {
        remRefresh()
      })
      let timeoutId;
      window.addEventListener('resize', () => {
        timeoutId && clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          console.log('resize');
          remRefresh()
        }, 2000)
      })

### Vue脚手架
    版本：
        脚手架版本4.x , Vue版本2
        脚手架版本2.x , Vue版本2

### stylus
    css预编译语言
        省略{} /：/；


### 适配
    为什么适配？
        手机默认的网页宽度是980，手机屏幕的大小通常小于980
        手机机型不同，屏幕大小不同
    适配的目的
        让一张设计稿的内容在不同的机型上呈现的效果一致
    如何做适配
        1.viewport适配
            布局视口：网页的宽度
            视觉视口：所见即所得，屏幕大小

        适配库
            lib

