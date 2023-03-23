
export class BankAccount {

  constructor(monto) {
    this.activo = false;
    this.monto = monto;
  }

  open() {
    if (this.activo) 
    {
      throw new ValueError();
    }
    this.activo = true;
    this.monto = 0;
  }

  close() {
    //throw new Error("Remove this statement and implement this function");
  }

  deposit(monto) {
    if(this.activo){
      this.monto += monto;
    }
  }

  withdraw() {
    if (this.activo || monto < this.dinero || monto > 0) 
    {
      this.monto -= monto;
    }
  }

  get balance() {
   // throw new Error("Remove this statement and implement this function");
    return this.monto;
  }
}