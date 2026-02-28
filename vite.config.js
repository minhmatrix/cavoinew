plugins: [
  react(),
  {
    name: 'root-404',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          res.statusCode = 404;
          res.end();
        } else {
          next();
        }
      });
    }
  }
]
