// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ 
    code: 200,
    "data": 
    [
      {
        "name": "One dance",
        "author": "Crake feat CatKid & Cyla",
        "time": "2:54"
      }, 
      {
        "name": "Panda",
        "author": "Cattee",
        "time": "4:06"
      },
      {
        "name": "Can't Stop the Feeling!",
        "author": "Catin Cimberlake",
        "time": "3:56"
      },
      {
        "name": "Work From Home",
        "author": "Cat Harmony feat Colla",
        "time": "3:34"
      }
    ],
  });
}
