import { useEffect, useState } from "react";
import * as AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  endpoint: process.env.REACT_APP_AWS_ENDPOINT,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const useDynamoDBData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var docClient = new AWS.DynamoDB.DocumentClient();
      let params = {
        TableName: "WPICourse"
      };

      docClient.scan(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          setData(data.Items);
        }
      });
    };

    fetchData();
  }, []);

  return data;
};

export default useDynamoDBData;
