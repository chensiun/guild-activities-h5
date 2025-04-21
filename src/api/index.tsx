const baseUrl = 'https://elysia-atom.douni.one/api'

export async function fetchData() {
    const response = await fetch(`${baseUrl}/guild/?page=1&pageSize=10`);
    console.log(1122, response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}