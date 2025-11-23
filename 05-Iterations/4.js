const coding = ["js", "ruby", "java", "c"]

// coding.forEach( function (item){
// console.log(item);
// })


// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)



coding.forEach( (items, index, arr) =>{
    console.log(items,index,arr);
})


const myCoding ={
    {
        languageName = "Javascript",
        languageFileName="js"
    },
    {
        languageName="python",
        languageFileName="ppy"
    }
}
myCoding.forEach((item) =>
{
    console.log(item.lan)
})