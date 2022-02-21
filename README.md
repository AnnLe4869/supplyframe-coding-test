# Anime viewer

This is simple web app that display the top animes of all times. Data from [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2). Have a simple pagination for navigation

## Step to reproduce

1. Obtain a client ID from MyAnimeList

    Please follow the instruction on [MAL Getting started with the API](https://myanimelist.net/forum/?topicid=1973141). Copy only the Client ID because the app only use the public information. See [MAL Public information can now be accessed without authentication](https://myanimelist.net/forum/?topicid=1973077) on how this works

2. Create a file named `.env` at the project root directory. Create a variable named `MAL_CLIENT_ID` and parse the Client ID you copy in step 1 to this variable. After you have done this step, your `.env` file should look lie

    ```bash
    MAL_CLIENT_ID="your_client_id_go_here"
    ```

3. Run `npm install` to install all dependencies

4. Run `npm start` to start the app. The app is run at port 5000. Visit [localhost:5000](http://localhost:5000/) to see the page

**Optional**: if you want to change the port from 5000 to another port, you can create a variable in `.env` file and name it `PORT`. You can assign the port number you want the app to run there. After you did this, the `.env` file should look like

```bash
MAL_CLIENT_ID="your_client_id_go_here"
PORT=6000
```

## For developer

To start the app on developer mode, which auto refresh the terminal when change is detected, run

```bash
npm run dev
```

To test the app, run

```bash
npm run test
```

This test use snapshot to test the UI, so if you change the UI content, you will need to update the snapshot. To update the snapshot, run

```bash
npm run test:update
```

This project uses Sass to fetch only the necessary classes from Bootstrap. If you change any styles, you may need to rebuild the style. To rebuild the style, run

```bash
npm run build
```