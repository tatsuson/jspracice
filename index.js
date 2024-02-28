console.log('%c [Javascript]', 'color:red; font-size: 1.5em')

function wait(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            if(num === 2){
                reject(num);
            }else{
                resolve(num);
            }
        }, 1000);

    });
}

wait(0).then(num => {
    num++;
    wait(num)
    return num;
}).then(num => {
    num++;
    return wait(num);
}).then(num => {
    num++;
    return wait(num);
}).then(num => {
    num++;
    return wait(num);
}).catch(num => {
    num++;
   console.error(num, 'error');
})