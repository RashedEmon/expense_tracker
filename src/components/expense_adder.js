import {useState} from 'react';
import Alert from './alert';

const ExpenseAdder = ({addItem})=>{
    const [type,setType]=useState("Choose one...");
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("mm/dd/yyyy");
    // const [showAlert, toggleAlert] = useState(false);
    const addExpense = ()=>{

        if(title.length<=0 || type==="chooseOne" || amount.length<=0 || date === "mm/dd/yyyy"){
            //toggleAlert((prev)=> !prev);
            return false;
        }
        //toggleAlert(false);
        addItem(
            {
                id: new Date().getTime().toString(),
                type,
                title,
                amount,
                date
            })
            setAmount("");
            setTitle("");
    }

    return (
        <section className="content">
            {/* {showAlert && <Alert message={"Field is empty"}/>} */}
        <h3 className="secondTitle">Add a new item: </h3>
        <div className="form">
            <form id="expForm" onSubmit={(e)=> e.preventDefault()}>
                <div className={"formLine left"}>
                    <span for="type">Type:</span>
                    <select id="type" value={type} onChange={(e)=>{setType(e.target.value)}}>
                        <option value="chooseOne">Choose one...</option>
                        <option value="Card">Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Cryptocoin">Cryptocoin</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={"formLine right"}>
                    <span for="name">Title:</span>
                    <input type="text" id="name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className={"formLine left"}>
                    <span for="date">Date:</span>
                    <input type="date" id="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                </div>
                <div className={"formLine right"}>
                    <span for="amount">Amount:</span>
                    <input type="text" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button type="submit" className="buttonSave" onClick={()=>addExpense()}>Add a new expense</button>
            </form>
        </div>
    </section>
    );
}

export default ExpenseAdder;