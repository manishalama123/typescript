// generics

class StorageContainer<T>{
    private contents: T[]

    constructor(){
        this.contents = [];

    }
    addItem(item: T): void{
        this.contents.push(item);
    }
    getItem(idx: number): T | undefined{
        return this.contents[idx];

    }
}

const usernames = new StorageContainer<string>();
usernames.addItem("pedroTech");
usernames.addItem("john doe");
console.log(usernames.getItem(0));
const count = new StorageContainer<number>();
count.addItem(9);
count.addItem(20);
console.log(count.getItem(1));
