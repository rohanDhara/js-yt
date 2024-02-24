const lang =["c","java","js","c++","python"];

lang.forEach(function (item) {
    console.log(item); //call back function
})

lang.forEach((val) => {
     console.log(val);
})

function printable(val)
{
     console.log(val);
}
lang.forEach(printable);//here we have to pass ta reference of the function

lang.forEach( (item,index,arr) => {
     console.log(item,index,arr);
} )

const languages = [
    {
        languageName:"JavaScript",
        languageExtension : ".js"
    },
    {
        languageName:"Java",
        languageExtension : ".java"
    },
    {
        languageName:"Python",
        languageExtension : ".py"
    }
] 

languages.forEach( (item) => {
     console.log(`${item.languageExtension} for ${item.languageName}`);
})