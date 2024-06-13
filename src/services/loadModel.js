const tf = require('@tensorflow/tfjs-node');
 
async function loadModel() {
    return tf.loadLayersModel('https://storage.googleapis.com/bucket-model-ml-hh/Model-jagung/model.json');
}
 
module.exports = loadModel;