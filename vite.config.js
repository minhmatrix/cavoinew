import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // nothing special here any more
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
