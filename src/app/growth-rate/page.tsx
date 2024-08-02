"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  initialAmount: z.number().positive().nonnegative(),
  finalAmount: z.number().positive().nonnegative(),
});

const GrowthRate = () => {
  const [result, setResult] = useState<string>(parseFloat("0").toFixed(2));

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialAmount: 0,
      finalAmount: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { initialAmount, finalAmount } = data;

    const growthRate = ((finalAmount - initialAmount) / initialAmount) * 100;

    const result = parseFloat(growthRate.toFixed(2));

    setResult(result.toString());
  };

  return (
    <section className="flex flex-col gap-4 mx-auto p-8">
      <h1 className="text-2xl font-bold text-center">Growth Rate Calculator</h1>

      <div className="flex flex-wrap-reverse justify-center gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:w-1/2 space-y-8 gap-4"
          >
            <FormField
              control={form.control}
              name="initialAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Initial Amount <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Initial Amount"
                      type="number"
                      {...form.register("initialAmount", {
                        valueAsNumber: true,
                      })}
                    />
                  </FormControl>
                  <FormDescription>
                    The initial amount of the investment or asset.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="finalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Final Amount <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Final Amount"
                      type="number"
                      {...form.register("finalAmount", { valueAsNumber: true })}
                    />
                  </FormControl>
                  <FormDescription>
                    The final amount of the investment or asset.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" className="w-full">
                Calculate
              </Button>

              <Button
                type="reset"
                className="w-full"
                variant={"outline"}
                onClick={() => {
                  form.reset();
                  setResult(parseFloat("0").toFixed(2));
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>

        <div className="w-full sm:w-1/2 flex flex-col gap-4 p-8">
          <h2 className="text-lg font-bold text-center">Results</h2>

          <div className="flex gap-2 items-center justify-center">
            <p>
              Growth Rate:{" "}
              <span className="text-primary font-bold">{result}</span>
              <span>%</span>
            </p>
            <Copy
              size={16}
              className="text-primary cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(result.toString());

                toast({
                  title: "Copied to clipboard",
                  variant: "default",
                });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthRate;
