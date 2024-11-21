export const users = [
  {
    name: "Ward",
    email: "ward@example.com",
    password: "1234",
    vote: "",
    type: "user",
  },
  {
    name: "Dania",
    email: "dania@example.com",
    password: "1234",
    vote: "",
    type: "admin",
  },
];

export const characters = [
  {
    name: "Iron Man",
    voteCount: 0,
  },
  {
    name: "Captain America",
    voteCount: 0,
  },
  {
    name: "Thor",
    voteCount: 0,
  },
  {
    name: "Spider Man",
    voteCount: 0,
  },
];

export async function getCharacter(id) {
  const responseU = await fetch(
    `https://67373d98aafa2ef222332359.mockapi.io/presidents/${id}`
  );
  const character = await responseU.json();
  return character;
}
