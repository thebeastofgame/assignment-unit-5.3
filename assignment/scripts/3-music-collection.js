console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
function addToCollection(collection,title,artist,yearPublished){
 const newAlbum = {
  title: title,
  artist:artist,
  yearPublished: yearPublished
 };
 collection.push(newAlbum)
 return newAlbum;
};
let myCollection = [];
console.log(addToCollection(myCollection, 'Waqiah','Sudais',2002));
console.log(addToCollection(myCollection, 'Rahman','Sudais',2002));
console.log(addToCollection(myCollection, 'Xadid','Sudais',2002));
console.log(addToCollection(myCollection, 'Qamar','Sudais',2002));
console.log(addToCollection(myCollection, 'Najam','Sudais',2002));
console.log(addToCollection(myCollection, 'Dur','Sudais',2002));

function showCollection(collection){
for ( let i =0; i < collection.length; i++)
  console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`) 
};

function findByArtist(collection, artist){
  const matchingAlbums = [];
  for(let i = 0;  i < collection.length; i++){
    if(collection[i].artist === artist){
      matchingAlbums.push(collection[i])
    }
  }
  return matchingAlbums
}












// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
