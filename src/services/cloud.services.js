import firebase from "../firebase";
const db = firebase.collection("/cluds");

class CloudDataService {
  getAll() {
    return db;
  }

  create(cloud) {
    return db.add(cloud);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const CloudDataService = new CloudDataService();
export default CloudDataService;
