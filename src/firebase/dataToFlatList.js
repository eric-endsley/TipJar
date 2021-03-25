export default function dataToFlatList(querySnapshot) {
  console.log(querySnapshot)
  let dataArray = []; 
    querySnapshot.forEach((doc) => {
      console.log(doc)
      const dataObj = doc.data();
      dataObj["id"] = doc.id;
      dataArray.push(dataObj)
    });
  console.log(dataArray)
  return dataArray;
}


