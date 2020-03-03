const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '算法导论',
        date: '2019-2',
        price: 87.21,
        count: 1,
        exchange: true
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        date: '2019-4',
        price: 97.21,
        count: 2,
        exchange: true
      },
      {
        id: 3,
        name: '编程珠玑',
        date: '2012-2',
        price: 77.21,
        count: 1,
        exchange: true
      },
      {
        id: 4,
        name: '大话西游',
        date: '2019-7',
        price: 100,
        count: 1,
        exchange: true
      }
    ],
    number: 2,
    exchange: false,
    isFull: true
  },
  computed: {
    showTotalPrice() {
      let totalPrice = 0;
      //1.普通for循环
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2.index是索引
      // for (let index in this.books) {
      //   totalPrice += this.books[index].price * this.books[index].count
      // }

      //3.for of
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }

      //4.利用reduce函数来写
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)

      return totalPrice
    }
  },
  methods: {
    // 行内按钮操作
    subBtn(index) {
      if (this.books[index].count > 0) {
        this.books[index].count--
      }
    },
    addBtn(index) {
      this.books[index].count++
    },
    removeBtn(index) {
      this.books.splice(index, 1)
      if (this.books.length <= 0) {
        this.isFull = !this.isFull
      }
    },
    // 鼠标移动进区域，改变背景颜色
    change(index) {
      // this
      this.number = 1;
      this.active = ".changeColor{ background-color: #cae6e6}"
    },
    remove(index) {
      this.number = 2
    },
    // 改变按钮类型
    changeType() {
      this.exchange = !this.exchange
    },
    addItemBtn() {
      const obj = [5, '数值分析', '2018-8', 96.10, 2];
      this.books.push(obj)
    },
    // 格式化价格
    getfinalPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  filters: {
    showPrice(price) {
      //.toFixed(2)：保留小数点后两位
      return '￥' + price.toFixed(2);
    }
  }
})