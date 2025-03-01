

function List() {
    const fruits = [{ name: "apple", color: "red" ,cal:"95" },
    { name: "orange", color: "orange",cal:"45" },
    { name: "banana", color: "yellow" ,cal:"35"},
    { name: "coconut", color: "chịu",cal:"75" },
    { name: "pineapple", color: "chịu nốt",cal:"55" }]
   // fruits.sort((a,b) =>a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));
    // a và b là 2 ký tự liên tiếp trong array
    // hàm này trả về 1 số ||số âm : nếu a đứng trước b ||số 0 nếu a bằng b ||số dương nếu a đứng sau b 
    // localeCompare() là phương thức để so sánh 2 chuỗi 
    // nếu a.name đứng trước b.name thì trả về -1 và ngược lại 
    //nếu trả về số dương thì đổi vị trí , âm thì giữ nguyên 
    //Ví dụ: Với "ca" và "cá", localeCompare() sẽ sắp xếp đúng theo tiếng Việt.

    fruits.sort((a,b) => b.cal - a.cal)

   //const CalFruits = fruits.filter( fruits => fruits.cal <70)
   

    // &nbsp; là ký tự để tạo khoảng trắng

    const listIteam = fruits.map(fruits => <li key={fruits.name}>{fruits.name} :  &nbsp;
                                                <b>{fruits.color} </b> : &nbsp;
                                                {fruits.cal}</li>)
    const listIteam2 = fruits.map(fruits => <li key={fruits.color}>{fruits.color}</li>)
    return (
        // nếu không có thẻ div thì sẽ chỉ in ra listIteam2-> trả về giá trị biểu thức cuối cùng vì có dấu ','
        <>
            <ol>{listIteam}</ol>,
            <ol>{listIteam2}</ol>
        </>
    )
}

export default List