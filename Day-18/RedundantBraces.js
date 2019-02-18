


//duyệt biểu thức chỉ push các toán tử  và '(' vào stack (ko cần quan tâm đến toán hạng)
//khi gặp ')' có nghĩa là đã có 1 biểu thức con được tạo ra nếu mà đỉnh của stack là ')' thì return 1
// nếu không pop hết các phần tử bao h đến ')' pop thêm lần nữa





function redundantBraces(expression){
    let stack = [];
    let arrExp = expression.split('');
    let i = 0;
    debugger;
    while(i < arrExp.length){
        if( arrExp[i] === '(' || arrExp[i] === '+' || arrExp[i] === '-' || arrExp[i] === '*' || arrExp[i] === '/'){
            stack.push(arrExp[i]);
        }
        else if(arrExp[i] === ')'){
            if(stack[stack.length - 1] !== '('){
                while(stack.length > 0 && stack[stack.length - 1] !== '('){
                    stack.pop();
                }
                stack.pop();
            }
            else{
                return 1;
            }
        }
        ++i;
    }
    return 0;
}

console.log(redundantBraces('((a+b))'));