/**
 * Lead Submission Boundary Adapter Service
 * Clean Code (Chapter 8: Boundaries & Third-Party APIs):
 * Isolates HTTP network I/O, idempotency key propagation, timeout aborts,
 * and response normalization from UI components.
 */

export const DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS = 15_000;

export interface LeadSubmissionPayload {
  intent: string;
  name: string;
  phone?: string;
  email?: string;
  companyName?: string;
  website?: string;
  spend?: string;
  budget?: string;
  selectedDay?: string;
  selectedTimeSlot?: string;
  serviceInterest?: string;
  message?: string;
  painPoints?: string[];
}

export interface LeadSubmissionResult {
  success: boolean;
  requestId?: string;
  error?: string;
}

/**
 * Submits lead data to the backend /api/leads endpoint.
 * Enforces client-side timeout guards and idempotency key headers.
 */
export async function submitLead(
  payload: LeadSubmissionPayload,
  idempotencyKey: string,
  timeoutMs = DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS
): Promise<LeadSubmissionResult> {
  try {
    const serializedPayload = JSON.stringify(payload);

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey,
      },
      body: serializedPayload,
      signal: AbortSignal.timeout(timeoutMs),
    });

    const data = await response.json();

    if (!response.ok || data.status !== 'notification_accepted' || typeof data.requestId !== 'string') {
      return {
        success: false,
        error: data.message || 'Capture failed',
      };
    }

    return {
      success: true,
      requestId: data.requestId,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown network failure';
    return {
      success: false,
      error: errorMessage,
    };
  }
}
