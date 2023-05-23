class KafkaService {
  url = 'https://kafka-express-service-babyguma.cloud.okteto.net/';
 
  reaction = async (name) => {
   await fetch(this.url + 'like?name=' + name, {
      method: 'GET',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },  
   })  
      .then((response) => console.log(response.json()))
      .then((data) => {
        console.log(data);
      })  
      .catch((err) => {
         console.log(err.message);
      }); 
  }

}

const KafkaDataService = new KafkaDataService();
export default KafkaDataService;
