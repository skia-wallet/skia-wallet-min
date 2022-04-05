import React, {Component} from 'react';
import { public_key, accounts, invoke } from '../service'

export default class extends Component {
    static getInitialProps({query}) {
    return {query}
  }

    render() {
        let query = this.props.query
        const {contract_address, method, args, callbackUrl} = query;
        const newArgs = JSON.parse(args);
        //console.log(typeof(newArgs))

        if (typeof(window) === 'object'){
            document.getElementById("confirm").onclick = function () {
                invoke(0, contract_address, method, newArgs, callbackUrl)
            }
            document.getElementById("cancel").onclick = function () {
                location.href = callbackUrl;
            }
        }

        return (
            <>
                <header>
                    <h1>Skia Wallet</h1>
                </header>
                <section className='accounts'>
                    <h1>Transaction</h1>

                    <p>Do you want to confirm the following transaction ?</p>

                    <div className="flex-container">
                        <div className="flex-item" id='transaction'>
                            <p>contract Adress: {contract_address}</p>
                            <p>method Name: {method}</p>
                            <p>args: {args}</p>
                        </div>
                        <p id='status'></p>
                        <p><button id='confirm'>Confirm</button> <button id='cancel'>Cancel</button></p>
                    </div>
                </section>
            </>
        )
    }
}