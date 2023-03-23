
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
  }

  deposit(monto) 
  {
    if(this.activo)
    {
      this.monto += monto;
    } 
    else
    {
      throw new ValueError();
    }
  }

  withdraw() 
  {
    if (!this.activo || monto > this.dinero || monto < 0) 
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