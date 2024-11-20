import express from "express";
import dotenv from "dotenv";

dotenv.config();

const posts = [
  {
    id: 1,
    description: "Gato desconfiado",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    description: "Selfie do gato",
    image: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    description: "Paisagem com gato",
    image: "https://picsum.photos/seed/cats/400/300",
  },
  {
    id: 4,
    description: "Gato fazendo yoga",
    image: "https://source.unsplash.com/random?cat,yoga",
  },
  {
    id: 5,
    description: "Gato em um café",
    image: "https://loremflickr.com/320/240/cat,coffee",
  },
  {
    id: 6,
    description: "Gato explorando a natureza",
    image: "https://unsplash.com/photos/nature,cat",
  },
];

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

app.get("/", (_, response) => {
  response.status(200).json({ message: "Welcome !!!" });
});

app.get("/posts", (_, response) => {
  response.status(200).json(posts);
});

const getPostById = (id) => {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
};

app.get("/posts/:id", (request, response) => {
  const index = getPostById(request.params.id);

  response.status(200).json(posts[index]);
});
