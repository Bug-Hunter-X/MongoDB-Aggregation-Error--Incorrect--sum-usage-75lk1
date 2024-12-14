```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { status: "active" }
  },
  {
    $group: { 
      _id: "$userId",
      total: { $sum: "$amount" } 
    }
  }
]);
```