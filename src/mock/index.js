import Mock from 'mockjs'

console.log('mock')

Mock.mock('./api/target', (req, res) => {
  let targetList = Mock.mock({
    "targetList|1-10": [{
      "name": "@cname",
      "abstract": "@word(2,4)",
      "tag|1": [
        "Project",
        "Collect",
        "Make",
        "Achieve",
        "Pause",
        "Abolish",
      ],
      "action": "@word(2,4)",
      "createTime": "@datetime",
      "updateTime": "@datetime"
    }]
  });
  return targetList;
})

