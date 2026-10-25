"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  Form,
  RHFCheckbox,
  RHFInput,
  RHFSelect,
  RHFTextarea,
} from "@/components/hook-form";
import { Button, Typography } from "@/components/ui";

const schema = z.object({
  fullName: z.string().trim().min(2, "نام را با حداقل ۲ حرف وارد کنید."),
  phone: z
    .string()
    .regex(
      /^09[0-9]{9}$/,
      "شماره موبایل باید ۱۱ رقم انگلیسی و با 09 شروع شود."
    ),
  course: z.string().min(1, "یک دوره را انتخاب کنید."),
  message: z.string().max(300, "متن پیام باید حداکثر ۳۰۰ حرف باشد."),
  consent: z
    .boolean()
    .refine(Boolean, "برای تست فرم، این گزینه را انتخاب کنید."),
});
type DemoValues = z.infer<typeof schema>;
const defaultValues: DemoValues = {
  fullName: "",
  phone: "",
  course: "",
  message: "",
  consent: false,
};

export function DemoForm() {
  const methods = useForm<DemoValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const onSubmit = async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 400));
    toast.success(
      "اعتبارسنجی موفق بود؛ این فرم نمایشی است و اطلاعاتی ارسال نشد."
    );
    methods.reset(defaultValues);
  };
  return (
    <Form methods={methods} onSubmit={onSubmit} className="space-y-5">
      <Typography variant="caption" tone="subtle">
        فرم نمایشی با React Hook Form و Zod؛ داده‌ها ذخیره یا ارسال نمی‌شوند. با
        ارسال فرم خالی، خطاها را ببینید.
      </Typography>
      <div className="grid gap-4 sm:grid-cols-2">
        <RHFInput
          name="fullName"
          label="نام و نام خانوادگی"
          placeholder="مثلاً احسان محمدی"
          autoComplete="name"
          required
        />
        <RHFInput
          name="phone"
          label="شماره موبایل"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="ltr"
          placeholder="09123456789"
          required
        />
      </div>
      <RHFSelect name="course" label="دوره مورد علاقه" required>
        <option value="">انتخاب دوره</option>
        <option value="english">زبان انگلیسی</option>
        <option value="german">زبان آلمانی</option>
        <option value="ielts">آیلتس</option>
      </RHFSelect>
      <RHFTextarea
        name="message"
        label="پیام شما"
        placeholder="درباره هدفتان از یادگیری زبان بنویسید."
        helperText="اختیاری؛ حداکثر ۳۰۰ حرف"
      />
      <RHFCheckbox name="consent" label="متوجه شدم که این یک فرم نمایشی است." />
      <div className="flex flex-wrap gap-3">
        <Button type="submit" loading={methods.formState.isSubmitting}>
          تست اعتبارسنجی
        </Button>
        <Button variant="outline" onClick={() => methods.reset(defaultValues)}>
          پاک کردن فرم
        </Button>
      </div>
    </Form>
  );
}
