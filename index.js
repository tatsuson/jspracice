console.log('%c [Javascript]', 'color:red; font-size: 1.5em')

function wait(callback, num){
    setTimeout(() => {
        console.log(num);
        callback();
    }, 100);
}

wait(() => {
    console.log('callback function is called');
}, 0);