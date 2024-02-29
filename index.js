// async function sample(){
//     const num = await asyncFn();
//     num++;
//     return num;
// }

// asyncFn(0).then(num => {
//     num++;
//     return num;
// })

function wait(num){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            console.log(num);
            if(num === 2){
                reject(num);
            }else{
                resolve(num);
            }
        }, 100);
    });
}

async function init(){
    let num = 0;
    try{
        num = await wait(num);
        num++;
        num = await wait(num);
        num++;
        num = await wait(num);
        num++;
    }catch(e){
        throw new Error('Error is occured!', e)
    }
    return num;
}
console.log(init());

async function hello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello");
        }, 2000);
    });
}

async function sayHello() {
    const msg = await hello();
    console.log(msg); // 2秒後に"Hello"が出力される
}

sayHello();