import server from './server.js';

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
