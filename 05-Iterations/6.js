// const coding = ["js", "java", "rubby", "python", "c++"]


// // const values = coding.forEach( (item) => {
// //     console.log(item);
// //     return item;
// // })
// // console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9]
 const newNums = myNum.filter( (num) =>  num >4 )

//  const newNums = myNum.filter( (item) =>
// {
//     item > 4
// return  item;
// // })
 console.log(newNums);


 const books = [
    { title: 'Book One', genre : 'Fiction', publish : 1981, edition : 2004},
    { title: 'Book Two', genre : 'Non-Fiction', publish : 1992, edition : 2008},
    { title: 'Book Three', genre : 'History', publish : 1999, edition : 2007},
    { title: 'Book Four', genre : 'Non-Fiction', publish : 1989, edition : 2010},
    { title: 'Book Five', genre : 'Science', publish : 2009, edition : 2014},
    { title: 'Book Six', genre : 'Fiction', publish : 1987, edition : 2010},
 ];

 const userBooks = books.filter( (bk) => bk.genre  === 'Fiction')
//  const userBooks = books.filter( (bk) => bk.publish >= 1999  )

 console.log(userBooks)
 
