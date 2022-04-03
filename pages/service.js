import { ec, defaultProvider, Contract, hash } from 'starknet';
import CompiledAccount from '../public/Account.json';

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
        accounts[accounts.length] = account;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        console.log(`account deployed to ${accountTxn.address}`);
        location.reload();
    }

    async function init(account) {
        const accountContract = new Contract(
            CompiledAccount.abi,
            account.contract_address
        );

        console.log("initializing account....");
        await accountContract.initialize(
            public_key,
            "0"
        );
        document.getElementById(account.name).style.display = "none";
    }

    module.exports = {public_key, accounts, showWelcome, showAccounts, createAccount, init}
}

