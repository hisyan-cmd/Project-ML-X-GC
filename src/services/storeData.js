const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-hisyan-a9e2a77800e8')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-hisyan',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;
