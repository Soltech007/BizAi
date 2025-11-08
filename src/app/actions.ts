"use server";

import {
  predictDeliveryDelay,
  type PredictiveDelayInput,
  type PredictiveDelayOutput,
} from "@/ai/flows/predictive-delay-alerts";

export async function getDelayPrediction(data: PredictiveDelayInput): Promise<{
  success: boolean;
  data?: PredictiveDelayOutput;
  error?: string;
}> {
  try {
    // In a real app, you would add authentication and authorization checks here.
    const result = await predictDeliveryDelay(data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getDelayPrediction:", error);
    // It's better not to expose raw error messages to the client.
    return { success: false, error: "Failed to get prediction due to a server error." };
  }
}
