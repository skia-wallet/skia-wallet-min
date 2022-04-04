import { ec, defaultProvider, Contract, hash, Account } from 'starknet';
import { getKeyPair } from 'starknet/dist/utils/ellipticCurve';
import { transformCallsToMulticallArrays } from 'starknet/utils/transaction'
import CompiledAccount from './public/Account.json';

if (typeof window === 'object') {
    let accounts = [];
    let public_key;

    if (localStorage.getItem("accounts")) {
        accounts = JSON.parse(localStorage.getItem("accounts"));
        public_key = JSON.parse(localStorage.getItem("keys")).keyPub.toString();
    }
    function showWelcome() {
        document.querySelector('#create').style.display = "block";
        document.querySelector('#account').style.display = "none";
    }

    function showAccounts() {
        document.querySelector('#create').style.display = "none";
        document.querySelector('#account').style.display = "block";
    }
    
    async function createAccount() {
        document.getElementById('wait').innerHTML = "Please wait, deploying account...";
        const starkKeyPair = ec.genKeyPair();
        const starkKeyPub = ec.getStarkKey(starkKeyPair);
        
        localStorage.setItem("keys", JSON.stringify({keyPair: starkKeyPair, keyPub: starkKeyPub}));
        
        console.log("deploying account....");
        const accountTxn = await defaultProvider.deployContract({
            contract: CompiledAccount,
            addressSalt: starkKeyPub
        });
        
        const account = {
            name: "Account ".concat(accounts.length.toString()),
            contract_address: accountTxn.address,
            status: "Account Deployed!",
            type: "Simple"
        }
        const accountContract = new Contract(
            CompiledAccount.abi,
            account.contract_address
        );
    
        console.log("initializing account....");
        await accountContract.initialize(
            public_key,
            "0"
        );

        accounts[accounts.length] = account;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        console.log(`account deployed to ${accountTxn.address}`);
        location.reload();
    }

    async function invoke(account, contract_address, method, args, callBackUrl) {

        const accountContract = new Account(
            defaultProvider,
            accounts[account].contract_address,
            JSON.parse(localStorage.getItem("keys")).keyPair
        );

        console.log(`Callling contract...`);
        
        // Account.execute not working
        // TODO: Replace with accoount.execute

        const Txn = await defaultProvider.invokeFunction({
            contractAddress: contract_address,
            entrypoint: method,
            calldata: args
        });
        document.getElementById('status').innerHTML = `Transaction hash: <a href="https://goerli.voyager.online/tx/${Txn.transaction_hash}">${Txn.transaction_hash}</a>`;
        //window.location.href = callBackUrl;
        // console.log("success!")
        // return Txn.transaction_hash;
    }

    module.exports = {public_key, accounts, showWelcome, showAccounts, createAccount, invoke}
}

