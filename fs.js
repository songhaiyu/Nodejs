/**
 * Created by FL's PC on 2017/3/4.
 */
var fs = require("fs");



/**
 * 异步读取,
 */

var msg = "";
console.log("start Async read.");
fs.readFile("sum.js",function (err,data) {//,"utf-8"可选参数
    if(err){
        //console.log(err);
        msg = err;
    }
    else{
        msg = data.toString();//不写tostring的话是16进制
        //console.log(data);
        console.log("end Async read.");
    }
    console.log(msg);
});

/**
 * 同步读取
 */
console.log("start Sync read.");
var data = fs.readFileSync("log.txt","utf-8");
console.log(data);
console.log("end Sync read.");