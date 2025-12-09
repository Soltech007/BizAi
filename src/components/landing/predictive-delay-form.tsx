"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getDelayPrediction } from "@/app/actions";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { PredictiveDelayOutput } from "@/ai/flows/predictive-delay-alerts";
import { Card, CardContent } from "../ui/card";

const FormSchema = z.object({
  origin: z.string().min(2, "Origin is required."),
  destination: z.string().min(2, "Destination is required."),
  currentLocation: z.string().min(2, "Current location is required."),
  estimatedArrivalTime: z.string().min(2, "E.T.A. is required."),
  vehicleType: z.string().min(2, "Vehicle type is required."),
  cargoDescription: z.string().min(2, "Cargo description is required."),
});

type FormData = z.infer<typeof FormSchema>;

export default function PredictiveDelayForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictiveDelayOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      origin: "Mumbai, India",
      destination: "Delhi, India",
      currentLocation: "Jaipur, India",
      estimatedArrivalTime: "Tomorrow 8:00 PM",
      vehicleType: "16-wheeler truck",
      cargoDescription: "Electronic goods",
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError(null);
    setResult(null);

    const response = await getDelayPrediction(data);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setError(response.error || "An unknown error occurred.");
    }
    setLoading(false);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origin</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Mumbai, India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Delhi, India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="currentLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Jaipur, India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimatedArrivalTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Arrival Time</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Tomorrow 8:00 PM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Get Prediction"
            )}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {result && (
          <Card className="bg-accent">
            <CardContent className="p-4 space-y-3">
              <div>
                <p className="font-semibold text-sm">Delay Likelihood</p>
                <p className="text-lg font-bold text-primary">{result.delayLikelihood}</p>
              </div>
              <div>
                <p className="font-semibold text-sm">Reason</p>
                <p>{result.delayReason}</p>
              </div>
              <div>
                <p className="font-semibold text-sm">Suggested Action</p>
                <p>{result.suggestedAction}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
