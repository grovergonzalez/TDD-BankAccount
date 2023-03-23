
export class BankAccount 
{

  constructor(monto) 
  {
    this.activo = false;
    this.monto = monto;
  }

  open() 
  {
    if (this.activo) 
    {
      throw new ValueError();
    }
    this.activo = true;
    this.monto = 0;
  }

  close() 
  {
    if (this.activo)
    {
      this.activo = false;
    }
    else
    {
      throw new ValueError();
    }
  }

  deposit(monto) 
  {
    if(this.activo && monto > 0)
    {
      this.monto += monto;
    } 
    else
    {
      throw new ValueError();
    }
  }

  withdraw(monto) 
  {
    if (!this.activo || monto > this.monto || monto < 0) 
    {
      throw new ValueError();
    }
    this.monto -= monto;
  }

  get balance() 
  {
    if(!this.activo)
    {
      throw new ValueError();
    }
    return this.monto;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}