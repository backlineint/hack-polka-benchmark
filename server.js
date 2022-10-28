const polka = require("polka");

function one(req, res, next) {
  req.hello = "world";
  next();
}

function two(req, res, next) {
  req.foo = "...needs better demo";
  next();
}

polka()
  .use(one, two)
  .get("/", (req, res) => {
    res.end(
      `Hello ${req.hello}! ${req.foo}. This is a very stripped down server route. It better be fast!`
    );
  })
  .get("/users/:id", (req, res) => {
    console.log(`~> Hello, ${req.hello}`);
    res.end(`User: ${req.params.id}`);
  })
  .listen(8080, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:8080`);
  });
