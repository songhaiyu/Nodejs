function sum(n) {
    var sum = 0;
    for(var i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

exports.sum = sum;//node中只能访问exports暴漏的内容，每个模块都有一个私有的作用域