import propTypes from 'prop-types'
import styles from './Transactions.module.css'

const TransactionHistory = ({items}) => {
    return (
    <table className={(styles["transaction-history"])}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id,type, amount, currency}) => {
        return (
          <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
          </tr>
        )
      })}
  </tbody>
</table>
    )
};

TransactionHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
}

export default TransactionHistory;