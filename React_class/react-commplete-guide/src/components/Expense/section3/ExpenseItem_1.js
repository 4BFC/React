import './ExpenseItem.css';

function ExpenseItem() {
  //date는 객체이기 때문에 객체 호출이 가능한 함수를 toISOString을 사용해야한다.
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>);
}
export default ExpenseItem;