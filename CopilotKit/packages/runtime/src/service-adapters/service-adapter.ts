import { MessageInput } from "../graphql/inputs/message.input";
import { RuntimeEventSource } from "./events";

export interface CopilotKitResponse {
  stream: ReadableStream;
  headers?: Record<string, string>;
}

export interface CopilotRuntimeChatCompletionRequest {
  model?: string;
  eventSource: RuntimeEventSource;

  // TODO-PROTOCOL: replace any with a more specific type once we have it in graphql
  tools?: any[];
  messages: MessageInput[];
  threadId?: string;
}

export interface CopilotRuntimeChatCompletionResponse {
  stream?: ReadableStream;
  threadId?: string;
  runId?: string;
}

export interface CopilotServiceAdapter {
  process(
    request: CopilotRuntimeChatCompletionRequest,
  ): Promise<CopilotRuntimeChatCompletionResponse>;
}