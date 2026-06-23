export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = contactPageSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: result.error.issues.map((map) => map.message).join("、"),
    });
  }

  console.log("表單已送出", result.data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    success: true,
    message: "聯繫表單已送出",
  };
});
