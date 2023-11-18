const arr = [
    {user:"Amber",title:"Actress"},
    {user:"Peter",title:"Spiderman"}
];
console.log(arr[0].user);
let user={
    name:"John",
    gender:"Male",
    age:30,
    blogs:['I am the greatest!','Now you see me','Friendly hero','King Leonidas of Sparta!'],
    picker:function(){
        console.log("List of blogs");
        this.blogs.forEach(blogs=>{
            console.log(blogs);
        })
    }
}
user.picker();