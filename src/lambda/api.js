exports.handler = async (event, context) => {
  const data = {
    message: "Hello from the BeanAPI",
    data: {}
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
