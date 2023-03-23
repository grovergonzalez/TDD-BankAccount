import { BankAccount, ValueError } from "./bank-account";

describe("Bank Account", () => {
  it("has zero balance when is a newly opened account", () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });
});
