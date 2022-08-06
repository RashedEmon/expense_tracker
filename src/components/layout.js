
import ExpenseAdder from "./expense_adder";
import ExpenseTable from "./expense_table";
import { useState, useEffect } from "react";

const Layout = ()=>{
    let item=JSON.parse(localStorage.getItem('items'));
    if(item === null){
        item=[];
    }else{
        item=[...item];
    }
    
    console.log(item);
    const [items,setItem] = useState(item);
    const deleteItem=(e,id)=>{
        console.log(id);
        setItem(items.filter((item)=> item.id !== id));
    };
    const addItem=(obj)=>{
        setItem((prevItem)=> prevItem.concat(obj));
    };
    useEffect(()=>{
       localStorage.setItem("items",JSON.stringify(items));
    },[items]);
    return (
        <>
            <header>
                <h1 className="title">Expense Tracker App</h1>
            </header>
            <ExpenseAdder addItem={addItem}/>
            <ExpenseTable items={items} deleteItem={deleteItem}/>
        </>
    

    );
}
export default Layout;