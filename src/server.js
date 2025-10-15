import app from './app.js'; // Here we specified the extension ".js" because we are working on a node app. This is not necessary in a React oor NextJS app

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
