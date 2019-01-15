// Môi trường JavaScript tiêu chuẩn cung cấp một cấu trúc dữ liệu khác gọi là Set. Giống như một thể hiện của Map, một tập hợp chứa một tập hợp các giá trị. Không giống như Map, nó không liên kết các giá trị khác với những người mà nó chỉ theo dõi những giá trị nào là một phần của tập hợp. Một giá trị có thể là một phần của tập hợp chỉ một lần nữa, thêm vào đó một lần nữa không có hiệu lực.

// Viết một lớp được gọi là Group (vì Set đã được thực hiện). Giống như Set, nó có add, delete và has các phương thức. Hàm tạo của nó tạo một nhóm trống, thêm một giá trị cho nhóm (nhưng chỉ khi nó chưa phải là thành viên), xóa xóa đối số khỏi nhóm (nếu là thành viên) và trả về giá trị Boolean cho biết liệu đối số của nó là một thành viên của nhóm.

// Sử dụng toán tử === hoặc một cái gì đó tương đương như indexOf, để xác định xem hai giá trị có giống nhau không.

// Cung cấp cho lớp một tĩnh từ phương thức lấy một đối tượng có thể lặp lại làm đối số và tạo một nhóm chứa tất cả các giá trị được tạo ra bằng cách lặp qua nó.

class Group{
    constructor(){
        this.store = [];
    };
    static from(arr){
        let group = new Group;
        for(let i of arr){
            group.add(i);
        }
        return group;
    };
    add(element){
        if(!this.has(element)){
            this.store.push(element);
        }
    }
    delete(element){
        this.store = this.store.filter(ele => ele !== element );
    }
    has(element){
        return this.store.includes(element);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.has(10));
