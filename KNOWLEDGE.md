# 网站
  - 背景色生成: `https://webgradients.com/?ref=usniemvuilaptrinh`
  - 渐变色生成: `https://cssgradient.io/`
  - 生成浪花: `https://getwaves.io/`
  - 生成形状: `https://www.shapedivider.app/`
             `https://app.haikei.app/` 
  - 动效生成: `https://animista.net`
  - 图片裁剪成各种形状: `https://bennettfeely.com/clippy/`
  - 文字3D效果: `https://bennettfeely.com/ztext/`
  - 各种css效果集合: `https://bennettfeely.com/`
  - 各种插画下载: `https://themeisle.com/illustrations/`
  - 设置滚动条样式: `https://scrollbar.app/`
  - 条纹背景: `https://stripesgenerator.com/`
  - 查找设计页面: `https://dribbble.com/`
  - 炫酷组件: `https://uiverse.io/elements`




# 发送邮件API
  - `https://resend.com/`

# 阻止鼠标选择文本
  `.no-select { user-select: none }`

# 模糊背景或者元素
  `.blur { filter: blur(20px) }`

# 文字首字母自定义css
  ```
  p::first-letter {
    font-weight: bold;
    color: #333;
  }
  ```

# 变量交换，解构赋值
  `[a, b] = [b, a];`

# 事件循环（Event Loop）机制，包括同步任务、微任务（Microtasks）和宏任务（Macrotasks）的执行顺序 
  - 同步代码 优先执行。
  - 微任务（如 Promise.then 和 await 之后的代码）在同步代码执行完毕后立即执行。
  - 宏任务（如 setTimeout）在微任务执行完毕后执行。
  ```
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }

  async function async2() {
    console.log("async2");
  }

  console.log("script start");

  setTimeout(function () {
    console.log("setTimeout");
  }, 0);

  async1();

  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });

  console.log("script end");
  ```





