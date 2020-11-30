exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: {
      message: "Hello from the BeanAPI",
      data: {}
    }
  };
};
