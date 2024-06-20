import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StartUpAccount } from './class/StartUpAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(5, 'Felipe', 120)

peopleAccount.deposit(1000)
peopleAccount.withdraw(200)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.setName('Felipe Moura')

const companyAccount: CompanyAccount = new CompanyAccount('strato ltda', 99820)
companyAccount.getBalance()
companyAccount.deposit(100000)
companyAccount.withdraw(2000)
companyAccount.getBalance()
companyAccount.getLoan(750000)
companyAccount.getName()
companyAccount.setName('strato S/A')

const statUp: StartUpAccount = new StartUpAccount('Nath', 15)

statUp.deposit(10000)
statUp.depositPlus(200)
statUp.getBalance()
statUp.withdraw(400)
statUp.getName()
statUp.setName('Nath 2')

