const base = require("airtable").base("appmjA56rlblK5a1b");

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

export function getReadingTable() {
  const readingTable = [];
  return new Promise((resolve, reject) => {
    base("Reading")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const id = record.getId();
            const name = record.get("Name");
            const status = record.get("Status");
            const finished = record.get("Finished");
            const url = record.get("URL");
            const imageURL = record.get("ImageURL");

            readingTable.push({
              id,
              name,
              status,
              finished,
              url,
              imageURL,
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return reject(err);
          }
          return resolve(readingTable);
        }
      );
  });
}

export function getPlayingTable() {
  const playingTable = [];
  return new Promise((resolve, reject) => {
    base("Playing")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const id = record.getId();
            const name = record.get("Name");
            const status = record.get("Status");
            const url = record.get("URL");
            const imageURL = record.get("ImageURL");

            playingTable.push({
              id,
              name,
              status,
              url,
              imageURL,
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return reject(err);
          }
          return resolve(playingTable);
        }
      );
  });
}

export function getUsingTable() {
  const usingTable = [];
  return new Promise((resolve, reject) => {
    base("Using")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const id = record.getId();
            const name = record.get("Name");
            const notes = record.get("Notes");
            const url = record.get("URL");
            const tags = record.get("Tags");

            usingTable.push({
              id,
              name,
              notes,
              url,
              tags,
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return reject(err);
          }
          return resolve(usingTable);
        }
      );
  });
}
