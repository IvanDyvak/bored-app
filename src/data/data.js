export default async function getData(url) {
  return fetch(url).then(response => {
    const result = response.json();
    return result;
  });
}
