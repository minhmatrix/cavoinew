import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // intercept root request in dev and return 404 so browser shows default not-found page
    // use configureServer hook instead of middlewareMode
  },
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
})
