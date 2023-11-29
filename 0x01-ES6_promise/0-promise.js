export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    const srname = 'Kuria';
    if (srname === 'Kuria') {
      resolve(srname);
    } else {
      reject('srname must be Kuria');
    }
  });
}
