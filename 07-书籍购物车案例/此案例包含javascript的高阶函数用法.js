      // javascript的高阶函数：
      const nums = [10, 20, 30, 40, 50];

      // 编程式范式：命令式编程/声明式编程
      // 编程式编程（第一公民：对象），函数式编程（第一公民：函数）
      // filter/map/reduce高阶函数
      // ①：
      // filter高阶函数的使用: 它的回调函数有一个要求，必须返回一个boolean值
      // true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中去
      // false：当返回false时，函数内部会过滤掉这次的 n
      let newNum1 = nums.filter(function (n) {
        return n < 100;
      })
      console.log('newNum1==filter==' + newNum1);

      // ②：
      // map高阶函数的使用
      let newNum2 = newNum1.map(function (n) {
        return n * 2;
      })
      console.log('newNum2==map==' + newNum2);
      let newNum21 = nums.map(function (n) {
        // 判断条件无效，输出结果与上面一样，看来还是需要filter来过滤
        if (n < 80) {
          return n * 2;
        } else {
          return;
        }
      })
      console.log('newNum21==map==' + newNum21);

      // ③：
      //6.reduce高阶函数的使用: 对数组中的所有数据进行汇总（相加，相乘......）
      let total = newNum2.reduce(function (preValue, value) {
        return preValue + value;
      }, 0)
      console.log('total===' + total);
      // 长度为 5
      //         preValue   value
      //第一次：    0         20
      //第二次：    20        40
      //第三次：    60        60
      //第四次：    120       80
      //第五次：    200       100
      //输出        300

      //④：将上面三个函数综合起来使用：
      let sum = nums.filter(function (n) {
        return n < 50
      }).map(function (n) {
        return n * 2
      }).reduce(function (preValue, value) {
        return preValue + value
      }, 0)
      console.log('sum===' + sum);

      //⑤：使用箭头函数将上面三个函数综合起来使用（类似lombda表达式）
      let sum1 = nums.filter(n => n < 50).map(n => n * 2).reduce((pre, value) => pre + value);
      console.log('sum1===' + sum1);