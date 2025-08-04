# mongodbweb-backend

This project is a simple Node.js application that connects to a MongoDB database and sets up an HTTP server to fetch and return a list of users in JSON format.

## Prerequisites

- Docker installed on your machine
- MongoDB running locally or accessible from the Docker container

## Getting Started

To build and run the Docker container for this application, follow these steps:

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd mongodbweb-backend
   ```

2. **Build the Docker image**:
   ```
   docker build -t mongodbweb-backend .
   ```

3. **Run the Docker container**:
   ```
   docker run -p 3000:3000 mongodbweb-backend
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000/` to see the list of users in JSON format.

## API Endpoints

- `GET /`: Returns a JSON object containing the list of users.

## License

This project is licensed under the MIT License.