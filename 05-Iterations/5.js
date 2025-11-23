const coding = ["js", "ruby" , "java" , "c"]
coding.forEach(  function (item){

})
console.log(coding);

const language = ["c++", "javascript", "python" , "java", "c"]
language.copyWithin(0,1,3)//it will copy from index 1 to index 3 and paste it to index 0 
language.forEach((item) => {
    console.log(item);
})

const mycoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName: "python",
        languageFile : ".py"
    },
    {
        languageName: "rubby",
        languageFile: ".rb"
    }

]
mycoding.forEach( (item) => {

    console.log(item.languageFile);

})