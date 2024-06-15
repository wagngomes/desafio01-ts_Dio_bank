import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valorEmprestimoSolicitado: number): void => {
    if (this.validateStatus()){
      this.balance = this.balance + valorEmprestimoSolicitado
      console.log(`Voce pegou um emprestimo de ${valorEmprestimoSolicitado}`)
    }else {
      throw new Error('emprestimo negado')
    }
    
  }


}
