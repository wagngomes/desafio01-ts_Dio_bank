export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valorDepositado: number): void => {

    if (valorDepositado > 0 ){
      this.balance = this.balance + valorDepositado

    }else {
      throw new Error('Valores negativos não podem ser depositados')
    }
  }

  withdraw = (valorSolicitado: number): void => {
    if (this.validateStatus() && this.balance > valorSolicitado){
      this.balance = this.balance - valorSolicitado
      console.log(`Você sacou ${valorSolicitado}`)     
    }else {
      throw new Error('Conta inativa ou saldo insufuciente')
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
