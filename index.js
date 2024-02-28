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
        }, num);

    });
}

// Promise.all([wait(1000), wait(1500), wait(2000)]).then(nums => {
//     console.log(nums)
// })

Promise.race([wait(1000), wait(1500), wait(2000)]).then(nums => {
    console.log(nums + 1)
})