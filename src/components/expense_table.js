import ExpenseItem from "./expense_item";

const ExpenseTable =({items,deleteItem})=>{
    
    return (
        <section className="content">
            <table className="table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody id="expenseTable">
                    {items.map((item)=>{
                        return <ExpenseItem id={item.id} type={item.type} title={item.title} date={item.date} amount={item.amount} deleteItem={deleteItem}/>
                    })}
                </tbody>
            </table>
        </section>
    );
}
export default ExpenseTable;