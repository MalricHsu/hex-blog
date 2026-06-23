import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "請輸入姓名"),
  phone: z
    .string()
    .min(8, "請輸入手機號碼")
    .regex(/^09\d{8}$/, "手機號碼格式不正確"),
  email: z.string().min(1, "請輸入電子信箱").email("請輸入正確格式"),
  note: z.string().optional(),
});

export const contactPageSchema = z.object({
  name: z.string().min(2, "請輸入姓名"),
  phone: z
    .string()
    .min(8, "請輸入手機號碼")
    .regex(/^09\d{8}$/, "手機號碼格式不正確"),
  email: z.string().min(1, "請輸入電子信箱").email("請輸入正確格式"),
  note: z.string().optional(),
});
