import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(66)
peopleAccount.getBalance()
peopleAccount.deposit(144)
peopleAccount.getBalance()
peopleAccount.withdraw(50)
peopleAccount.getBalance()

