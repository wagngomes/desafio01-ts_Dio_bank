import { DioAccount } from "./DioAccount";

export class StartUpAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)

    }

    depositPlus = (valorDeposito: number): void => {

        if (valorDeposito > 0) {
            this.balance = this.balance + valorDeposito + 10 
        }else {
            throw new Error('Valores negativos não podem ser depositados')
        }

    }




}