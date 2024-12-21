## Getting Started

### Prerequisites

- Node.js
- MongoDB
- yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install the dependencies:
   ```sh
   yarn
   ```
3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGOOSE_URI=<your-mongodb-uri>
   PORT=<your-port>
   ```

### Running the Server

Start the server:

```sh
yarn dev
```

### API Endpoints

1. Get All Ingredients

- Route: /ingredients
  Method: GET
  Sample Response:

```json
{
  "msg": "Ingredients fetched successfully",
  "result": 12,
  "data": [
    {
      "_id": "674b35d84723ef7e98d94975",
      "name": "salt",
      "price": 12.99,
      "quantity": 10,
      "__v": 0,
      "createdAt": "2024-12-21T21:57:12.306Z",
      "updatedAt": "2024-12-21T21:57:12.306Z"
    }
  ]
}
```

2. Create a New Ingredient

- Route: /ingredients
  Method: POST
  Sample Response:

```json
{
    "msg":"Ingredient created successfully",
    "data":{
  "_id": "674b35d84723ef7e98d94975",
  "name": "salt",
  "price": 12.99,
  "quantity": 10,
  "__v": 0,
  "createdAt": "2024-12-21T21:57:12.306Z",
  "updatedAt": "2024-12-21T21:57:12.306Z",

}
}

```

3. Update an Ingredient

- Route: /ingredients/:id
  Method: PUT
  Sample Response:

```json
{
    "msg":"Ingredient updated successfully",
    "data":{
  "_id": "674b35d84723ef7e98d94975",
  "name": "salt",
  "price": 12.99,
  "quantity": 10,
  "__v": 0,
  "createdAt": "2024-12-21T21:57:12.306Z",
  "updatedAt": "2024-12-21T21:57:12.306Z",

}
}

```

4. Delete an Ingredient

- Route: /ingredients/:id
  Method: DELETE
  Sample Response:

```json
{
  " msg": "Ingredient deleted successfully"
}
```
