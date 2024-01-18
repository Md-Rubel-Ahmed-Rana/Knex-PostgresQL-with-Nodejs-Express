# Node-Express TypeScript Project

## Setup

Follow these steps to set up and run the application:

```bash
git clone https://github.com/Md-Rubel-Ahmed-Rana/Knex-PostgresQL-with-Nodejs-Express.git

cd Knex-PostgresQL-with-Nodejs-Express

npm install


 # for node with Javascript
npm start
or
# for ts-node-dev with Typescript
npm run dev
```

### Make sure that yo have a .env file on root and put necessary credentials

[Postman API Documentation](https://documenter.getpostman.com/view/30109120/2s9YsRcUsa)

## API Response Format

The API responses from this project following format:

```json
{
  "success": true,
  "message": "Data found",
  "data": {
    /*  Actual data here */
  }
}
```

### API endpoint list

#### User APIs

1. http://localhost:5000/api/v1/user/register (POST)
   body:

   ```json
   {
     "name": "Md Rubel Ahmed Rana",
     "email": "mdrubelahmedrana@gmail.com",
     "password": "123456"
   }
   ```

2. http://localhost:5000/api/v1/auth/login (POST)
   body:

   ```json
   {
     "email": "mdrubelahmedrana@gmail.com",
     "password": "123456"
   }
   ```

3. http://localhost:5000/api/v1/auth/ (GET)
   headers: {
   authorization: Bearer put access token here
   }

4. http://localhost:5000/api/v1/user/ (GET)
   headers: {
   authorization: Bearer put access token here
   }

5. http://localhost:5000/api/v1/user/single/1 (GET)
   headers: {
   authorization: Bearer put access token here
   }

6. http://localhost:5000/api/v1/user/update/1 (PATCH)
   headers: {
   authorization: Bearer put access token here
   }
   body:

   ```json
   {
     "id": 1,
     "name": "Rubel ",
     "email": "rubel@gmail.com",
     "created_at": "2024-01-17T09:44:24.884Z",
     "updated_at": "2024-01-17T09:44:24.884Z"
   }
   ```

7. http://localhost:5000/api/v1/user/delete/1 (DELETE)
   headers: {
   authorization: Bearer put access token here
   }

#### Album APIs

5. http://localhost:5000/api/v1/album/add (POST)
   headers: {
   authorization: Bearer put access token here
   }
   body:

```json
{
  "title": "Abbey Road new",
  "release_year": 1969,
  "genre": "test",
  "user_id": 2
}
```

7. http://localhost:5000/api/v1/album (GET)
   headers: {
   authorization: Bearer put access token here
   }

8. http://localhost:5000/api/v1/album/single/1 (GET)
   headers: {
   authorization: Bearer put access token here
   }

9. http://localhost:5000/api/v1/album/update/1 (PATCH)
   headers: {
   authorization: Bearer put access token here
   }
   body:

   ```json
   {
     "id": 1,
     "title": "The Dark Side of the Moon updated",
     "release_year": 1973,
     "genre": "Progressive Rock",
     "user_id": 1,
     "created_at": "2024-01-17T11:58:27.064Z",
     "updated_at": "2024-01-17T11:58:27.064Z"
   }
   ```

10. http://localhost:5000/api/v1/album/delete/1 (DELETE)
    headers: {
    authorization: Bearer put access token here
    }

#### Artist APIs

11. http://localhost:5000/api/v1/artist/add (POST)
    headers: {
    authorization: Bearer put access token here
    }
    body:

```json
{
  "name": "Rubel"
}
```

12. http://localhost:5000/api/v1/artist (GET)
    headers: {
    authorization: Bearer put access token here
    }

13. http://localhost:5000/api/v1/artist/single/1 (GET)
    headers: {
    authorization: Bearer put access token here
    }

14. http://localhost:5000/api/v1/artist/update/1 (PATCH)
    headers: {
    authorization: Bearer put access token here
    }
    body:

    ```json
    {
      "id": 11,
      "name": "Rubel updated",
      "created_at": "2024-01-18T07:46:06.526Z",
      "updated_at": "2024-01-18T07:46:06.526Z"
    }
    ```

15. http://localhost:5000/api/v1/artist/delete/1 (DELETE)
    headers: {
    authorization: Bearer put access token here
    }

#### Song APIs

16. http://localhost:5000/api/v1/song/add (POST)
    headers: {
    authorization: Bearer put access token here
    }
    body:

```json
{
  "title": "Rolling in the Deep test",
  "duration": 230,
  "album_id": 2,
  "user_id": 2
}
```

17. http://localhost:5000/api/v1/song (GET)
    headers: {
    authorization: Bearer put access token here
    }

18. http://localhost:5000/api/v1/song/single/1 (GET)
    headers: {
    authorization: Bearer put access token here
    }

19. http://localhost:5000/api/v1/song/update/1 (PATCH)
    headers: {
    authorization: Bearer put access token here
    }
    body:

    ```json
    {
      "id": 2,
      "title": "Mon mane na",
      "duration": 240,
      "album_id": 2,
      "user_id": 1,
      "created_at": "2024-01-17T16:07:35.021Z",
      "updated_at": "2024-01-17T16:07:35.021Z"
    }
    ```

20. http://localhost:5000/api/v1/song/delete/1 (DELETE)
    headers: {
    authorization: Bearer put access token here
    }
