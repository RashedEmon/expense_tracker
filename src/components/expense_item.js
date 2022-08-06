const ExpenseItem = ({id,type,title,date,amount,deleteItem})=>{
    
    return (
        <tr key={id}>
            <td>{type}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>{amount}</td>
            <td><a onClick={(e) => deleteItem(e,id)}>{"Delete"}</a></td>
        </tr>
    );
}
export default  ExpenseItem;