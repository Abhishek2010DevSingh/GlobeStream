# GlobeStream

GlobeStream is a Svelte-based application that provides users with the latest news headlines and a search functionality to explore articles on various topics.

## Features

- **Top Headlines:** Stay updated with the most recent news from around the world.
- **Search:** Find articles by entering keywords or topics of interest.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abhishek2010DevSingh/GlobeStream.git
   cd GlobeStream
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the NewsAPI key:**

   - Obtain an API key from [NewsAPI](https://newsapi.org/docs/get-started).
   - Create a `.env` file in the root directory of the project.
   - Add your API key to the `.env` file:

     ```
     API_KEY=your_newsapi_key_here
     ```

   *Ensure that the `.env` file is included in your `.gitignore` to prevent exposing your API key in version control.*

## Development

To start the development server:

```bash
npm run dev
```

This will start the server, and you can access the application in your browser at `http://localhost:5173`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).
