export default function uploadPhoto (filename) {
  return new Promise(reject => {
    if (filename === filename) {
      reject('${filename} cannot be processed');
    }
  });
}
