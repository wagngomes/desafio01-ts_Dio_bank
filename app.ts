import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StartUpAccount } from './class/StartUpAccount'

const statUp: StartUpAccount = new StartUpAccount('Nath', 15)
statUp.getBalance()
statUp.depositPlus(115)

statUp.getBalance()