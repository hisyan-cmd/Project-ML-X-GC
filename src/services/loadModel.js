const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-prediction-storage123/model.json');
}
module.exports = loadModel;
