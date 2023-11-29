export default function handleResponseFromAPI (promise) {
  return new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject('The fake API is not working currently');
    }
  });
  then(console.log('Got a response from the API'));
}
