export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email) {
    throw createError({ statusCode: 400, statusMessage: "請輸入email" });
  }
  //模擬送出去
  console.log("收到email", body.email);
  //製造3秒鐘的延遲
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    success: true,
    message: "訂閱成功",
  };
});
