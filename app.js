const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');

const API_BASE = 'https://coding-test-api.alvalabs.io/api/transaction-management';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const accountId = form.querySelector('[data-type="account-id"]').value.trim();
  const amount = parseFloat(form.querySelector('[data-type="amount"]').value.trim());

  if (!accountId || isNaN(amount)) {
    alert('Please enter a valid account ID and numeric amount.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account_id: accountId, amount })
    });

    const newTransaction = await response.json();

    // Fetch updated account info to get latest balance
    const accountResponse = await fetch(`${API_BASE}/accounts/${accountId}`);
    const accountData = await accountResponse.json();

    renderTransaction(newTransaction, accountData.balance, true);

    form.reset();
  } catch (error) {
    console.error('Error submitting transaction:', error);
    alert('There was an error submitting the transaction.');
  }
});

// Load past transactions on page load
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`${API_BASE}/transactions`);
    const transactions = await response.json();

    // Render latest first (assuming newest last in array)
    for (let i = transactions.length - 1; i >= 0; i--) {
      const tx = transactions[i];
      const balance = i === transactions.length - 1 
        ? (await fetch(`${API_BASE}/accounts/${tx.account_id}`)).then(res => res.json()).then(data => data.balance)
        : null;
      renderTransaction(tx, balance, i === transactions.length - 1);
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
});

function renderTransaction(transaction, balance = null, isLatest = false) {
  // Remove balance attribute from all previous transactions
  const oldBalances = document.querySelectorAll('[data-type="transaction"]');
  oldBalances.forEach(el => el.removeAttribute('data-balance'));

  const div = document.createElement('div');
  div.classList.add('transaction');
  div.setAttribute('data-type', 'transaction');
  div.setAttribute('data-account-id', transaction.account_id);
  div.setAttribute('data-amount', transaction.amount);
  if (isLatest && balance !== null) {
    div.setAttribute('data-balance', balance);
  }

  div.innerHTML = `
    <strong>Account ID:</strong> ${transaction.account_id}<br>
    <strong>Amount:</strong> ${transaction.amount}<br>
    ${isLatest && balance !== null ? `<strong>Balance:</strong> ${balance}` : ''}
  `;

  transactionList.prepend(div);
}
