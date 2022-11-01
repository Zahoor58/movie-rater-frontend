const TOKEN="bab9a0296938f8b1e19845b146e6ee86407f2fef"
export class API {
  static updateMovie(mov_id,body) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    })
  }
}
