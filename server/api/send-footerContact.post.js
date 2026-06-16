export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //看看body跟contactSchema 是否符合定義的規則
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: result.error.issues.map((issue) => issue.message).join("、"),
    });
  }

  console.log("表單已送出", result.data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    success: true,
    message: "聯繫表單已送出",
  };
});
