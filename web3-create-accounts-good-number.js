const Web3 = require('web3');
var web3 = new Web3();

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    }); 
}

async function main() {
    while (true) {
        await sleep(50);
        var info = web3.eth.accounts.create()
     
        if (info.address.indexOf("abc") != -1){  // 引号里内容根据个人需求修改，例如："0x888""999""abc"
            console.log(info)
       
    
        }

    }

}

main();
 