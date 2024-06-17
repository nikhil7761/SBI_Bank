import React from 'react';

function Transfer() {
  return (
    <div className="container">
      <form>
        <h2>Transfer</h2>
        <label>
          From Account:
          <input type="text" name="fromAccount" />
        </label>
        <label>
          To Account:
          <input type="text" name="toAccount" />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" />
        </label>
        <input type="submit" value="Transfer" />
      </form>
    </div>
  );
}

export default Transfer;
