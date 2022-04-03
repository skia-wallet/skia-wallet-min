import React, {Component} from 'react';
import { public_key, accounts, showWelcome, showAccounts, createAccount, init }from './src/service';

export default class extends Component {
    render() {
    if (typeof window === 'object') {
        if(accounts.length == 0){
            showWelcome();
        } else {
            showAccounts();
        }
        document.getElementById("create-account").addEventListener('click', createAccount);
        //localStorage.clear();
    }    
        return (
            
            <>
            <header>
                <h1>Skia Wallet</h1>
            </header>
            <section className='accounts' id="create">
                <h1>Welcome to Skia Wallet</h1><br />

                <p>Get started by creating an account </p><br/>
                <button id="create-account">Create Account</button>
                <p id='wait'></p>
            </section>
            <section className='accounts' id="account">
                <h1>Accounts</h1><br />
    
                <p><strong>Public key: </strong><span id='public-key'>{public_key}</span> </p>
                <p id='private'><strong>Private Key: </strong><span id='private-key'></span></p><br />
                <button>Show Private Key</button>
            {
                accounts ?
                    accounts.map((account) => 
                        <div className="flex-container">
                            <div className="flex-item">
                                <p>Account Name: <span id='account-name'>{account.name}</span></p>
                                <p>Contract Address: <span id='contract-address'>{account.contract_address}</span></p>
                                <p>Type: <span id='account-type'> {account.type} </span></p>
                                <p>Status: <span id='account-status'> {account.status} </span></p><br/>
                                <button id={account.name} onClick={init(account)}>Initialize</button>
                            </div>
                        </div>
                    ) : <></>
            }
            </section>
            </>
        )
    }
}